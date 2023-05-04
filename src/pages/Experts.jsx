import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ExpertsBody from '../components/ExpertsBody'

const Experts = () => {
    const token = localStorage.getItem("accessToken");
    return (
        <>
            {token ? (
                <>
                    <Navbar />
                    <ExpertsBody />
                    <Footer />
                </>
            ) : (
                window.location.href = "#/Registration"
                // navigate('/Registration')
            )}
            {/* <Navbar />
            <ExpertsBody />
            <Footer /> */}
        </>
    )
}

export default Experts