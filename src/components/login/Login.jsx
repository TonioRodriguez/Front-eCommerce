import { useContext } from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const Login = () => {
  let navigate = useNavigate();
  const url = 'http://localhost:4000/api/v1/auth/login';
  const url2 = 'http://localhost:4000/api/v1/users/me';
  const { user, setUser } = useContext(UserContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data)
    axios.post(url, data)
      .then(res => {
        console.log(res.data)
        // setUser(res.data)
        return (
          axios.get(url2, {
            headers: {
              'Access-Control-Allow-Origin': '*',
              Authorization: `Bearer ${res.data.token}`
            }
          }).then(res => {
            console.log(res.data)
            setUser(res.data)
            navigate('/profile', { replace: true })
          })
        )
      })
  }

  return (
    <div>
      <h1>Login</h1>
      <hr />
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("email", { required: true })} />
          <input type="password" {...register("password", { required: true })} />
          {errors.lastName && <p>password is required</p>}
          <input type="submit" />
        </form>
      </div>
    </div>
  )
}

export default Login