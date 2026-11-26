package com.lodeantonia.lodeAntonia.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "categorias")
public class Categoria {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "titulo", nullable = false, unique = true, length = 100)
    private String titulo;

    @Column(columnDefinition = "TEXT", name = "descripcion")
    private String descripcion;

    @Column( columnDefinition = "TEXT", name = "imagen")
    private String imagen;
}
