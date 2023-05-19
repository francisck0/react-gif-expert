// rafc + tab: crea un componente funcional
// rafcp + tab: crea un componente funcional con PropTypes

import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const trimmedInputValue = inputValue.trim()

    if (trimmedInputValue.length <= 1) return;

    //emito el evento para que el padre se entere que hay una nueva categoría
    onNewCategory(trimmedInputValue)
    setInputValue('')
  }

  return (
    <form onSubmit={ onSubmit }>
      <input 
        type="text"
        placeholder="Buscar gifs"
        value={ inputValue }
        onChange={ handleInputChange }
      />
    </form>
  )
}
