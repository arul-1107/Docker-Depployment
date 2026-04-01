package com.app.api.controller;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api")
public class DashboardController {
    @PostMapping("/login")
    public Map<String, String> login() {
        return Collections.singletonMap("message", "Success");
    }

    @GetMapping("/stats")
    public List<Map<String, String>> stats() {
        return List.of(Map.of("label", "Revenue", "value", "$12,000"));
    }
}
