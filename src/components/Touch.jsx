import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Context } from '../Context'

const Touch = () => {
    const { name,setName,email,setEmail,comment,setComment,SendTouch,succes,setSucces } = useContext(Context);
  return (
    <TouchStyle>
        <h1 className="title">GET INTOUCH</h1>
        <div className="gray">
            <div className="btn">
                <Link to="/">Home</Link>
            </div>
            <div className="touch">
            {succes == true ? <div className='succes'><h1>succes</h1> <div><button onClick={(e) => {setSucces(false)}}>ok</button></div></div>: null}
            <div className="info">
                <h3>PHONE</h3>
                <p>+998 33 900 65 65</p>
                <h3>EMAIL</h3>
                <p>youremail@mail.com</p>
                <h3>TELEGRAM</h3>
                <p>@tg</p>
                <h3>ADDRESS</h3>
                <p>Uzbekistan,Tashkent</p>
                <h3>SOCIAL PROFILES</h3>
                <div className='icons'>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-telegram"></i>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-github"></i>
                <i class="fa-brands fa-tiktok"></i>
                </div>
            </div>
            <form className="send">
                <h1>FEEL FREE TO DROP ME A LINE</h1>
                <h2>If you have any suggestion, project or even you want to say Hello.. Please fill out the form below and I will reply you shortly.</h2>
                <input type="text" required onChange={(e) =>{setName(e.target.value)}} value={name} placeholder='Your Name'/>
                <input type="email" required onChange={(e) =>{setEmail(e.target.value)}} value={email}  placeholder='Your Email'/>
                <input type="text" required onChange={(e) =>{setComment(e.target.value)}} value={comment}  placeholder='Your Comment'/>
                <button onClick={SendTouch} disabled={name && email && comment ? false : true}>SEND MESSAGE</button>
            </form>
            </div>
        </div>
    </TouchStyle>
  )
}

const TouchStyle = styled.div`

@media screen and (max-width:551px){
    background: black;
    min-height: 932px;
.succes{
    position: absolute;
    z-index: 99;
    background: black;
    width: 400px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px 0;
    padding: 20px 0;
    border: 1px solid rgba(46, 168, 199, 1);
    border-radius: 5px;
    box-shadow: 15px 10px 25px 0px rgba(46, 168, 199, 1);
}
.succes h1{
    width: 100%;
    display: flex;
    color: white;
    justify-content: center;
}
.succes div{
    display: flex;
    justify-content: center;
}
.succes button{
    padding: 3px 10px;
    background: none;
    color:  rgba(46, 168, 199, 1);
    border: 1px solid rgba(46, 168, 199, 1);
    border-radius: 4px;
}
.title{
    color: white;
    display: flex;
    justify-content: center;
    font-size: 12px;
    padding: 10px 0;
}
.gray{
    padding: 20px 0;
    min-height: 369px;
    background: #3c3b3b;
}
.touch{
    width: 80%;
    margin: 10px auto;
    gap: 0 20px;
    display: flex;
    justify-content: center;
}
.info{
    width: 300px;
    padding: 10px;
    background: black;
    height: max-content;
}
.info h3{
    color:  rgba(46, 168, 199, 1);
    font-weight: 300;
    font-size: 12px;
    letter-spacing: 2px;
}
.info p{
    color: white;
    padding: 7px 0;
    font-size: 14px;
}
.icons{
    padding-top: 7px;
    display: flex;
    gap: 0 15px;
}
.icons i{
    color: white;
    font-size: 22px;
}
.send{
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 10px 0;
}
.send h1{
    color: white;
    font-size: 12px;
}
.send h2{
    color: gray;
    font-size: 12px;
    font-weight: 200;
}
.send input{
    width: 100%;
    padding: 0 0 5px 5px ;
    border: none;
    background: none;
    font-size: 12px;
    border-bottom: 1px solid gray;
    color: white;
}
input:focus{
    outline: none;
}
.send button{
    width: max-content;
    padding: 5px 10px;
    background: none;
    border: 1px solid rgba(46, 168, 199, 1);
    color: rgba(46, 168, 199, 1);
    border-radius:3px;
    font-size: 10px;
}
.send button:hover{
    background: rgba(46, 168, 199, 1);
    color: white;
}
.btn{
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    }
.btn a{
    padding: 5px 10px;
    border: 1px solid rgba(46, 168, 199, 1);
    color: rgba(46, 168, 199, 1);
    text-decoration: none;
    border-radius: 4px;
    font-size: 12px;
    margin-top: 10px;
}
}

@media screen and (min-width:551px){
    background: black;
    min-height: 932px;
.succes{
    position: absolute;
    z-index: 99;
    background: black;
    width: 400px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px 0;
    padding: 20px 0;
    border: 1px solid rgba(46, 168, 199, 1);
    border-radius: 5px;
    box-shadow: 15px 10px 25px 0px rgba(46, 168, 199, 1);
}
.succes h1{
    width: 100%;
    display: flex;
    color: white;
    justify-content: center;
}
.succes div{
    display: flex;
    justify-content: center;
}
.succes button{
    padding: 3px 10px;
    background: none;
    color:  rgba(46, 168, 199, 1);
    border: 1px solid rgba(46, 168, 199, 1);
    border-radius: 4px;
}
.title{
    color: white;
    display: flex;
    justify-content: center;
    padding: 10px 0;
    font-size: 14px;
}
.gray{
    padding: 20px 0;
    min-height: 669px;
    background: #3c3b3b;
}
.touch{
    width: 80%;
    margin: 10px auto;
    gap: 0 20px;
    display: flex;
    justify-content: center;
}
.info{
    width: 300px;
    padding: 10px;
    background: black;
}
.info h3{
    color:  rgba(46, 168, 199, 1);
    font-size: 16px;
    font-weight: 300;
}
.info p{
    color: white;
    padding: 7px 0;
    font-size: 16px;
}
.icons{
    padding-top: 7px;
    display: flex;
    gap: 0 15px;
}
.icons i{
    color: white;
    font-size: 22px;
}
.send{
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 15px 0;
}
.send h1{
    color: white;
    font-size: 18px;
}
.send h2{
    color: gray;
    font-size: 16px;
    font-weight: 200;
}
.send input{
    width: 100%;
    padding: 0 0 5px 5px ;
    border: none;
    background: none;
    border-bottom: 1px solid gray;
    color: white;
}
input:focus{
    outline: none;
}
.send button{
    width: max-content;
    padding: 5px 10px;
    background: none;
    border: 2px solid rgba(46, 168, 199, 1);
    color: rgba(46, 168, 199, 1);
    border-radius:3px;
    font-size: 14px;
}
.send button:hover{
    background: rgba(46, 168, 199, 1);
    color: white;
}
.btn{
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    }
.btn a{
    padding: 5px 10px;
    border: 1px solid rgba(46, 168, 199, 1);
    color: rgba(46, 168, 199, 1);
    text-decoration: none;
    border-radius: 4px;
    margin-top: 10px;
}
}

@media screen and (min-width:751px){
    background: black;
    min-height: 732px;
.succes{
    position: absolute;
    z-index: 99;
    background: black;
    width: 400px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px 0;
    padding: 20px 0;
    border: 1px solid rgba(46, 168, 199, 1);
    border-radius: 5px;
    box-shadow: 15px 10px 25px 0px rgba(46, 168, 199, 1);
}
.succes h1{
    width: 100%;
    display: flex;
    color: white;
    justify-content: center;
}
.succes div{
    display: flex;
    justify-content: center;
}
.succes button{
    padding: 3px 10px;
    background: none;
    color:  rgba(46, 168, 199, 1);
    border: 1px solid rgba(46, 168, 199, 1);
    border-radius: 4px;
}
.title{
    color: white;
    display: flex;
    justify-content: center;
    padding: 10px 0;
    font-size: 18px;
}
.gray{
    padding: 20px 0;
    min-height: 669px;
    background: #3c3b3b;
}
.touch{
    width: 80%;
    margin: 10px auto;
    gap: 0 20px;
    display: flex;
    justify-content: center;
}
.info{
    width: 300px;
    padding: 10px;
    background: black;
}
.info h3{
    color:  rgba(46, 168, 199, 1);
    font-size: 18px;
    font-weight: 300;
}
.info p{
    color: white;
    padding: 7px 0;
    font-size: 16px;
}
.icons{
    padding-top: 7px;
    display: flex;
    gap: 0 15px;
}
.icons i{
    color: white;
    font-size: 22px;
}
.send{
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 15px 0;
}
.send h1{
    color: white;
    font-size: 20px;
}
.send h2{
    color: gray;
    font-size: 18px;
    font-weight: 200;
}
.send input{
    width: 100%;
    padding: 0 0 5px 5px ;
    border: none;
    background: none;
    border-bottom: 1px solid gray;
    color: white;
}
input:focus{
    outline: none;
}
.send button{
    width: max-content;
    padding: 5px 10px;
    background: none;
    border: 2px solid rgba(46, 168, 199, 1);
    color: rgba(46, 168, 199, 1);
    border-radius:3px;
    font-size: 14px;
}
.send button:hover{
    background: rgba(46, 168, 199, 1);
    color: white;
}
.btn{
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    }
.btn a{
    padding: 5px 10px;
    border: 1px solid rgba(46, 168, 199, 1);
    color: rgba(46, 168, 199, 1);
    text-decoration: none;
    border-radius: 4px;
    margin-top: 10px;
}
}

@media screen and (min-width:1440px){
    background: black;
.succes{
    position: absolute;
    z-index: 99;
    background: black;
    width: 400px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px 0;
    padding: 20px 0;
    border: 1px solid rgba(46, 168, 199, 1);
    border-radius: 5px;
    box-shadow: 15px 10px 25px 0px rgba(46, 168, 199, 1);
}
.succes h1{
    width: 100%;
    display: flex;
    color: white;
    justify-content: center;
}
.succes div{
    display: flex;
    justify-content: center;
}
.succes button{
    padding: 3px 10px;
    background: none;
    color:  rgba(46, 168, 199, 1);
    border: 1px solid rgba(46, 168, 199, 1);
    border-radius: 4px;
}
.title{
    color: white;
    display: flex;
    justify-content: center;
    padding: 20px 0;
}
.gray{
    padding: 20px 0;
    min-height: 669px;
    background: #3c3b3b;
}
.touch{
    width: 80%;
    margin: 0 auto;
    gap: 0 20px;
    display: flex;
    justify-content: center;
}
.info{
    width: 300px;
    padding: 10px;
    background: black;
}
.info h3{
    color:  rgba(46, 168, 199, 1);
    font-weight: 300;
}
.info p{
    color: white;
    padding: 7px 0;
    font-size: 14px;
}
.icons{
    padding-top: 7px;
    display: flex;
    gap: 0 15px;
}
.icons i{
    color: white;
    font-size: 22px;
}
.send{
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 15px 0;
}
.send h1{
    color: white;
    font-size: 20px;
}
.send h2{
    color: gray;
    font-size: 16px;
    font-weight: 200;
}
.send input{
    width: 100%;
    padding: 0 0 5px 5px ;
    border: none;
    background: none;
    border-bottom: 2px solid gray;
    color: white;
}
input:focus{
    outline: none;
}
.send button{
    width: max-content;
    padding: 5px 10px;
    background: none;
    border: 2px solid rgba(46, 168, 199, 1);
    color: rgba(46, 168, 199, 1);
    border-radius:3px;
    font-size: 12px;
}
.send button:hover{
    background: rgba(46, 168, 199, 1);
    color: white;
}
.btn{
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    }
.btn a{
    padding: 5px 10px;
    border: 1px solid rgba(46, 168, 199, 1);
    color: rgba(46, 168, 199, 1);
    text-decoration: none;
    border-radius: 4px;
    margin-top: 10px;
}
}
`

export default Touch