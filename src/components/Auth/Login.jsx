import React, { useContext } from 'react'
import styled from 'styled-components'
import { Context } from '../../Context'

const Login = () => {
    const { Log,setUsername,setPassword } = useContext(Context)
  return (
    <LoginStyle>
        <div className="login">
            <form className="card">
                <h1>Login</h1>
                <input type="text" required onChange={(e) => {setUsername(e.target.value)}} placeholder='Username' />
                <input type="password" required onChange={(e) => {setPassword(e.target.value)}} autoComplete='false' placeholder='password' />
                <div className="btn">
                <button onClick={(e) => {Log(e)} }>Login</button>
                </div>
            </form>
        </div>
    </LoginStyle>
  )
}
const LoginStyle = styled.div`
    background: #3c3b3b;
    min-height: 745px;
    .login{
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

export default Login