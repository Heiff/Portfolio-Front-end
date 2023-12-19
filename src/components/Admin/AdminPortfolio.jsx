import React, { useContext } from 'react'
import styled from 'styled-components'
import AdminNavbar from './AdminNavbar'
import { Context } from '../../Context'
import { Pagination } from '@mui/material'

const AdminPortfolio = () => {
    const { Ok,setUpdIdPortfolio,CreatePortfolio,succes,UpdatePortfolio,DeletePortfolio,setPortfolioDate,setPortfolioImage,setPortfolioTitle,portfolio,GetPortfolio,portfolioPage } = useContext(Context);
    
  return (
    <AdminBlogsStyle>
        <AdminNavbar/>
        <div className="container">
            <div className='cards'>
                <div>
                <div className="posts">
                {
                    portfolio.map((el) => {
                        return(
                            <div key={el.id} className="post">
                            <h1>{el.id}</h1>
                            <img src={`http://localhost:8080/${el.image}`} alt="img" />
                            <div className="more">
                            <h2>{el.title}</h2>
                            <div className="info">
                            <p>{el.date}</p>
                            </div>
                            </div>
                            <button onClick={(e) =>DeletePortfolio(el.id)}>Delete</button>
                            </div>
                        )
                    })
                }
            </div>
                <div className="pagination">
                {
                    portfolio.length ? <Pagination count={portfolioPage} onChange={GetPortfolio} /> : null
                }
                </div>
                </div>
                {
                  succes ? <div className='succes'> <div><h1>Succes</h1> <button onClick={Ok}>ok</button> </div> </div> : 
                <div className='card'>
                <form onSubmit={CreatePortfolio} className="create">
                    <h1>Create Portfolio</h1>
                    <input type="text" required placeholder='Title' onChange={(e) => {setPortfolioTitle(e.target.value)}}/>
                    <input type="file" required onChange={(e) => {setPortfolioImage(e.target.files[0])}} />
                    <input type="date" required placeholder='date' onChange={(e) => {setPortfolioDate(e.target.value)}}/>
                    <button type='submit'>Create</button>
                </form>
                <form onSubmit={UpdatePortfolio} className="update">
                    <h1>Update Portfolio</h1>
                    <input type="number" required placeholder='Id' onChange={(e) => {setUpdIdPortfolio(e.target.value)}} />
                    <input type="text" placeholder='Title' onChange={(e) => {setPortfolioTitle(e.target.value)}}/>
                    <input type="file" onChange={(e) => {setPortfolioImage(e.target.files[0])}} />
                    <input type="date" placeholder='date' onChange={(e) => {setPortfolioDate(e.target.value)}}/>
                    <button type='submit'>Update</button>
                </form>
                </div> }
                
            </div>
        </div>
    </AdminBlogsStyle>
  )
}

const AdminBlogsStyle = styled.div`
@media screen and (max-width:551px){
background: #3c3b3b;
min-height: 745px;
.container{
    width: 90%;
    margin: 0 auto;
}
.cards{
    padding: 40px 0;
}
.posts{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 10px;
    margin:30px 0;
}
.post{
    width: 100%;
    padding: 5px;
    background: white;
    display: flex;
    flex-direction: column;
    gap: 10px 0;
    border-radius: 10px;
}
.post h1{
    display: flex;
    font-size: 14px;
    justify-content: center;
}
.post h2{
    display: flex;
    font-size: 12px;
}
.post img{
    width: 100%;
}
.post .more{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.post .more h2{
    font-size: 12px;
}
.post .info p{
    font-size: 12px;
}
.post button{
    padding: 4px;
    background: gray;
    border-radius: 6px;
    border:1px solid black ;
    color: white;
    font-weight: 500;
    font-size: 10px;
    letter-spacing: 1px;
    cursor: pointer;
}
.post button:hover{
    background: black;
}
.pagination{
    display: flex;
    justify-content: center;
    gap: 0 10px;
    padding-bottom: 30px;
}
.card{
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: space-between;
}
.create{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px 0;
}
.create h1{
    color: white;
    font-size: 16px;
}
.create input{
    width: 100%;
    height: 30px;
    border: none;
    border-radius: 6px;
    padding-left: 3px;
}
.create input:focus{
    outline: 3px solid black;
}
.create select{
    width: 100%;
    height: 30px;
    border-radius: 6px;
}
.create button{
    padding: 6px 16px;
    border-radius: 6px;
    border: 1px solid white;
}
.create button:hover{
    background: black;
    color: white;
    cursor: pointer;
}
.update{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px 0;
}
.update h1{
    color: white;
    font-size: 16px;
}
.update input{
    width: 100%;
    height: 30px;
    border: none;
    border-radius: 6px;
    padding-left: 3px;
}
.update input:focus{
    outline: 3px solid black;
}
.update select{
    width: 100%;
    height: 30px;
    border-radius: 6px;
}
.update button{
    padding: 6px 16px;
    border-radius: 6px;
    border: 1px solid white;
}
.update button:hover{
    background: black;
    color: white;
    cursor: pointer;
}
.succes{
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  z-index: 99;
  top: 140px;
  min-width: 80%;
  align-items: center;
}
.succes div{
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 6px;
  gap: 20px 0;
  padding: 40px;
}
.succes div h1{
  color: white;
  width: 100%;
}
.succes button{
  padding: 5px 7px;
  background: none;
  border: 1px solid white;
  color: white;
  border-radius: 50%;
  cursor: pointer;
}
.succes button:hover{
  background: white;
  color: black;
}
}

@media screen and (min-width:551px){
background: #3c3b3b;
min-height: 745px;
.container{
    width: 90%;
    margin: 0 auto;
}
.cards{
    padding: 40px 0;
}
.posts{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 10px;
    margin:30px 0;
}
.post{
    width: 100%;
    padding: 5px;
    background: white;
    display: flex;
    flex-direction: column;
    gap: 10px 0;
    border-radius: 10px;
}
.post h1{
    display: flex;
    font-size: 14px;
    justify-content: center;
}
.post h2{
    display: flex;
    font-size: 12px;
}
.post img{
    width: 100%;
}
.post .more{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.post .more h2{
    font-size: 12px;
}
.post .info p{
    font-size: 12px;
}
.post button{
    padding: 4px;
    background: gray;
    border-radius: 6px;
    border:1px solid black ;
    color: white;
    font-weight: 500;
    font-size: 10px;
    letter-spacing: 1px;
    cursor: pointer;
}
.post button:hover{
    background: black;
}
.pagination{
    display: flex;
    justify-content: center;
    gap: 0 10px;
    padding-bottom: 30px;
}
.card{
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: space-between;
}
.create{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px 0;
}
.create h1{
    color: white;
    font-size: 16px;
}
.create input{
    width: 100%;
    height: 30px;
    border: none;
    border-radius: 6px;
    padding-left: 3px;
}
.create input:focus{
    outline: 3px solid black;
}
.create select{
    width: 100%;
    height: 30px;
    border-radius: 6px;
}
.create button{
    padding: 6px 16px;
    border-radius: 6px;
    border: 1px solid white;
}
.create button:hover{
    background: black;
    color: white;
    cursor: pointer;
}
.update{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px 0;
}
.update h1{
    color: white;
    font-size: 16px;
}
.update input{
    width: 100%;
    height: 30px;
    border: none;
    border-radius: 6px;
    padding-left: 3px;
}
.update input:focus{
    outline: 3px solid black;
}
.update select{
    width: 100%;
    height: 30px;
    border-radius: 6px;
}
.update button{
    padding: 6px 16px;
    border-radius: 6px;
    border: 1px solid white;
}
.update button:hover{
    background: black;
    color: white;
    cursor: pointer;
}
.succes{
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  z-index: 99;
  top: 140px;
  min-width: 80%;
  align-items: center;
}
.succes div{
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 6px;
  gap: 20px 0;
  padding: 40px;
}
.succes div h1{
  color: white;
  width: 100%;
}
.succes button{
  padding: 5px 7px;
  background: none;
  border: 1px solid white;
  color: white;
  border-radius: 50%;
  cursor: pointer;
}
.succes button:hover{
  background: white;
  color: black;
}
}

@media screen and (min-width:768px){
.posts{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 15px;
    margin:30px 0;
}
.post h1{
    font-size: 16px;
}
.post h2{
    font-size: 14px;
}
.post .more h2{
    font-size: 12px;
}
.post .info p{
    font-size: 12px;
}
.card{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 20px;
    justify-content: space-between;
}
}

@media screen and (min-width:1020px){
.posts{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 15px;
    margin:30px 0;
}
.post h1{
    font-size: 18px;
}
.post h2{
    font-size: 16px;
}
.post .more h2{
    font-size: 14px;
}
.post .info p{
    font-size: 14px;
}
.card{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 20px;
    justify-content: space-between;
}
}

@media screen and (min-width:1440px){
    background: #3c3b3b;
min-height: 745px;
.container{
    width: 80%;
    margin: 0 auto;
}
.cards{
    padding: 40px 0;
}
.posts{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 50px;
    margin:30px 0;
}
.post{
    width: 100%;
    padding: 10px;
    background: white;
    display: flex;
    flex-direction: column;
    gap: 10px 0;
    border-radius: 10px;
}
.post h1{
    display: flex;
    justify-content: center;
}
.post h2{
    display: flex;
}
.post img{
    width: 100%;
}
.post .info{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.post .tags{
    display: flex;
    gap: 0 15px;
}
.post a{
    text-decoration: none;
}
.post button{
    padding: 4px;
    background: gray;
    border-radius: 6px;
    border:1px solid black ;
    color: white;
    font-weight: 500;
    letter-spacing: 1px;
    cursor: pointer;
}
.post button:hover{
    background: black;
}
.pagination{
    display: flex;
    justify-content: center;
    gap: 0 10px;
    padding-bottom: 30px;
}
.card{
    display: flex;
    justify-content: space-between;
}
.create{
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px 0;
}
.create h1{
    color: white;
}
.create input{
    width: 100%;
    height: 30px;
    border: none;
    border-radius: 6px;
    padding-left: 3px;
}
.create input:focus{
    outline: 3px solid black;
}
.create select{
    width: 100%;
    height: 30px;
    border-radius: 6px;
}
.create button{
    padding: 6px 16px;
    border-radius: 6px;
    border: 1px solid white;
}
.create button:hover{
    background: black;
    color: white;
    cursor: pointer;
}
.update{
    width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px 0;
}
.update h1{
    color: white;
}
.update input{
    width: 100%;
    height: 30px;
    border: none;
    border-radius: 6px;
    padding-left: 3px;
}
.update input:focus{
    outline: 3px solid black;
}
.update select{
    width: 100%;
    height: 30px;
    border-radius: 6px;
}
.update button{
    padding: 6px 16px;
    border-radius: 6px;
    border: 1px solid white;
}
.update button:hover{
    background: black;
    color: white;
    cursor: pointer;
}
.succes{
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  z-index: 99;
  top: 140px;
  min-width: 80%;
  align-items: center;
}
.succes div{
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 6px;
  gap: 20px 0;
  padding: 40px;
}
.succes div h1{
  color: white;
  width: 100%;
}
.succes button{
  padding: 5px 7px;
  background: none;
  border: 1px solid white;
  color: white;
  border-radius: 50%;
  cursor: pointer;
}
.succes button:hover{
  background: white;
  color: black;
}
}
`

export default AdminPortfolio;