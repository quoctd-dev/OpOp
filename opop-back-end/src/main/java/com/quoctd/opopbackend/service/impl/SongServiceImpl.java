package com.quoctd.opopbackend.service.impl;

import com.quoctd.opopbackend.model.entity.Song;
import com.quoctd.opopbackend.repository.SongRepository;
import com.quoctd.opopbackend.service.SongService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SongServiceImpl implements SongService {

    private final SongRepository songRepository;

    public SongServiceImpl(SongRepository songRepository) {
        this.songRepository = songRepository;
    }

    @Override
    public Song getSongById(Long songId) {
        return songRepository.findById(songId).orElse(null);
    }

    @Override
    public List<Song> getSongByTitle(String title) {
        return songRepository.findByTitleContainingIgnoreCase(title);
    }

    @Override
    public Song saveSong(Song song) {
        return songRepository.save(song);
    }

    @Override
    public List<Song> getAllSongs() {
        return songRepository.findAll();
    }
}
