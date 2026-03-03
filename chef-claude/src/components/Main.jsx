import { useState } from "react"

export default function Main (){

    const [ingredients, setIngredients] = useState([])

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))
    
    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        console.log(newIngredient)
        console.log(setIngredients)
    }

    return(
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input type="text" aria-label="Add Ingredients..." placeholder="e.g Oregano" name="ingredient"/>
                <button> + Add Ingredients</button>
            </form>

            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}