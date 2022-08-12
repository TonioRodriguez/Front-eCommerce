import React from 'react'
import {useForm} from 'react-hook-form';
import axios from 'axios'

const{
    register,
    handleSubmit,
    formState: { errors },
} = useForm()

const SignUp = () => {

  const url = 'http://localhost:3000/api/v1/auth/register';
  
  const onSubmit = data => {
    console.log(data)
    //axios.post(url, data)
  }
  
    return (
    <div>
        <h1>SingUp</h1>
        <hr />
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor=''>Nombre</label>
          <input {...register("name", { required: true })} />
          <label htmlFor=''>Apellido</label>
          <input {...register("lastname", { required: true })} />
          <label htmlFor=''>Nombre de usuario</label>
          <input {...register("username", { required: true })} />
          <label htmlFor=''>Correo electrónico</label>
          <input {...register("email", { required: true })} />
          <label htmlFor=''>Contraseña</label>
          <input type="password" {...register("password", { required: true })} />
          {errors.lastName && <p>password is required</p>}
          <input type="submit" />
        </form>
        </div>
    </div>
  )
}

export default SignUp