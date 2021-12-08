import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from '@/js/Layout/AppLayout'

function Home() {
  return <h2>Home</h2>;
}

function NotFound() {
  return <h2>404</h2>;
}

const App = () => {
    return (
        <>
            <AppLayout />
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<NotFound />} />

                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;
ReactDOM.render(
    <App />,
    document.getElementById('app')
)
