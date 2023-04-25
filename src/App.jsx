import React, { useEffect, useState } from 'react'

export default function App() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState('black')
    const [word, setWord] = useState('duck')

    const incrementCount = () => {
        setCount(count + 1)
    }

    const decrementCount = () => {
        setCount(count - 1)
    }

    useEffect(() => {
        const changeColorOnClick = () => {
            if (color === 'black' || color === 'blue') {
                setColor('red')
                setWord('qauck')
            } else {
                setColor('blue')
                setWord('fuck')
            }
        }

        document.addEventListener('click', changeColorOnClick)

        return () => {
            document.removeEventListener('click', changeColorOnClick)
        }
    }, [color])

    return (
        <div>
            <div>{count}</div>
            <button onClick={incrementCount}>Plus 1</button>
            <button onClick={decrementCount}>Minus 1</button>
            <div
                id="mainDiv"
                style={{
                    color: 'white',
                    width: '200px',
                    height: '200px',
                    position: 'absolute',
                    left: '45%',
                    top: '45%',
                    padding: '20px',
                    backgroundColor: color,
                }}
            >
                This one can change the colour! Click me you {word}.
            </div>
        </div>
    )
}
