import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ShopBody from '../components/ShopBody'

const Shop = () => {
    const token = localStorage.getItem("accessToken");

    return (
        <>
            {token ? (
                <>
                    <Navbar />
                    <ShopBody />
                    <Footer />
                </>
            ) : (
                window.location.href = "#/Registration"
                // navigate('/Registration')
            )}
        </>
    )
}

export default Shop