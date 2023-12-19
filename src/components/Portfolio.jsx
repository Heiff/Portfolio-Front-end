import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Context } from '../Context'
import { useEffect } from 'react'
import { Pagination } from '@mui/material'

const Portfolio = () => {
    const { GetPortfolio,portfolio,portfolioPage } = useContext(Context);
    useEffect(() => {
        GetPortfolio()
    },[])
  return (
    <PortfolioStyle>
        <h1 className="title">MY PORTFOLIO</h1>
        <div className="gray">
            <div className="btn">
                <Link to='/'>Home</Link>
            </div>
            <div className="posts">
                {
                    portfolio.map((el) => {
                        return(
                            <div className="post">
                            <img src={`http://localhost:8080/${el.image}`} alt="img" />
                            <div className="more">
                            <h2>{el.title}</h2>
                            <div className="info">
                            <p>{el.date}</p>
                            </div>
                            </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="pagination">
            <Pagination count={portfolioPage} onChange={GetPortfolio}/>
            </div>
        </div>
    </PortfolioStyle>
  )
}

const PortfolioStyle = styled.div`
@media screen and (max-width:551px){
    background: black;
    min-height: 932px;
.title{
    display: flex;
    justify-content: center;
    color: white;
    font-size: 12px;
    padding: 5px 0;
}
.gray{
    background: #3c3b3b;
}
.posts{
    padding: 20px 0;
    width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 10px;
}
.post{
    background: black;
    padding: 5px;
    width: 100%;
    border-radius: 3px;
}
.post img{
    width: 100%;
    background: white;
    height:100px;
}
.more{
    padding:5px;
    display: flex;
    justify-content: space-between;
}
.more h2{
    color: white;
    font-size: 10px;
    font-weight: 300;
}
.info p{
    color: white;
    font-size: 10px;
}
.pagination{
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-items: center;
    min-height: 125px;
    padding: 20px 0;
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
        font-size: 10px;
}
}

@media screen and (min-width:551px){
    background: black;
    min-height: 732px;
.title{
    display: flex;
    justify-content: center;
    color: white;
    font-size: 14px;
    padding: 5px 0;
}
.gray{
    background: #3c3b3b;
}
.posts{
    padding: 20px 0;
    width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 10px;
}
.post{
    background: black;
    padding: 5px;
    width: 100%;
    border-radius: 3px;
}
.post img{
    width: 100%;
    background: white;
    height:150px;
}
.more{
    padding:5px;
    display: flex;
    justify-content: space-between;
}
.more h2{
    color: white;
    font-size: 12px;
    font-weight: 300;
}
.info p{
    color: white;
    font-size: 12px;
}
.pagination{
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-items: center;
    min-height: 125px;
    padding: 20px 0;
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
    font-size: 12px;
}
}

@media screen and (min-width:700px){
.post img{
    width: 100%;
    background: white;
    height:200px;
}
}

@media screen and (min-width:750px){
.title{
    font-size: 18px;
    padding: 10px 0;
}
.post img{
    width: 100%;
    background: white;
    height:220px;
}
.more h2{
    font-size: 14px;
}
.info p{
    font-size: 14px;
}
.btn a{
    font-size: 14px;
} 
}

@media screen and (min-width:1020px){
.title{
    font-size: 20px;
    padding: 10px 0;
}
.posts{
    padding: 20px 0;
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 15px;
}
.post img{
    height:170px;
}
.more h2{
    font-size: 16px;
    font-weight: 300;
}
.info p{
    font-size: 16px;
}
.btn a{
    font-size: 16px;
}
}

@media screen and (min-width:1250px){
.post img{
    width: 100%;
    background: white;
    height:220px;
}
}

@media screen and (min-width:1440px){
    background: black;
.title{
    display: flex;
    justify-content: center;
    color: white;
}
.gray{
    background: #3c3b3b;
}
.posts{
    padding: 20px 0;
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 20px;
}
.post{
    background: black;
    padding: 10px;
}
.post img{
    min-width: 100%;
    background: white;
    height:260px;
}
.more{
    padding: 10px 5px;
    display: flex;
    justify-content: space-between;
}
.more h2{
    color: white;
    font-size: 16px;
    font-weight: 300;
}
.info p{
    color: white;
    font-size: 18px;
}
.pagination{
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-items: center;
    min-height: 265px;
    padding: 20px 0;
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

export default Portfolio