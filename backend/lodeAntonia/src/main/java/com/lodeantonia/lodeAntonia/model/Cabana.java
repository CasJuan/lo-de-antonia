package com.lodeantonia.lodeAntonia.model;


import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "cabanas")
public class Cabana {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "precio",precision = 10, scale = 2)
    private BigDecimal precio;

    @Column (columnDefinition = "TEXT", name = "descripcion")
    private String descripcion;

    @Column(name = "capacidad")
    private Integer capacidad;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @PrePersist
    public void prePersist(){
        createdAt = LocalDateTime.now();
    }


}
