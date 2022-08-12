import React, {useContext, useEffect} from 'react'
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'


const Profile = () => {
    let navigate = useNavigate()
    const { user } =useContext(UserContext)
    const isLoggedIn = !!user

    useEffect(()=>{
        if (!isLoggedIn){
            navigate('/login')
        }
    }, [isLoggedIn]
    )

  return (
    <>
        <h1>Profile</h1>
        {
            isLoggedIn ?
            (
                <>
                    <p>
                        <stron>Name:</stron>
                        {user.username}
                    </p></>
            )
            :
            (<p>
                No te has unido
            </p>)
        }
    </>
  )
}

export default Profile