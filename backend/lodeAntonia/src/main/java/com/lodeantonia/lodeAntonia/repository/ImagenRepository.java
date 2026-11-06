package com.lodeantonia.lodeAntonia.repository;

import com.lodeantonia.lodeAntonia.model.Imagen;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ImagenRepository extends JpaRepository<Imagen, Long> {
    List<Imagen> findByCabanaId (Long cabanaId);
}
