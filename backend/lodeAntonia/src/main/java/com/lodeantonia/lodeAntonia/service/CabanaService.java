package com.lodeantonia.lodeAntonia.service;

import com.lodeantonia.lodeAntonia.model.Cabana;
import com.lodeantonia.lodeAntonia.repository.CabanaRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CabanaService {

    private final CabanaRepository cabanaRepository;

    public CabanaService(CabanaRepository cabanaRepository) {
        this.cabanaRepository = cabanaRepository;
    }

    public List<Cabana> findAll() {
        return cabanaRepository.findAll();
    }

    public Cabana save (Cabana cabana) {
        return  cabanaRepository.save(cabana);
    }

    public Optional<Cabana> findById(Long id){
        return cabanaRepository.findById(id);
    }

}
