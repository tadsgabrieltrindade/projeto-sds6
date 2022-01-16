import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Movie } from "types/Movie";
import { BASE_URL } from "Utils/requests";
import { validateEmail } from "Utils/Validate";
import "./styles.css";

type Props = {
  movieId: string;
}

function FormCard({ movieId } : Props) {
 
  //declarando o useNavigate
  const navigate = useNavigate();

  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    axios.get(`${BASE_URL}/movies/${movieId}`)
    .then(response =>{
        setMovie(response.data);
    })
  }, [movieId]);

  
  //React.FormEvent<HTMLFormElement> é o tipo do dado evento
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //event.target é para chamar o formulário | as any (qlqr tipo) por conta do Typescript
    //.email é a tag com Id email
    //.value para pegar o valor da tag com id .email
    const email = (event.target as any).email.value;
    const score = (event.target as any).score.value;

    if(!validateEmail(email)){ 
        alert('E-mail inserido inválido! Por favor, tente novamente.');
        return;
    }
    
    //Preparação da requisição
    const config: AxiosRequestConfig = {
      baseURL: BASE_URL,
      method: 'PUT',
      url: '/scores',
      data: {
        email: email,
        movieId: movieId,
        score: score
      }
    }

    //executando a requisição
    axios(config).then(response =>{
      navigate("/"); //passo a rota como parâmetro
    })

  }

  return (
    <div className="dsmovie-form-container">
      <img
        className="dsmovie-movie-card-image"
        src={movie?.image}
        alt={movie?.title}
      />
      <div className="dsmovie-card-bottom-container">
        <h3>{movie?.title}</h3>
        <form className="dsmovie-form" onSubmit={handleSubmit}>
          <div className="form-group dsmovie-form-group">
            <label htmlFor="email">Informe seu email</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group dsmovie-form-group">
            <label htmlFor="score">Informe sua avaliação</label>
            <select className="form-control" id="score">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="dsmovie-form-btn-container">
            <button type="submit" className="btn btn-primary dsmovie-btn">
              Salvar
            </button>
          </div>
        </form>
        <Link to="/">
          <button className="btn btn-primary dsmovie-btn mt-3">Cancelar</button>
        </Link>
      </div>
    </div>
  );
}

export default FormCard;
