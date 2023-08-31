import {useState, useEffect} from 'react'

function BookSignup({user}){

    const [formData, setFormData] = useState({
        category: "",
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const respounse = await fetch('http://localhost:5555/books', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
        }
    }

    return (
        
        <div>
          <h1>Book Form</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <select onChange={(e) => setFormData({...formData, category: e.target.value})}>
                <option>Breakfast</option>
                <option>Lunch</option>
                <option>Dinner</option>
                <option>Dessert</option>
            </select>
            <button type="submit">Save Book</button>
          </form>
        </div>
    )
}

export default BookSignup