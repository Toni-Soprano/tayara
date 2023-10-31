import React from 'react'
import {
    createBrowserRouter,
    Outlet,
    RouterProvider,
    ScrollRestoration,
} from 'react-router-dom'
import Header from './components/header'
import Home from './pages/home'
import Footer from './components/footer'
import Cart from './pages/cart'
import { productsData } from './api/api'
import Products from './components/products'

const Layout = () => {
    return (
        <div>
            <Header />
            <ScrollRestoration />
            <Outlet />
            <Footer />
        </div>
    )
}
const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: productsData,
            },
            {
                path: '/products/:id',
                element: <Products />,
            },
            {
                path: '/cart',
                element: <Cart />,
            },
        ],
    },
])

function App() {
    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default App
