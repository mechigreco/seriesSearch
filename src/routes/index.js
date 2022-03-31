import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SearchBar from '../components/Buscador/SearchBar'
import Menu from '../components/Menu/Menu'
const Home = ()=> <p>Home</p>
export const Paths = ()=> {
    return (
        <BrowserRouter >
            <Menu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/buscador" element={<SearchBar />} />
            </Routes>
        </BrowserRouter>
    )
}