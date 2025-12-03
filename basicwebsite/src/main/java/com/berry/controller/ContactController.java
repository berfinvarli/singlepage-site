package com.berry.controller;

import com.berry.model.ContactDTO;
import com.berry.model.ContactMessage;
import com.berry.repository.ContactMessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDateTime;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:5173")
public class ContactController {

    @Autowired
    private ContactMessageRepository messageRepository;

    @PostMapping("/messages")
    public ResponseEntity<String> submitContact(@RequestBody ContactDTO contactDTO) {
        ContactMessage message = new ContactMessage();
        message.setName(contactDTO.getName());
        message.setEmail(contactDTO.getEmail());
        message.setMessage(contactDTO.getMessage());
        message.setSentAt(LocalDateTime.now());
        message.setRead(false);

        messageRepository.save(message);

        System.out.println("New Contact Message from " + contactDTO.getName() + ": " + contactDTO.getMessage());

        return new ResponseEntity<>("Message received and saved", HttpStatus.CREATED);
    }
}
