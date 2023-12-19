import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import AdminNavbar from './AdminNavbar'
import { Context } from '../../Context'
import { Link } from 'react-router-dom'
import { Pagination } from '@mui/material'

const AdminBlogs = () => {
    const { blog,totalPage,GetBlog,cotegory,forSorting,setTitle,
            setImage,setDescr,setTags,setCoteg,CreateBlogs,coteg,DeleteBlogs,updId,setUpdId,UpdateBlogs,
            setChangeImg,succes,Ok} = useContext(Context);
  return (
    <AdminBlogsStyle>
        <AdminNavbar/>
        <div className="container">
            <div className='cards'>
                <div>
                <div className="posts">
                {
                        blog.map(el => {
                            return( 
                                <div key={el.id} className='post'>
                                <h2>{el.title}</h2>
                                <img src={`http://localhost:8080/${el.image}`} alt="" />
                                <h3>{el.descr}</h3>
                                <div className='info'>
                                <div className='tags'>
                                <p>{el.tags}</p>
                                </div>
                                <div className='tags'>
                                    <p>{el.views}</p>
                                    <p>{el.date}</p>
                                </div>
                                </div>
                                <button onClick={() =>DeleteBlogs(el.id)}>Delete</button>
                                </div>
                            )
                    })
                }
                </div>
                <div className="pagination">
                {
                    blog.length ? <Pagination count={totalPage} onChange={GetBlog} /> : null
                }
                </div>
                </div>
                {succes ? <div className='succes'> <div><h1>Succes</h1> <button onClick={Ok}>ok</button> </div> </div> : 
                <div className='card'>
                <form onSubmit={CreateBlogs} className="create">
                    <h1>Create Post</h1>
                    <input type="text" required placeholder='Title' onChange={(e) => {setTitle(e.target.value)}}/>
                    <input type="file" required onChange={(e) => {setImage(e.target.files[0])}} />
                    <input type="text" required placeholder='description' onChange={(e) => {setDescr(e.target.value)}}/>
                    <input type="text" required placeholder='Tags' onChange={(e) => {setTags(e.target.value)}}/>
                    <select value={coteg} required onChange={(e) => {setCoteg(e.target.value)}}>
                        <option value="">select cotegory</option>
                        {
                            cotegory.map((el) => {
                                return(
                                    <option key={el.id} value={el.name}>{el.name}</option>
                                )
                            })
                        }
                    </select>
                    <button type='submit'>Create</button>
                </form>
                <form onSubmit={UpdateBlogs} className="update">
                    <h1>Update Post</h1>
                    <select value={updId} onChange={(e) => {setUpdId(e.target.value)}}>
                        <option value="">select post!!</option>
                        {
                            forSorting.map((el) => {
                                return(
                                    <option key={el.id} value={el.id}>{el.title}</option>
                                )
                            })
                        }
                    </select>
                    <input type="text" placeholder='Title' onChange={(e) => {setTitle(e.target.value)}}/>
                    <input type="file" onChange={(e) => {setChangeImg(e.target.files[0])}} />
                    <input type="text" placeholder='description' onChange={(e) => {setDescr(e.target.value)}}/>
                    <input type="text" placeholder='Tags' onChange={(e) => {setTags(e.target.value)}}/>
                    <select value={coteg} onChange={(e) => {setCoteg(e.target.value)}}>
                        <option value="">select cotegory</option>
                        {
                            cotegory.map((el) => {
                                return(
                                    <option key={el.id} value={el.name}>{el.name}</option>
                                )
                            })
                        }
                    </select>
                    <button type='submit'>Update</button>
                </form>
                </div>}
                
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
    padding: 20px 0;
}
.posts{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2,1fr);
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
.post h2{
    display: flex;
    justify-content: center;
    font-size: 14px;
}
.post h3{
    font-size: 12px;
    letter-spacing: 1px;
}
.post .tags p{
    font-size: 14px;
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
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    width: 100%;
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
    height: 25px;
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
.create select:focus{
    width: 40%;
    display: flex;
    justify-content: flex-start;
    font-size: 10px;
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
.update select:focus{
    width: 40%;
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
  top: 140px;
  z-index: 99;
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
  color: white;
  border: 1px solid white;
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
    padding: 20px 0;
}
.posts{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2,1fr);
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
.post h2{
    display: flex;
    justify-content: center;
    font-size: 14px;
}
.post h3{
    font-size: 12px;
    letter-spacing: 1px;
}
.post .tags p{
    font-size: 14px;
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
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    width: 100%;
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
    height: 25px;
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
.create select:focus{
    width: 40%;
    display: flex;
    justify-content: flex-start;
    font-size: 10px;
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
.update select:focus{
    width: 40%;
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
  top: 140px;
  z-index: 99;
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
  color: white;
  border: 1px solid white;
  border-radius: 50%;
  cursor: pointer;
}
.succes button:hover{
  background: white;
  color: black;
}
}

@media screen and (min-width:1020px){
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
.post h2{
    display: flex;
    justify-content: center;
    font-size: 18px;
}
.post h3{
    font-size: 16px;
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
.post .tags p{
    font-size: 16px;
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
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
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
    font-size: 20px;
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
    font-size: 20px;
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
  top: 140px;
  z-index: 99;
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
  color: white;
  border: 1px solid white;
  border-radius: 50%;
  cursor: pointer;
}
.succes button:hover{
  background: white;
  color: black;
}
}

@media screen and (min-width:1400px){
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
.post h2{
    display: flex;
    justify-content: center;
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
  top: 140px;
  z-index: 99;
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
  color: white;
  border: 1px solid white;
  border-radius: 50%;
  cursor: pointer;
}
.succes button:hover{
  background: white;
  color: black;
}
}
`

export default AdminBlogs