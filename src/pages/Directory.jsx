import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import DirecBody from '../components/DirecBody'

const Directory = () => {
    const token = localStorage.getItem("accessToken");
    return (
        <>
            {token ? (
                <>
                    <Navbar />
                    <DirecBody />
                    <Footer />
                </>
            ) : (
                window.location.href = "#/Registration"
            )}
        </>
    )
}

export default Directory