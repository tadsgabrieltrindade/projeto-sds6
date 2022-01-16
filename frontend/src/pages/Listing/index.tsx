import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "Utils/requests";
import { MoviePage } from "types/movie";

function Listing() {
  //paginação
  const [pageNumber, setPageNumber] = useState(0);

  //este estado guarda a página que foi buscado na requisição
  const [page, setPage] = useState<MoviePage>({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 12,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true,
  });

  useEffect(() => {
    axios
      .get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=id`)
      .then((response) => {
        const data = response.data as MoviePage;
        setPage(data);
      });
  }, [pageNumber]);

  //função responsável por mudar o número da página
  const handlePageChange = (newPageNumber : number) =>{
    setPageNumber(newPageNumber);
  }

  return (
    <>
      <Pagination page={page} onChange={handlePageChange}/>
      <div className="container">
        <div className="row">
          {page.content.map((movie) => (
            <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
              <MovieCard movie={movie} />
            </div>
          ))}

          {/* Poderia ser também:
          {page.content.map(movie =>{
                return (
                  <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                  <MovieCard movie={movie} />
                </div>
                )
            })} */}
        </div>
      </div>
    </>
  );
}

export default Listing;
