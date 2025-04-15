package com.example.models;

import org.springframework.web.multipart.MultipartFile;

public class IngestionRequest {
    private String source;
    private String target;
    private String tableName;
    private String[] selectedColumns;
    private MultipartFile file;

    // Getters and Setters
}
