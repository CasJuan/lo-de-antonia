package com.lodeantonia.lodeAntonia.service;

import com.lodeantonia.lodeAntonia.model.Cabana;
import com.lodeantonia.lodeAntonia.repository.CabanaRepository;
import com.lodeantonia.lodeAntonia.repository.ImagenRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class CabanaService {

    private final CabanaRepository cabanaRepository;

    private final ImagenRepository imagenRepository;

    public CabanaService(CabanaRepository cabanaRepository, ImagenRepository imagenRepository) {
        this.cabanaRepository = cabanaRepository;
        this.imagenRepository = imagenRepository;
    }

    public List<Cabana> findAll() {
        return cabanaRepository.findAll();
    }

    public Cabana save (Cabana cabana) {
        cabana.setId(null);
        if(cabanaRepository.existsByNombre(cabana.getNombre())){
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Ya existe una cabaña con este nombre ");
        }
        return  cabanaRepository.save(cabana);
    }

    public Optional<Cabana> findById(Long id){
        return cabanaRepository.findById(id);
    }

    @Transactional
    public void deleteById (Long id){
        imagenRepository.deleteByCabanaId(id);
        cabanaRepository.deleteById(id);
    }

    public Optional<Cabana> update (Long id, Cabana datos){
        return cabanaRepository.findById(id).map(cabana -> {
            cabana.setNombre(datos.getNombre());
            cabana.setPrecio(datos.getPrecio());
            cabana.setDescripcion(datos.getDescripcion());
            cabana.setCapacidad(datos.getCapacidad());
            return cabanaRepository.save(cabana);
        });
    }

}
