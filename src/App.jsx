import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { UserProvider } from './context/UserProvider';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import CheckoutPage from './components/CheckoutPage'
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const App = () => {
  return (

    <>
      <UserProvider>
        <PayPalScriptProvider
        options={{
          "client-id": process.env.PAYPAL,
          components: "buttons",
          currency: "USD"
        }}
        >
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/checkoutpage' element={<CheckoutPage />} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>
        </PayPalScriptProvider>
      </UserProvider> 
    </>

  )
}

export default App