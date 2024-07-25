import { api_option } from '../../utils/constant';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {  addTopRatedMovies } from '../../utils/movieSlice';

const useTopRatedMovies =()=> {
    const dispatch = useDispatch();

  const getTopRatedMovies = async ()=> {
    const data = await fetch
    ('https://api.themoviedb.org/3/movie/top_rated?page=1', 
        api_option
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  }
  useEffect(()=> {
    getTopRatedMovies()
  },[])
};
export default useTopRatedMovies;