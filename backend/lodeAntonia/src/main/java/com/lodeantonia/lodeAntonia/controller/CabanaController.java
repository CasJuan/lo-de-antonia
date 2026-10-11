package com.lodeantonia.lodeAntonia.controller;

import com.lodeantonia.lodeAntonia.model.Cabana;
import com.lodeantonia.lodeAntonia.service.CabanaService;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping
    public Cabana save(@RequestBody Cabana cabana) {
        return cabanaService.save(cabana);
    }

}
