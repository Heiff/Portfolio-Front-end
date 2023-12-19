import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
const Home = () => {
  return (
    <HomeStyle>
        <header>
          <div className='head'>
          <img src="" alt="img" />
            <div className='text'>
                <h1>Hi I'm <br /> Bohodir <br /> Ikromov</h1>
                <p>FULLSTACK DEVELOPER</p>
            </div>
          </div>
        </header>
        <div className='link'>
        <div className="card1">
        <Link to='/about'>ABOUT ME</Link>
        </div>
        <div className="card2">
        <Link to='/portfolio'>MY PORTFOLIO</Link>
        </div>
        <div className="card3">
        <Link to='/touch'>GET IN TOUCH</Link>
        </div>
        </div>
    </HomeStyle>
  )
}

const HomeStyle = styled.div`
    @media screen and (max-width:551px){
    background: black;
    min-height: 932px;
    header{
        background: black;
    }
    .head{
        display: flex;
        width: 80%;
        margin: 0 auto;
    }
    .head img{
        background: white;
        height: 200px;
        width: 200px;
        margin: 10px 0;
    }
    .text{
        display: flex;
        flex-direction: column;
        min-height: 100%;
        align-items: center;
        justify-content: center;
        margin-left: 5px;
    }
    .text h1{
        font-family: sans-serif;
        color: white;
        font-size: 18px;
    }
    .link{
       display: flex;
       justify-content: space-between; 
       background: #4b4a4a;
    }
    .text p{
        color: rgba(46, 168, 199, 1);
        margin-top: 5px;
        font-size: 6px;
    }
    .card1{
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin: 8px;
        height: 122px;
        background: black;
    }
    .card2{
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin: 8px 0;
        height: 122px;
        background: black;
    }
    .card3{
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin: 8px;
        height: 122px;
        background: black;
    }
    a{
        font-family: sans-serif;
        color: white;
        text-decoration: none;
        font-size: 12px;
    }
    }
    @media screen and (min-width:551px){
    background: black;
    min-height: 932px;
    header{
        background: black;
    }
    .head{
        display: flex;
        width: 80%;
        margin: 0 auto;
    }
    .head img{
        background: white;
        min-height: 200px;
        min-width: 200px;
        margin: 12px 0;
    }
    .text{
        display: flex;
        flex-direction: column;
        min-height: 100%;
        align-items: center;
        justify-content: center;
        margin-left: 10px;
    }
    .text h1{
        font-family: sans-serif;
        color: white;
        font-size: 28px;
    }
    .link{
       display: flex;
       justify-content: space-between; 
       background: #4b4a4a;
    }
    .text p{
        color: rgba(46, 168, 199, 1);
        margin-top: 10px;
        font-size: 9px;
    }
    .card1{
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin: 10px;
        height: 150px;
        background: black;
    }
    .card2{
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin: 10px 0;
        height: 150px;
        background: black;
    }
    .card3{
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin: 10px;
        height: 150px;
        background: black;
    }
    a{
        color: white;
        text-decoration: none;
        font-size: 12px;
        font-family: sans-serif;
    }
    }
    @media screen and (min-width:700px){
    background: black;
    .head img{
        height: 240px;
        width: 240px;
        margin: 10px 0;
    }
    .text{
        margin-left: 10px;
    }
    .text h1{
        font-size: 30px;
    }
    .text p{
        margin-top: 10px;
        font-size: 10px;
    }
    .card1{
        margin: 10px;
        height: 180px;
    }
    .card2{
        margin: 10px 0;
        height: 180px;
    }
    .card3{
        margin: 10px;
        height: 180px;
    }
    a{
        font-size: 16px;
    }
    }
    @media screen and (min-width:850px){
    background: black;
    .head img{
        height: 260px;
        width: 260px;
        margin: 15px 0;
    }
    .text{
        margin-left: 12px;
    }
    .text h1{
        font-size: 34px;
    }
    .text p{
        margin-top: 10px;
        font-size: 11px;
    }
    .card1{
        margin: 10px;
        height: 200px;
    }
    .card2{
        margin: 10px 0;
        height: 200px;
    }
    .card3{
        margin: 10px;
        height: 200px;
    }
    a{
        font-size: 16px;
    }
    }
    @media screen and (min-width:850px){
    background: black;
    .head img{
        height: 280px;
        width: 280px;
        margin: 20px 0;
    }
    .text{
        margin-left: 12px;
    }
    .text h1{
        font-size: 36px;
    }
    .text p{
        margin-top: 10px;
        font-size: 12px;
    }
    .card1{
        margin: 10px;
        height: 240px;
    }
    .card2{
        margin: 10px 0;
        height: 240px;
    }
    .card3{
        margin: 10px;
        height: 240px;
    }
    a{
        font-size: 20px;
    }
    }
    @media screen and (min-width:1200px){
    background: black;
    .head img{
        height: 300px;
        width: 300px;
        margin: 20px 0;
    }
    .text{
        margin-left: 12px;
    }
    .text h1{
        font-size: 38px;
    }
    .text p{
        margin-top: 12px;
        font-size: 13px;
    }
    .card1{
        margin: 12px;
        height: 240px;
    }
    .card2{
        margin: 12px 0;
        height: 240px;
    }
    .card3{
        margin: 12px;
        height: 240px;
    }
    a{
        font-size: 22px;
    }
    }
    @media screen and (min-width:1300px){
    background: black;
    .head img{
        height: 310px;
        width: 310px;
        margin: 20px 0;
    }
    .text{
        margin-left: 12px;
    }
    .text h1{
        font-size: 41px;
    }
    .text p{
        margin-top: 12px;
        font-size: 14px;
    }
    .card1{
        margin: 12px;
        height: 280px;
    }
    .card2{
        margin: 12px 0;
        height: 280px;
    }
    .card3{
        margin: 12px;
        height: 280px;
    }
    a{
        font-size: 22px;
    }
    }
    @media screen and (min-width:1440px){
        scroll
    header{
        background: black;
    }
    .head{
        display: flex;
        width: 80%;
        margin: 0 auto;
    }
    .head img{
        background: white;
        height: 360px;
        width: 360px;
        margin: 30px 0;
    }
    .text{
        display: flex;
        flex-direction: column;
        min-height: 100%;
        align-items: center;
        justify-content: center;
        margin-left: 20px;
    }
    .text h1{
        font-family: sans-serif;
        color: white;
        font-size: 48px;
    }
    .text p{
        margin-top: 10px;
        color: rgba(46, 168, 199, 1);
        font-size: 16px;
    }
    .link{
       display: flex;
       justify-content: space-between; 
       background: #4b4a4a;
    }
    .card1{
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin: 13px;
        height: 480px;
        background: black;
    }
    .card2{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        min-height: 100%;
        margin: 13px 0;
        width: 100%;
        height: 480px;
        background: black;
    }
    .card3{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        min-height: 100%;
        margin: 13px;
        width: 100%;
        height: 480px;
        background: black;
    }
    a{
        font-size: 24px;
        font-family: sans-serif;
        color: white;
        text-decoration: none;
    }
    }
    @media screen and (min-width: 2500px){
    min-height: 1500px;
    header{
        background: black;
    }
    .head{
        display: flex;
        width: 80%;
        margin: 0 auto;
    }
    .head img{
        background: white;
        height: 360px;
        width: 360px;
        margin: 30px 0;
    }
    .text{
        display: flex;
        flex-direction: column;
        min-height: 100%;
        align-items: center;
        justify-content: center;
        margin-left: 20px;
    }
    .text h1{
        font-family: sans-serif;
        color: white;
        font-size: 48px;
    }
    .text p{
        margin-top: 10px;
        color: rgba(46, 168, 199, 1);
        font-size: 16px;
    }
    .link{
       display: flex;
       justify-content: space-between; 
       background: #4b4a4a;
    }
    .card1{
        width: 100%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        margin: 13px;
        height: 480px;
        background: black;
    }
    .card2{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        min-height: 100%;
        margin: 13px 0;
        width: 100%;
        height: 480px;
        background: black;
    }
    .card3{
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        min-height: 100%;
        margin: 13px;
        width: 100%;
        height: 480px;
        background: black;
    }
    a{
        font-size: 24px;
        font-family: sans-serif;
        color: white;
        text-decoration: none;
    }
    }

`


export default Home