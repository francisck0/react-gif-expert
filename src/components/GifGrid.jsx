import { GifItem } from './GifItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({ category }) => {

  const {images, isLoading } = useFetchGifs( category );

  // console.log( {isLoading} )

  return (
    <>
      <h3>{ category }</h3>

      {/* AND LÓGICO: Si isLoading está en true, se muestra el elemento <p> 
      Puedo usar un ternario, pero no es tan limpio como este ejemplo.
      Tambien puedo crear un componente <LoadingMessage isLoading={ isLoading } /> que dentro haga la logica para mostrar o no el elemento */}
      {
        isLoading && <h2>Cargendo..</h2>
      }

      <div className="card-grid">
        {
          images.map( image => (
            <GifItem 
              key={image.id} 
              { ...image }
            />
          ))
        }
      </div>
    </>
  )
}
