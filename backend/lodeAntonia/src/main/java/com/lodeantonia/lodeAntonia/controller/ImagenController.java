package com.lodeantonia.lodeAntonia.controller;


import com.lodeantonia.lodeAntonia.model.Imagen;
import com.lodeantonia.lodeAntonia.service.ImagenService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;

@RestController
public class ImagenController {

    private final ImagenService imagenService;

    public ImagenController(ImagenService imagenService) {
        this.imagenService = imagenService;
    }

    @GetMapping("/imagenes")
    public List<Imagen> findAll() {
        return imagenService.findAll();
    }

    @PostMapping("/imagenes")
    public Imagen save(@RequestBody Imagen image){
        return imagenService.save(image);
    }

    @PostMapping("/imagenes/subir")
    public String subir(@RequestParam("archivo")MultipartFile archivo) throws IOException {
        Path carpeta = Paths.get("uploads");
        Files.createDirectories(carpeta);

        String original = archivo.getOriginalFilename();
        String extension = "";
        if(original != null && original.contains(".")){
            extension = original.substring(original.lastIndexOf("."));
        }

        String nombre = UUID.randomUUID() + extension;

        archivo.transferTo(carpeta.resolve(nombre));
        return nombre;
    }

    @GetMapping("/cabanas/{id}/imagenes")
    public List<Imagen> findByCabanaId(@PathVariable Long id){
        return imagenService.findByCabanaId(id);
    }

    @DeleteMapping("/imagenes/{id}")
    public ResponseEntity<Void> deleteById(@PathVariable Long id){
        if (imagenService.findById(id).isEmpty()){
            return ResponseEntity.notFound().build();
        }
        imagenService.deleteById(id);
        return ResponseEntity.noContent().build();
    }



}
