import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import OrdersBody from '../components/OrdersBody'
import { API_PATH } from '../tools/constants'

const Orders = () => {
    
    return (
        <>
            <Navbar />
            <OrdersBody />
            <Footer />
        </>
    )
}

export default Orders