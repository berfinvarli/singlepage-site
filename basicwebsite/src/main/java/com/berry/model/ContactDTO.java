package com.berry.model;

public class ContactDTO {
    private String name;
    private String message;

    public ContactDTO() {}

    public ContactDTO(String name, String message) {
        this.name = name;
        this.message = message;
    }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getMessage() { return message; }
    public void setMessage(String message) { this.message = message; }

    @Override
    public String toString() {
        return "ContactDTO{name='" + name + "', message='" + message + "'}";
    }
}
