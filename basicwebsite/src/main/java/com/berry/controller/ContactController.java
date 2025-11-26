package com.berry.controller;

import com.berry.model.ContactDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:5173")
public class ContactController {

    @PostMapping
    public ResponseEntity<String> submitContact(@RequestBody ContactDTO contact) {
        System.out.println("New Contact Message from " + contact.getName() + ": " + contact.getMessage());

//        try {
//            Thread.sleep(2000);
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }

        return ResponseEntity.ok("Message received");
    }
}
