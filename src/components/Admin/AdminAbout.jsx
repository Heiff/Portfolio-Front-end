import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import AdminNavbar from './AdminNavbar'
import { Context } from '../../Context'


const AdminAbout = () => {
  const { setAboutMe,setLastname,setFirstname,setBirthday,setNotionality,setFreelance,setPhone,setAddress,setLanguage,setGithub,setEmail,AboutmeChange,navigate,succes,about,AboutmeCreate,Ok } = useContext(Context);
  const token = localStorage.getItem("token")
  useEffect(() => {
    if(!token) navigate("/login")
  },)
  return (
    <AdminAboutStyle>
      <AdminNavbar/>
      <div className="container">
        <div className="cards">
        {
                about.map(el => {
                  const birthday = el.birthday.split("-").reverse("").join("-");
                    return(
                        <div key={el.id} className='resume'>
                        <h1>PERSONAL INFO</h1>
                        <h2>{el.aboutme}</h2>
                        <div className='info'>
                        <p>FIRSTNAME:  <span>{el.firstname}</span></p>
                        <p>LASTNAME:  <span>{el.lastname}</span></p>
                        <p>DATE OF BIRTH:  <span>{birthday}</span></p>
                        <p>NOTIONALITY:  <span>{el.notionality}</span></p>
                        <p>FREELANCE:  <span>{el.freelance}</span></p>
                        <p>PHONE:  <span>{el.phone}</span></p>
                        <p>ADDRESS:  <span>{el.address}</span></p>
                        <p>EMAIL:  <span>{el.email}</span></p>
                        <p>LANGUAGE:  <span>{el.language}</span></p>
                        <p>GITHUB:  <span>{el.github}</span></p>
                        </div>
                    </div>
                    )
                })
            }
      {succes ? <div className='succes'> <div><h1>Succes</h1> <button onClick={Ok}>ok</button> </div> </div> : 
      <div className='inputs'>
            <form onSubmit={AboutmeCreate} className="card">
                <input type="text" required={about.length ? false : true} onChange={(e) => {setAboutMe(e.target.value)}} placeholder='About me'/>
                <input type="text" required={about.length ? false : true} onChange={(e) => {setFirstname(e.target.value)}} placeholder='Firstname'/>
                <input type="text" required={about.length ? false : true} onChange={(e) => {setLastname(e.target.value)}} placeholder='Lastname'/>
                <input type="date" required={about.length ? false : true} onChange={(e) => {setBirthday(e.target.value)}} placeholder='Birthday'/>
                <input type="text" required={about.length ? false : true} onChange={(e) => {setNotionality(e.target.value)}} placeholder='Notionality'/>
                <input type="text" required={about.length ? false : true} onChange={(e) => {setFreelance(e.target.value)}} placeholder='Freelance'/>
                <input type="tel" required={about.length ? false : true} onChange={(e) => {setPhone(e.target.value)}} placeholder='Phone'/>
                <input type="text" required={about.length ? false : true} onChange={(e) => {setAddress(e.target.value)}} placeholder='Address'/>
                <input type="email" required={about.length ? false : true} onChange={(e) => {setEmail(e.target.value)}} placeholder='Email'/>
                <input type="text" required={about.length ? false : true} onChange={(e) => {setLanguage(e.target.value)}} placeholder='Languages'/>
                <input type="text" required={about.length ? false : true} onChange={(e) => {setGithub(e.target.value)}} placeholder='Github'/>
                <div>
                {
                  about.length ? <button onClick={AboutmeChange}>Change</button> : <button type='submit'>Create</button>
                }
                </div>
            </form>
          </div>
      
      }
        </div>
          
      </div>
    </AdminAboutStyle>
  )
}

const AdminAboutStyle = styled.div`

@media screen and (max-width:551px){
background: #3c3b3b;
min-height: 932px;
.container{
  width: 90%;
  margin: 0 auto;
}
.cards{
  display: block;
}
.resume{
    width: 90%;
    margin: 0 auto;
    padding: 20px 0;
}
.resume h1{
    color: white;
    font-size: 14px;
    font-family: monospace;
}
.resume h2{
    color: white;
    font-size: 12px;
    font-weight: 300;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.info{
  width: 100%;
    display: grid;
    grid-template-columns: repeat(1,1fr);
    gap: 4px 0;
    margin: 10px 0;
}
.info p{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 250px;
    align-items: center;
    color: white;
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 100;
}
.info span{
  width: 100px;
  text-align: start;
}
.inputs{
  display: flex;
  justify-content: center;
  padding: 20px 0;
}
.card{
  display: flex;
  flex-direction: column;
  gap: 10px 0;
  width: 300px;
  padding: 20px;
  border-radius: 6px;
  background: #bcb9b9;
}
.card input{
  height: 30px;
  padding-left:5px ;
  background: none;
  border: 1px solid gray;
  border-radius: 5px;
}
.card input:focus{
  outline: none;
  border: 1px solid black;
}
.card div{
  display: flex;
  justify-content: center;
}
.card div button{
  padding: 4px 12px;
  background: none;
  border: 1px solid black;
  border-radius: 6px;
  cursor: pointer;
}
.card div button:hover{
  background:black;
  color: white;
}
.succes{
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 130px;
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
  width: 100%;
  color: white;
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
min-height: 932px;
.container{
  width: 90%;
  margin: 0 auto;
}
.cards{
  display: block;
}
.resume{
    width: 90%;
    margin: 0 auto;
    padding: 20px 0;
}
.resume h1{
    color: white;
    font-size: 14px;
    font-family: monospace;
}
.resume h2{
    color: white;
    font-size: 12px;
    font-weight: 300;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.info{
  width: 100%;
    display: grid;
    grid-template-columns: repeat(1,1fr);
    gap: 4px 0;
    margin: 10px 0;
}
.info p{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 250px;
    align-items: center;
    color: white;
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 100;
}
.info span{
  width: 100px;
  text-align: start;
}
.inputs{
  display: flex;
  justify-content: center;
  padding: 20px 0;
}
.card{
  display: flex;
  flex-direction: column;
  gap: 10px 0;
  width: 300px;
  padding: 20px;
  border-radius: 6px;
  background: #bcb9b9;
}
.card input{
  height: 30px;
  padding-left:5px ;
  background: none;
  border: 1px solid gray;
  border-radius: 5px;
}
.card input:focus{
  outline: none;
  border: 1px solid black;
}
.card div{
  display: flex;
  justify-content: center;
}
.card div button{
  padding: 4px 12px;
  background: none;
  border: 1px solid black;
  border-radius: 6px;
  cursor: pointer;
}
.card div button:hover{
  background:black;
  color: white;
}
.succes{
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 130px;
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
  width: 100%;
  color: white;
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

@media screen and (min-width:1024px){
background: #3c3b3b;
min-height: 932px;
.container{
  width: 90%;
  margin: 0 auto;
}
.cards{
  display: block;
}
.resume{
    width: 90%;
    margin: 0 auto;
    padding: 20px 0;
}
.resume h1{
    color: white;
    font-size: 18px;
    font-family: monospace;
}
.resume h2{
    color: white;
    font-size: 16px;
    font-weight: 300;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.info{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 4px 0;
    margin: 10px 0;
}
.info p{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 250px;
    align-items: center;
    color: white;
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 100;
}
.info span{
  width: 100px;
  text-align: start;
}
.inputs{
  display: flex;
  justify-content: center;
  padding: 20px 0;
}
.card{
  display: flex;
  flex-direction: column;
  gap: 10px 0;
  width: 300px;
  padding: 20px;
  border-radius: 6px;
  background: #bcb9b9;
}
.card input{
  height: 30px;
  padding-left:5px ;
  background: none;
  border: 1px solid gray;
  border-radius: 5px;
}
.card input:focus{
  outline: none;
  border: 1px solid black;
}
.card div{
  display: flex;
  justify-content: center;
}
.card div button{
  padding: 4px 12px;
  background: none;
  border: 1px solid black;
  border-radius: 6px;
  cursor: pointer;
}
.card div button:hover{
  background:black;
  color: white;
}
.succes{
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 130px;
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
  width: 100%;
  color: white;
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


@media screen and (min-width:1440px){
background: #3c3b3b;
min-height: 745px;
.container{
  width: 80%;
  margin: 0 auto;
}
.cards{
  display: flex;
}
.resume{
    width: 80%;
    margin: 0 auto;
    padding: 20px 0;
}
.resume h1{
    color: white;
    font-size: 22px;
    font-family: monospace;
}
.resume h2{
    color: white;
    font-size: 16px;
    font-weight: 300;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.info{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 4px 0;
    margin: 20px 0;
}
.info p{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 250px;
    align-items: center;
    color: white;
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 100;
}
.info span{
  width: 100px;
  text-align: start;
}
.inputs{
  display: flex;
  justify-content: center;
  padding: 60px 0;
}
.card{
  display: flex;
  flex-direction: column;
  gap: 10px 0;
  width: 300px;
  padding: 20px;
  border-radius: 6px;
  background: #bcb9b9;
}
.card input{
  height: 30px;
  padding-left:5px ;
  background: none;
  border: 1px solid gray;
  border-radius: 5px;
}
.card input:focus{
  outline: none;
  border: 1px solid black;
}
.card div{
  display: flex;
  justify-content: center;
}
.card div button{
  padding: 4px 12px;
  background: none;
  border: 1px solid black;
  border-radius: 6px;
  cursor: pointer;
}
.card div button:hover{
  background:black;
  color: white;
}
.succes{
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 130px;
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
  width: 100%;
  color: white;
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

export default AdminAbout