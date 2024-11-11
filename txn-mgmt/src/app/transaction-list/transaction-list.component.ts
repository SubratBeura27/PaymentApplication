import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TransactionService } from '../service/transaction-service.service'; // Replace with your service path
import { Transaction } from '../service/transaction-service.service'; // Replace with your model path

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {
  dataSource = new MatTableDataSource<Transaction>();
  displayedColumns: string[] = ['id', 'amount', 'timestamp', 'transactionType', 'status', 'currency'];
  newTransaction: Transaction = {
    id: null,
    amount: null,
    timestamp: new Date().toISOString(),
    transactionType: '',
    status: '',
    currency: ''
  };
  transactionTypes = ['SALE', 'REFUND'];
  transactionStatuses = ['APPROVED', 'DECLINED', 'FAILED'];
  transactionCurrencies = ['EUR', 'INR', 'GBP'];
  searchId: number = 0;

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {
    this.loadTransactions();
  }

  loadTransactions(): void {
    this.transactionService.getTransactions().subscribe(
      (data) => this.dataSource.data = data,
      (error) => console.error('Error loading transactions', error)
    );
  }
  saveTransaction(): void {
    this.transactionService.saveTransaction(this.newTransaction).subscribe(
      (response) => {
        alert('Transaction saved successfully!');
        this.loadTransactions();
        this.resetForm();
      },
      (error) => {
        console.error('Error saving transaction', error);
        alert('Failed to save transaction');
      }
    );
  }
  searchTransactionById(): void {
    if (this.searchId) {
      this.transactionService.getTransactionById(this.searchId).subscribe(
        (transaction: Transaction) => {
          this.dataSource.data = [transaction]; 
        },
        (error) => {
          console.error('Transaction not found:', error);
          alert('Transaction details not found for the id '+ this.searchId);
        }
      );
    } else {
      console.log('Please enter a transaction ID to search.');
    }
  }
  resetForm(): void {
    this.newTransaction = {
      id: null,
      amount: null,
      timestamp: new Date().toISOString(),
      transactionType: '',
      status: '',
      currency: ''
    };
  }
}
