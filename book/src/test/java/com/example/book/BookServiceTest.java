package com.example.book;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import java.time.Year;

import com.example.book.dto.BookRequest;
import com.example.book.dto.BookResponse;
import com.example.book.model.Book;
import com.example.book.repository.BookRepository;
import com.example.book.service.BookService;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
class BookServiceTest {

    @Mock
    private BookRepository bookRepository;

    @InjectMocks
    private BookService bookService;

    @Test
    void testAddBook() {
        BookRequest request = new BookRequest("978abc123", "Leo", "Lokesh K", Year.of(2023));

        Book savedBook = Book.builder()
                .isbn("978abc123")
                .title("Leo")
                .author("Lokesh K")
                .publicationYear(Year.of(2023))
                .build();

        when(bookRepository.existsById("978abc123")).thenReturn(false);
        when(bookRepository.save(any(Book.class))).thenReturn(savedBook);

        BookResponse response = bookService.addBook(request);

        assertEquals("978abc123", response.getIsbn());
        assertEquals("Leo", response.getTitle());
        assertEquals("Lokesh K", response.getAuthor());
        assertEquals(Year.of(2023), response.getPublicationYear());

        verify(bookRepository).existsById("978abc123");
        verify(bookRepository).save(any(Book.class));
    }

    @Test
    void testDeleteBook() {
        when(bookRepository.existsById("978abc123")).thenReturn(true);

        bookService.deleteBook("978abc123");

        verify(bookRepository).existsById("978abc123");
        verify(bookRepository).deleteById("978abc123");
    }
}
