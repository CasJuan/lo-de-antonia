package com.lodeantonia.lodeAntonia.controller;

import com.lodeantonia.lodeAntonia.model.Cabana;
import com.lodeantonia.lodeAntonia.service.CabanaService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/cabanas")
public class CabanaController {

    private final CabanaService cabanaService;

    public CabanaController(CabanaService cabanaService){
        this.cabanaService = cabanaService;
    }

    @GetMapping
    public List <Cabana> findAll() {
        return cabanaService.findAll();
    }

}
