package com.example.services;

import com.clickhouse.jdbc.ClickHouseDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.jdbc.core.JdbcTemplate;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.List;
import java.util.ArrayList;

@Service
public class ClickHouseService {
    
    @Autowired
    private ClickHouseDataSource dataSource;

    // Fetch tables from ClickHouse
    public List<String> getTables() {
        List<String> tables = new ArrayList<>();
        try (Connection connection = dataSource.getConnection();
             Statement stmt = connection.createStatement()) {
            ResultSet rs = stmt.executeQuery("SHOW TABLES");
            while (rs.next()) {
                tables.add(rs.getString(1));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return tables;
    }

    // Fetch columns for a table
    public List<String> getColumns(String tableName) {
        List<String> columns = new ArrayList<>();
        try (Connection connection = dataSource.getConnection();
             Statement stmt = connection.createStatement()) {
            ResultSet rs = stmt.executeQuery("DESCRIBE TABLE " + tableName);
            while (rs.next()) {
                columns.add(rs.getString(1));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return columns;
    }

    // Insert data into ClickHouse
    public boolean insertData(String table, String[] columns, List<List<String>> data) {
        String query = "INSERT INTO " + table + " (" + String.join(",", columns) + ") VALUES ";
        StringBuilder values = new StringBuilder();
        for (List<String> row : data) {
            values.append("(").append(String.join(",", row)).append("),");
        }
        query += values.toString().substring(0, values.length() - 1); // Remove last comma

        try (Connection connection = dataSource.getConnection();
             Statement stmt = connection.createStatement()) {
            stmt.execute(query);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
}
