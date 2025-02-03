import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className="wrapper">
                <NavBar />
                <Hero />
            </div>

        </>
    )
}

export default App
