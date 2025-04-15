package com.example.controllers;

import com.example.services.ClickHouseService;
import com.example.services.FileService;
import com.example.models.IngestionRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.util.List;

@RestController
@RequestMapping("/api")
public class IngestionController {

    @Autowired
    private ClickHouseService clickHouseService;

    @Autowired
    private FileService fileService;

    @PostMapping("/ingest")
    public String ingestData(@RequestBody IngestionRequest request) {
        if ("clickhouse".equalsIgnoreCase(request.getSource()) && "flatfile".equalsIgnoreCase(request.getTarget())) {
            // Fetch columns from ClickHouse
            List<String> columns = clickHouseService.getColumns(request.getTableName());

            // Generate CSV from ClickHouse data (You can write additional logic here)
            return "CSV Generated Successfully";
        } else if ("flatfile".equalsIgnoreCase(request.getSource()) && "clickhouse".equalsIgnoreCase(request.getTarget())) {
            // Parse the uploaded CSV file
            MultipartFile file = request.getFile();
            try {
                List<String[]> data = fileService.parseCSV(file);

                // Insert data into ClickHouse
                boolean result = clickHouseService.insertData(request.getTableName(), request.getSelectedColumns(), data);
                if (result) {
                    return "Data ingested successfully!";
                } else {
                    return "Data ingestion failed!";
                }
            } catch (Exception e) {
                e.printStackTrace();
                return "Error parsing file: " + e.getMessage();
            }
        } else {
            return "Invalid source/target configuration.";
        }
    }
}
