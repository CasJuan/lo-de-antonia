package com.lodeantonia.lodeAntonia.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "imagenes")
public class Imagen {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private  Long id;

    @Column( columnDefinition = "TEXT", name = "url")
    private String url;

    @ManyToOne
    @JoinColumn(name = "cabana_id")
    private Cabana cabana;

}
