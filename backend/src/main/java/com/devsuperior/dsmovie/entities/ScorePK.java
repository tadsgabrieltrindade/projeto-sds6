package com.devsuperior.dsmovie.entities;

import java.io.Serializable;

import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Embeddable //indica que essa é a classe de ID composta
public class ScorePK implements Serializable {
	private static final long serialVersionUID = 1L;

	@ManyToOne //muitos filmes para um usuário
	@JoinColumn(name = "movie_id") //o nome que ficará na tabela de score
	private Movie movie;
	
	@ManyToOne //muitos usuários em um filme
	@JoinColumn(name = "user_id")
	private User user;

	public ScorePK() {
	}

	public Movie getMovie() {
		return movie;
	}

	public void setMovie(Movie movie) {
		this.movie = movie;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

}
