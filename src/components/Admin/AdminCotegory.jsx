import React, { useContext } from 'react'
import styled from 'styled-components'
import AdminNavbar from './AdminNavbar'
import { Context } from '../../Context';

const AdminCotegory = () => {
    const { cotegory,setCotegoryName,CreateCotegory,UpdateCotegory,DeleteCotegory,setCotegoryId,cotegoryId,updCotegoryId,setUpdCotegoryId,succes,Ok } = useContext(Context);
  return (
    <AdminCotegoryStyle>
        <AdminNavbar/>
        <div className="container">
            {
                succes ? <div className='succes'> <div><h1>Succes</h1> <button onClick={Ok}>ok</button> </div> </div> : 
                <div className="cards">
                <form onSubmit={DeleteCotegory} className="card">
                    <select value={cotegoryId} required onChange={(e) => setCotegoryId(e.target.value)}>
                        {
                            cotegory.map((el) => {
                                return(
                                    <option key={el.id} value={el.id}>{el.name}</option>
                                )
                            })
                        }
                    </select>
                    <button type='submit'>Delete</button>
                </form>
                <form onSubmit={CreateCotegory} className="card">
                    <input required type="text" placeholder='Cotegory name' onChange={(e) => {setCotegoryName(e.target.value)}}/>
                    <button type='submit'>Create</button>
                </form>
                <form onSubmit={UpdateCotegory} className="card">
                <select value={updCotegoryId} required onChange={(e) => setUpdCotegoryId(e.target.value)}>
                        {
                            cotegory.map((el) => {
                                return(
                                    <option key={el.id} value={el.id}>{el.name}</option>
                                )
                            })
                        }
                    </select>
                    <input required type="text" placeholder='Cotegory name' onChange={(e) => {setCotegoryName(e.target.value)}}/>
                    <button type='submit'>Update</button>
                </form>
            </div>
            }
        </div>
    </AdminCotegoryStyle>
  )
}

const AdminCotegoryStyle = styled.div`
@media screen and (max-width:551px){
background: #3c3b3b;
min-height: 745px;
.container{
    width: 90%;
    margin: 0 auto;
}
.cards{
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.card{
    padding: 20px;
    display: flex;
    gap: 0 10px;
}
.card input{
    padding-left: 5px;
    height: 30px;
    border: none;
    border-radius: 5px;
}
.card input:focus{
    outline: 3px solid black;
}
.card select{
    border-radius: 5px;
    padding: 5px;
}
.card select:focus{
    outline: 3px solid black;
}
.card button{
    padding: 0 10px;
    border-radius: 6px;
    border: none;
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
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.card{
    padding: 20px;
    display: flex;
    gap: 0 10px;
}
.card input{
    padding-left: 5px;
    height: 30px;
    border: none;
    border-radius: 5px;
}
.card input:focus{
    outline: 3px solid black;
}
.card select{
    border-radius: 5px;
    padding: 5px;
}
.card select:focus{
    outline: 3px solid black;
}
.card button{
    padding: 0 10px;
    border-radius: 6px;
    border: none;
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

@media screen and (min-width: 1440px){
background: #3c3b3b;
min-height: 745px;
.container{
    width: 80%;
    margin: 0 auto;
}
.cards{
    display: flex;
    flex-direction: row;
    gap: 20px;
}
.card{
    padding: 20px;
    display: flex;
    gap: 0 10px;
}
.card input{
    padding-left: 5px;
    height: 30px;
    border: none;
    border-radius: 5px;
}
.card input:focus{
    outline: 3px solid black;
}
.card select{
    border-radius: 5px;
}
.card select:focus{
    outline: 3px solid black;
}
.card button{
    padding: 0 10px;
    border-radius: 6px;
    border: none;
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

export default AdminCotegory