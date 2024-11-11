package de.fiserv.ipg.exception;

public class TransactionSaveException extends RuntimeException {
    public TransactionSaveException(String message, Throwable cause) {
        super(message, cause);
    }
}
