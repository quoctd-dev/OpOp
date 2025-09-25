package com.quoctd.opopbackend.service;

import com.quoctd.opopbackend.model.entity.Song;

import java.util.List;

public interface SongService {
    public Song getSongById(Long songId);
    public List<Song> getSongByTitle(String title);
    public Song saveSong(Song song);
    public List<Song> getAllSongs();
}
