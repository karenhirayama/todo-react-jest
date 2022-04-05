import { useState } from 'react'
import { Cards } from '../Cards/Cards';

export const Input = () => {
    const [todo, setTodo] = useState('');
    const [showCards, setShowCards] = useState(false);
    console.log(todo)

    const handleShowCards = () => {
        setShowCards(true)
    };

    return (
        <div>
            <input
                type='text'
                data-testid='inputTodo'
                placeholder='I need to do ...'
                onChange={(e) => {
                    setTodo(e.target.value);
                }}
            />
            <button
                onClick={(e) => {
                    handleShowCards();
                }}
            >
                ADD
            </button>
            <Cards
                todo={todo}
                showCards={showCards}
            />
        </div>
    )
}
