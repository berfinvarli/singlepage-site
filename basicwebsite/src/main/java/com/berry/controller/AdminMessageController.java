package com.berry.controller;

import com.berry.model.ContactMessage;
import com.berry.repository.ContactMessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
public class AdminMessageController {

    @Autowired
    private ContactMessageRepository repository;

    @GetMapping("/messages")
    @PreAuthorize("hasRole('ADMIN')")
    public List<ContactMessage> getMessages() {
        return repository.findAll();
    }
}
