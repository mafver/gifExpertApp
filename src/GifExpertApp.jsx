import { useState } from "react";
import { AddCategory, GifGrid} from "./components/";


export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch Man']);
  
    const modifyPhrase = (phrase) =>{
        const divPhrase = phrase.toLowerCase().split(' ');
        return divPhrase.map(word => {
            return (word[0].toUpperCase() + word.substr(1));
        }).join(' ');
    }

    const onAddCategory = (newCategory) =>{
        const convCategories = categories.map(category => category.toLowerCase())
        if ( convCategories.includes(newCategory.toLowerCase()) ) return;
        setCategories( [ modifyPhrase(newCategory), ...categories ])
    }

    return (
      <>
       
        <h1>GifExpertApp</h1>

        
        <AddCategory 
            onNewCategory = { onAddCategory }
        />
        
        { 
            categories.map( (category) => (
                <GifGrid 
                    key={ category }
                    category={ category }
                />
            )) 
        }
            
      </>
    )
  
}
