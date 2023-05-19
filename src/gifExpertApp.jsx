import { useState } from 'react'
//Import con archivo de barril:
//import { AddCategory } from './components/AddCategory';
//import { GifGrid } from './components/GifGrid';
import { AddCategory, GifGrid } from './components';

function GifExpertApp() {

  const [categories, setCategories] = useState(['Eminem']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories])
    // setCategories(oldCategories => [...oldCategories, newCategory])
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      
      <AddCategory 
        onNewCategory={ onAddCategory }
      />

      {
        categories.map(category => (
          <GifGrid
            key={category}
            category={category} 
          />
        ))
      }
    </>
  );
}

export default GifExpertApp;