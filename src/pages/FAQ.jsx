import React from 'react'
import FaqBody from '../components/FaqBody'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const FAQ = () => {
    const token = localStorage.getItem("accessToken");
    return (
        <>
            {token ? (
                <>
                    <Navbar />
                    <FaqBody />
                    <Footer />
                </>
            ) : (
                window.location.href = "#/Registration"
            )}
        </>
    )
}

export default FAQ