package com.berry.repository;

import com.berry.model.ArchiveMessage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ArchiveMessageRepository extends JpaRepository<ArchiveMessage, Long> {
}
