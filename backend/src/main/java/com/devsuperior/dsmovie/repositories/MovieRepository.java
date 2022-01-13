package com.devsuperior.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository <Movie, Long>{
	/*
	 * A interface JpaRepository oferece funções básicas para manipular o banco de dados
	 */
	
}
