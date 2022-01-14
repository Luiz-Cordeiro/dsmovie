import Pagination from 'components/Pagination';
import MovieCard from 'components/MovieCard';
import axios from 'axios';
import { BASE_URL } from 'utils/requests';
import { useEffect, useState } from 'react';
import { MoviePage } from 'types/movie';
function Listing() {


    //Uso do hook state

    const [pageNumber, setPageNumber] = useState(0);


    //Forma errada

    /*
    A biblioteca axios permite fazer requisições http de maneira simples
    */
    /*
    * useEffect permite que a requisição axios seja feita apenas 1 vez, quando o site é aberto
    * o primeiro argumento é uma função e o segundo é uma coleção de objetos que são monitorados
    */
    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=1`)
            .then(response => {
                const data = response.data as MoviePage;
                console.log(data);
                setPageNumber(data.number);
                
            });
    }, [])



    return (
        <>
            <p>{pageNumber}</p>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-6 col-lg-4 col-xl-3 col-xxl-2 mb-3'>
                        <MovieCard />
                    </div>
                    <div className='col-sm-6 col-lg-4 col-xl-3 col-xxl-2 mb-3'>
                        <MovieCard />
                    </div>
                    <div className='col-sm-6 col-lg-4 col-xl-3 col-xxl-2 mb-3'>
                        <MovieCard />
                    </div>
                    <div className='col-sm-6 col-lg-4 col-xl-3 col-xxl-2 mb-3'>
                        <MovieCard />
                    </div>
                    <div className='col-sm-6 col-lg-4 col-xl-3 col-xxl-2 mb-3'>
                        <MovieCard />
                    </div>
                </div>
            </div>
            <Pagination />
        </>
    );
}

export default Listing;