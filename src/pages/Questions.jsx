import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import QuestionsBody from '../components/QuestionsBody'

const Questions = () => {
    const token = localStorage.getItem("accessToken");
    return (
        <>
            {token ? (
                <>
                    <Navbar />
                    <QuestionsBody />
                    <Footer />
                </>
            ) : (
                window.location.href = "#/Registration"
            )}
        </>
    )
}

export default Questions