import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface Transaction {
  id: number | null;
  amount: number | null;
  timestamp: string;
  transactionType: string;
  status: string;
  currency: string;
}


@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private baseUrl = 'http://localhost:8090/api/transactions'; 

  constructor(private http: HttpClient) {}

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.baseUrl);
  }

  saveTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(this.baseUrl, transaction);
  }

  getTransactionById(transactionId: number): Observable<Transaction> {
    return this.http.get<Transaction>(`${this.baseUrl}/${transactionId}`);
  }
}
