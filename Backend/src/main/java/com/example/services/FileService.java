package com.example.services;

import com.opencsv.CSVReader;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.io.InputStreamReader;
import java.util.List;

@Service
public class FileService {

    // Parse CSV file
    public List<String[]> parseCSV(MultipartFile file) throws Exception {
        try (InputStreamReader reader = new InputStreamReader(file.getInputStream())) {
            CSVReader csvReader = new CSVReader(reader);
            return csvReader.readAll();
        }
    }
}
