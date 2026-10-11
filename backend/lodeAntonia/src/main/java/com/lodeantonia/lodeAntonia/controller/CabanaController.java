package com.lodeantonia.lodeAntonia.controller;

import com.lodeantonia.lodeAntonia.model.Cabana;
import com.lodeantonia.lodeAntonia.service.CabanaService;
import org.springframework.http.ResponseEntity;
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

    @GetMapping("/{id}")
    public ResponseEntity<Cabana> findById (@PathVariable Long id){
        return cabanaService.findById(id)
                .map(ResponseEntity ::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Long id){
        if (cabanaService.findById(id).isEmpty()){
            return ResponseEntity.notFound().build();
        }
        cabanaService.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Cabana> update(@PathVariable Long id, @RequestBody Cabana datos){
        return cabanaService.update(id,datos)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }


}
