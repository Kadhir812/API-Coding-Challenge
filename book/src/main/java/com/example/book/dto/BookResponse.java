package com.example.book.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.Year;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BookResponse {

    private String isbn;
    private String title;
    private String author;
    private Year publicationYear;
}