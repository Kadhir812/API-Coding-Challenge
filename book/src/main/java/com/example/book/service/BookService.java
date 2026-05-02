package com.example.book.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.book.dto.BookRequest;
import com.example.book.dto.BookResponse;
import com.example.book.exceptions.BadRequestException;
import com.example.book.exceptions.ResourceNotFoundException;
import com.example.book.model.Book;
import com.example.book.repository.BookRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BookService {

    private final BookRepository bookRepository;

    public List<BookResponse> getAllBooks() {
        return bookRepository.findAll()
                .stream()
                .map(this::toResponse)
                .toList();
    }

    public BookResponse getBookByIsbn(String isbn) {
        Book book = bookRepository.findById(isbn)
                .orElseThrow(() -> new ResourceNotFoundException("Book not found with ISBN: " + isbn));
        return toResponse(book);
    }

    public BookResponse addBook(BookRequest request) {
        if (bookRepository.existsById(request.getIsbn())) {
            throw new BadRequestException("Book already exists with ISBN: " + request.getIsbn());
        }

        Book book = toEntity(request);
        Book savedBook = bookRepository.save(book);
        return toResponse(savedBook);
    }

    public BookResponse updateBook(String isbn, BookRequest request) {
        Book existingBook = bookRepository.findById(isbn)
                .orElseThrow(() -> new ResourceNotFoundException("Book not found with ISBN: " + isbn));

        existingBook.setTitle(request.getTitle());
        existingBook.setAuthor(request.getAuthor());
        existingBook.setPublicationYear(request.getPublicationYear());

        Book updatedBook = bookRepository.save(existingBook);
        return toResponse(updatedBook);
    }

    public void deleteBook(String isbn) {
        if (!bookRepository.existsById(isbn)) {
            throw new ResourceNotFoundException("Book not found with ISBN: " + isbn);
        }

        bookRepository.deleteById(isbn);
    }

    private BookResponse toResponse(Book book) {
        return BookResponse.builder()
                .isbn(book.getIsbn())
                .title(book.getTitle())
                .author(book.getAuthor())
                .publicationYear(book.getPublicationYear())
                .build();
    }

    private Book toEntity(BookRequest request) {
        return Book.builder()
                .isbn(request.getIsbn())
                .title(request.getTitle())
                .author(request.getAuthor())
                .publicationYear(request.getPublicationYear())
                .build();
    }
}