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
    //Estado para guardar a página de requisição
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
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}`)
            .then(response => {
                const data = response.data as MoviePage;
                setPage(data);
            });
    }, [pageNumber])

    const handlePageChange = (newPageNumber: number) => {
        setPageNumber(newPageNumber);
    }

    return (
        <>
            <Pagination page={page} onChange={handlePageChange}/>

            <div className='container'>
                <div className='row'>
                    {page.content.map(movie => (
                        //Sempre que houver renderização dinâmica de uma coleção de objeto, é necessário o atributo key de valor único
                        <div key = {movie.id} className='col-sm-6 col-lg-4 col-xl-3 col-xxl-2 mb-3'>
                            <MovieCard movie={movie} />
                        </div>
                    ))}

                </div>
            </div>
            
        </>
    );
}

export default Listing;