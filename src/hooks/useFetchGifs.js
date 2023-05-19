import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs'

// Un hook no es más que una función que devuelve algo.
export const useFetchGifs = ( category ) => {

  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const getImages = async () => {
    const gifs = await getGifs(category);
    setImages(gifs);
    setIsLoading(false);
  }

  useEffect(() => {
    getImages();
  }, [category])
  
  return {
    images,
    isLoading
  };

  
}
