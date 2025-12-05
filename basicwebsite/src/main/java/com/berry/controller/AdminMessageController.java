package com.berry.controller;

import com.berry.model.ArchiveMessage;
import com.berry.model.ContactMessage;
import com.berry.repository.ArchiveMessageRepository;
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

    @Autowired
    private ArchiveMessageRepository archiveRepository;

    @GetMapping("/messages")
    @PreAuthorize("hasRole('ADMIN')")
    public List<ContactMessage> getUnreadMessages() {
        return repository.findByIsReadFalse();
    }

    @GetMapping("/messages/archived")
    @PreAuthorize("hasRole('ADMIN')")
    public List<ContactMessage> getArchivedMessages() {
        return repository.findByIsReadTrue();
    }

    @PutMapping("/messages/{id}/read")
    @PreAuthorize("hasRole('ADMIN')")
    public void markAsRead(@PathVariable Long id) {
        ContactMessage msg = repository.findById(id).orElseThrow();
        msg.setRead(true);
        repository.save(msg);
    }

    @PostMapping("/messages/{id}/archive")
    @PreAuthorize("hasRole('ADMIN')")
    public String archive(@PathVariable Long id) {

        ContactMessage msg = repository.findById(id).orElse(null);
        if (msg == null) return "Not found";

        msg.setRead(true);
        repository.save(msg);

        ArchiveMessage archive = new ArchiveMessage();
        archive.setOriginalMessageId(msg.getId());
        archive.setName(msg.getName());
        archive.setEmail(msg.getEmail());
        archive.setMessage(msg.getMessage());
        archive.setSentAt(msg.getSentAt());

        archiveRepository.save(archive);

        return "Archived";
    }
}
