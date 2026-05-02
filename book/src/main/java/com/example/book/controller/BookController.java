package com.example.book.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.book.dto.BookRequest;
import com.example.book.dto.BookResponse;
import com.example.book.exceptions.ApiResponse;
import com.example.book.service.BookService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/books")
@RequiredArgsConstructor
@Tag(name = "Book Management", description = "Manages book collection")
public class BookController {

    private final BookService bookService;

    @Operation(summary = "Retrieve all books")
    @GetMapping
    public ResponseEntity<ApiResponse<List<BookResponse>>> getAllBooks() {
        List<BookResponse> books = bookService.getAllBooks();
        return ResponseEntity.ok(ApiResponse.success(books));
    }

    @Operation(summary = "Retrieve a single book by ISBN")
    @GetMapping("/{isbn}")
    public ResponseEntity<ApiResponse<BookResponse>> getBookByIsbn(@PathVariable String isbn) {
        BookResponse book = bookService.getBookByIsbn(isbn);
        return ResponseEntity.ok(ApiResponse.success(book));
    }

    @Operation(summary = "Add a new book")
    @PostMapping()
    public ResponseEntity<ApiResponse<BookResponse>> addBook(@Valid @RequestBody BookRequest request) {
        BookResponse book = bookService.addBook(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(ApiResponse.success(book));
    }

    @Operation(summary = "Update an existing book")
    @PutMapping("/{isbn}")
    public ResponseEntity<ApiResponse<BookResponse>> updateBook(
            @PathVariable String isbn,
            @Valid @RequestBody BookRequest request) {
        BookResponse book = bookService.updateBook(isbn, request);
        return ResponseEntity.ok(ApiResponse.success(book));
    }

    @Operation(summary = "Delete a book by ISBN")
    @DeleteMapping("/{isbn}")
    public ResponseEntity<ApiResponse<String>> deleteBook(@PathVariable String isbn) {
        bookService.deleteBook(isbn);
        return ResponseEntity.ok(ApiResponse.success("Book deleted successfully"));
    }
}
