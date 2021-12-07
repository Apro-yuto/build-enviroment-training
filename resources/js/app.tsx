import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const rootElement = document.getElementById("root");

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}

function NotFound() {
  return <h2>404</h2>;
}

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<NotFound />} />

                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
ReactDOM.render(
    <App />,
    document.getElementById('app')
)
