import React, { useContext } from 'react'
import styled from 'styled-components'
import { Context } from '../../Context'

const Register = () => {
    const { Reg,setUsername,setPassword } = useContext(Context)
  return (
    <RegisterStyle>
        <div className="register">
            <form className="card">
                <h1>Register</h1>
                <input type="text" required onChange={(e) => {setUsername(e.target.value)}} placeholder='Username' />
                <input type="password" required onChange={(e) => {setPassword(e.target.value)}} placeholder='password' />
                <div className="btn">
                <button onClick={(e) => {Reg(e)}}>Register</button>
                </div>
            </form>
        </div>
    </RegisterStyle>
  )
}

const RegisterStyle = styled.div`
    background: #3c3b3b;
    min-height: 745px;
    .register{
        display: flex;
        justify-content: center;
        flex-direction: column;
        min-height: 80vh;
        align-items: center;
    }
    .card{
        display: flex;
        flex-direction: column;
        padding: 20px;
        gap: 20px;
        background: white;
        border-radius: 8px;
    }
    .card h1{
        display: flex;
        justify-content: center;
    }
    .card input{
        height: 30px;
        width: 220px;
        padding-left: 5px;
    }
    .card .btn{
        display: flex;
        justify-content: center;
    }
    .card button{
        padding: 2px 10px;
        font-size: 16px;
    }

`

export default Register