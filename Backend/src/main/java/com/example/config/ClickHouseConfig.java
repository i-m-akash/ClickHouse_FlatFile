package com.example.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import com.clickhouse.jdbc.ClickHouseDataSource;

@Configuration
public class ClickHouseConfig {
    @Bean
    public ClickHouseDataSource clickHouseDataSource() {
        String url = "jdbc:clickhouse://localhost:9000";
        return new ClickHouseDataSource(url);
    }
}
