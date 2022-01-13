package com.devsuperior.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmovie.entities.User;

public interface UserRepository extends JpaRepository <User, Long>{
		/*
		 * A interface JpaRepository oferece funções básicas para manipular o banco de dados
		 */
		
	User findByEmail(String email);
}
