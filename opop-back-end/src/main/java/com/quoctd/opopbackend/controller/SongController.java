package com.quoctd.opopbackend.controller;

import com.quoctd.opopbackend.dto.ApiResponse;
import com.quoctd.opopbackend.dto.SongRequest;
import com.quoctd.opopbackend.dto.SongSearchRequest;
import com.quoctd.opopbackend.model.Result;
import com.quoctd.opopbackend.model.entity.Song;
import com.quoctd.opopbackend.service.impl.SongServiceImpl;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/songs")
public class SongController {

    private final SongServiceImpl songService;

    public SongController(SongServiceImpl songService) {
        this.songService = songService;
    }

    @GetMapping("/{id}")
    public ApiResponse<Song> getSongById(@PathVariable Long id) {
        return new ApiResponse<>(new Result(0, "OK"), songService.getSongById(id));
    }

    @GetMapping("/search")
    public ApiResponse<List<Song>> getSongByTitle(@RequestBody SongSearchRequest title) {
        List<Song> songs = songService.getSongByTitle(title.getTitle());
        if (!songs.isEmpty()) {
            return new ApiResponse<>(new Result(0, "OK"), songs);
        }
        return new ApiResponse<>(new Result(1, "Song not found"), null);
    }


    @PostMapping
    public ApiResponse<Song> saveSong(@RequestBody SongRequest songRequest) {
        Song song = new Song();
        song.setTitle(songRequest.getTitle());
        song.setArtist(songRequest.getArtist());
        return new ApiResponse<>(new Result(0, "OK"), songService.saveSong(song));
    }
    @GetMapping
    public ApiResponse<List<Song>> getAllSongs() {
        return new ApiResponse<>(new Result(0, "OK"), songService.getAllSongs());
    }
}
