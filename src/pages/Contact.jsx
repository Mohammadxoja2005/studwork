import React from 'react'
import ContactBody from '../components/ContactBody'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Contact = () => {
    const token = localStorage.getItem("accessToken");
    return (
        <>
            {token ? (
                <>
                    <Navbar />
                    <ContactBody />
                    <Footer />
                </>
            ) : (
                window.location.href = "#/Registration"
                // navigate('/Registration')
            )}
        </>
    )
}

export default Contact