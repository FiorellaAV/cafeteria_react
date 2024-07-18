
import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

const HomePage = lazy(() => import('./screens/home'))
const MenuPage = lazy(() => import('./screens/menu'))
const LocationsPage = lazy(() => import('./screens/locations'))
const ContactPage = lazy(() => import('./screens/contact'))

function App() {

    return (
        <Routes>
            <Route path='/home' element={<HomePage />} />
            <Route path='/menu' element={<MenuPage />} />
            <Route path='/locales' element={<LocationsPage />} />
            <Route path='/contacto' element={<ContactPage />} />
        </Routes>
    )
}

export default App
