import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { BASE_URL } from 'Utils/requests';
import { MoviePage } from 'types/Movie';

function Listing() {

  //paginação
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    axios.get(`${BASE_URL}/movies?size=5&page=4`)
    .then(response =>{
      const data = response.data as MoviePage;
      setPageNumber(data.number)
    })
  }, [])

  

  return (
    <>
    <p>{`Número da página: ${pageNumber}`}</p>
      <Pagination />
      <div className="container">
        <div className="row">
          
        <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>

          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>

          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>

          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>

          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Listing;
