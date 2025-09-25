package com.quoctd.opopbackend.dto;

public class SongSearchRequest {
    private String title;

    public SongSearchRequest() {
    }

    public SongSearchRequest(String title) {
        this.title = title;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
