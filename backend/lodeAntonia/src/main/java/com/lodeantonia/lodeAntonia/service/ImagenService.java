package com.lodeantonia.lodeAntonia.service;

import com.lodeantonia.lodeAntonia.model.Imagen;
import com.lodeantonia.lodeAntonia.repository.ImagenRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ImagenService {

    private final ImagenRepository imagenRepository;

    public ImagenService(ImagenRepository imagenRepository) {this.imagenRepository = imagenRepository;}

    public List<Imagen> findAll() {return imagenRepository.findAll();}

    public Imagen save (Imagen imagen) {return imagenRepository.save(imagen);}

    public Optional<Imagen> findById (Long id) {return imagenRepository.findById(id);}

    public void deleteById (Long id) {imagenRepository.deleteById(id);}

    public Optional<Imagen> update ( Long id, Imagen datos){
        return imagenRepository.findById(id).map(imagen -> {
            imagen.setUrl(datos.getUrl());
            return imagenRepository.save(imagen);
        });
    }

    public List<Imagen> findByCabanaId (Long cabanaId) {
        return imagenRepository.findByCabanaId(cabanaId);
    }

}
