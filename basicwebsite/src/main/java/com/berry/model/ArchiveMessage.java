package com.berry.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "archive_messages")
public class ArchiveMessage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long originalMessageId;

    private String name;
    private String email;

    @Column(columnDefinition = "TEXT")
    private String message;

    private LocalDateTime sentAt;

    public Long getId() { return id; }
    public Long getOriginalMessageId() { return originalMessageId; }
    public void setOriginalMessageId(Long originalMessageId) { this.originalMessageId = originalMessageId; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }

    public LocalDateTime getSentAt() { return sentAt; }
    public void setSentAt(LocalDateTime sentAt) { this.sentAt = sentAt; }
}
