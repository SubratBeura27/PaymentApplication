package de.fiserv.ipg.service;

import de.fiserv.ipg.entity.Transaction;
import de.fiserv.ipg.exception.TransactionNotFoundException;
import de.fiserv.ipg.exception.TransactionSaveException;
import de.fiserv.ipg.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Random;

@Service
public class TransactionService {

    private final TransactionRepository transactionRepository;

    @Autowired
    public TransactionService(TransactionRepository transactionRepository) {
        this.transactionRepository = transactionRepository;
    }

    public List<Transaction> getAllTransactions() {
        return transactionRepository.findAll();
    }

    public Transaction getTransactionById(long transactionId) {
        return transactionRepository.findById(transactionId)
                .orElseThrow(() -> new TransactionNotFoundException("Transaction id " + transactionId + " not found"));
    }

    public Transaction saveTransaction(Transaction transaction) {
        try {
            Random random = new Random();
            transaction.setTimestamp(LocalDateTime.now().minusDays(random.nextInt(30)));
            return transactionRepository.save(transaction);
        } catch (Exception e) {
            throw new TransactionSaveException("Failed to save transaction details", e);
        }
    }
}
