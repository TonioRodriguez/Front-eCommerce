import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import { UserProvider } from './context/UserProvider';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

const App = () => {
  return (

    <>
      <div>
      <Login />
      </div>

      <UserProvider>
        <PayPalScriptProvider
        options={{
          "client-id": "AYEkdDboj7foFTwEpUaUz6K7TWW_cnl92WBSmCwpt02es1dYtT8VXOiFTW5SpAZTUPHFWLiiGIkrn1Kr",
          components: "buttons",
          currency: "USD"
        }}
        >
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/signup' element={<SignUp />} />
          </Routes>
        </PayPalScriptProvider>
      </UserProvider> 
    </>

  )
}

export default App