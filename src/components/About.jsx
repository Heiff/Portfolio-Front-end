import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { Context } from '../Context'
const About = () => {
    const { about,experience,change,GetExperience } = useContext(Context);
  return (
    <AboutStyle>
        <h1 className='title'>ABOUT ME</h1>
        <div className='about'>
            {
                about.map(el => {
                    return(
                        <div key={el.id} className='resume'>
                        <h1>PERSONAL INFO</h1>
                        <h2>{el.aboutme}</h2>
                        <div className='info'>
                        <p>FIRSTNAME:  <span>{el.firstname}</span></p>
                        <p>LASTNAME:  <span>{el.lastname}</span></p>
                        <p>DATE OF BIRTH:  <span>{el.birthday}</span></p>
                        <p>NOTIONALITY:  <span>{el.notionality}</span></p>
                        <p>FREELANCE:  <span>{el.freelance}</span></p>
                        <p>PHONE:  <span>{el.phone}</span></p>
                        <p>ADDRESS:  <span>{el.address}</span></p>
                        <p>EMAIL:  <span>{el.email}</span></p>
                        <p>LANGUAGE:  <span>{el.language}</span></p>
                        <p>GITHUB:  <span>{el.github}</span></p>
                        </div>
                        <Link to="/blog">MY BLOG</Link>
                    </div>
                    )
                })
            }
            <div className="experience">
                <div className='btns'>
                    <button onClick={(e) => {GetExperience("experience")}}>EXPERIENCE</button>
                    <button onClick={(e) => {GetExperience("education")}}>EDUCATION</button>
                    <button onClick={(e) => {GetExperience("skills")}}>SKILLS</button>
                </div>
                <div className='experience-info'>
                    <h1>{change.toUpperCase()}</h1>
                    <div className="projects">
                {
                    experience.map(el => {
                                return(
                                    <div key={el.id}>       
                                    {el.skills ? <div className='skills'><p>{el.skills}</p></div> : <div className='div'><h2>{el.field}</h2> <h2>{el.from}</h2> <h3>{el.date}</h3> <p>{el.descr}</p> <hr /></div>}
                                    </div>
                        )
                    })
                }
                </div>
                </div>
            </div>
            
            <hr className='hr' />
            <div className='about-end'>
            <div className='card'>
            <i className="fa-solid fa-briefcase"></i>
            <div className="card-text">
                <h3>4+</h3>
                <p>YEAR EXPERIENCE</p>
            </div>
            </div>
            <div className='card'>
            <i className="fa-solid fa-handshake"></i>
            <div className="card-text">
                <h3>89+</h3>
                <p>DONE PROJECTS</p>
            </div>
            </div>
            <div className='card'>
            <i className="fa-solid fa-heart"></i>
            <div className="card-text">
                <h3>77+</h3>
                <p>HAPPY CUSTOMERS</p>
            </div>
            </div>
            </div>
        </div>
    </AboutStyle>
  )
}

const AboutStyle = styled.div`
@media screen and (max-width:552px){
    background: black;
    width: 100%;
    min-height: 632px;
.title{
    color: white;
    display: flex;
    justify-content: center;
    padding:8px 0;
    font-size: 14px;
}
.about{
    background: #3c3b3b;
    min-height: 400px;
}
.resume{
    width: 90%;
    margin: 0 auto;
    padding: 10px 0;
}
.resume h1{
    color: white;
    font-size: 12px;
    font-family: monospace;
}
.resume h2{
    color: white;
    font-size: 10px;
    font-weight: 300;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.info{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 4px 0;
    margin: 10px 0;
}
.info p{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 180px;
    align-items: center;
    color: white;
    font-size: 10px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 100;
}
.info span{
  width: 100px;
  text-align: start;
}
.resume a{
    border: 2px solid rgba(46, 168, 199, 1);
    color: rgba(46, 168, 199, 1);
    text-decoration: none;
    padding: 4px 8px;
    font-size: 10px;
}
.experience{
    width: 90%;
    margin: 10px auto;
    display: flex;
    justify-content: space-between;
    gap: 0 15px;
    min-height: 150px;
}
.experience .btns{
    display: flex;
    flex-direction: column;
    gap: 10px 0;
}
.experience .btns button{
    padding: 6px 10px;
    font-size: 10px;
    border-radius: 3px;
    background: none;
    border: 1px solid white;
    color: white;
}
.experience-info h1{
    color: rgba(46, 168, 199, 1);
    border: 2px solid white;
    display: flex;
    justify-content: center;
    padding: 3px 0;
    font-size: 12px;
    border-radius: 3px 3px 0 0;
}
.experience-info{
    width: 80%;
}
.experience-info .projects{
    padding: 10px;
    border: 2px solid gray;
    border-top: none;
}
.experience-info .projects h2{
    color: white;
    font-size: 10px;
    font-weight: 300;
}
.experience-info .projects h3{
    color: gray;
    font-size: 10px;
    padding: 3px 0;
}
.experience-info .projects p{
    color: gray;
    font-size: 10px;
}
.experience-info .projects hr{
   border: 1px solid  rgba(46, 168, 199, 1);
   width: 25%;
   margin:5px 0 10px 0;
}
.hr{
    width: 90%;
    margin: 10px auto;
    border: 1px solid gray;
}
.about-end{
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
}
.about-end .card{
    display: flex;
    align-items: center;
    gap: 0 4px;
}
.about-end .card i{
    color: white;
    font-size: 18px;
}
.about-end .card h3{
    color: rgba(46, 168, 199, 1);
    font-size: 12px;
}
.about-end .card p{
    color: white;
    font-size: 8px;
}
}

@media screen and (min-width:553px){
    background: black;
    min-height: 632px;
.title{
    color: white;
    display: flex;
    justify-content: center;
    padding:8px 0;
    font-size: 16px;
}
.about{
    background: #3c3b3b;
    min-height: 500px;
}
.resume{
    width: 90%;
    margin: 0 auto;
    padding: 10px 0;
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
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 4px 0;
    margin: 15px 0;
}
.info p{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 200px;
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
.resume a{
    border: 2px solid rgba(46, 168, 199, 1);
    color: rgba(46, 168, 199, 1);
    text-decoration: none;
    padding: 4px 8px;
    font-size: 12px;
}
.experience{
    width: 90%;
    margin: 15px auto;
    display: flex;
    justify-content: space-between;
    gap: 0 15px;
    min-height: 150px;
}
.experience .btns{
    display: flex;
    flex-direction: column;
    gap: 15px 0;
}
.experience .btns button{
    padding: 6px 10px;
    font-size: 12px;
    border-radius: 3px;
    background: none;
    border: 1px solid white;
    color: white;
}
.experience-info h1{
    color: rgba(46, 168, 199, 1);
    border: 2px solid white;
    display: flex;
    justify-content: center;
    padding: 3px 0;
    font-size: 14px;
    border-radius: 3px 3px 0 0;
}
.experience-info{
    width: 90%;
}
.experience-info .projects{
    padding: 10px;
    border: 2px solid gray;
    border-top: none;
}
.experience-info .projects h2{
    color: white;
    font-size: 12px;
    font-weight: 300;
}
.experience-info .projects h3{
    color: gray;
    font-size: 12px;
    padding: 3px 0;
}
.experience-info .projects p{
    color: gray;
    font-size: 12px;
}
.experience-info .projects hr{
   border: 1px solid  rgba(46, 168, 199, 1);
   width: 20%;
   margin:5px 0 10px 0;
}
.hr{
    width: 90%;
    margin: 10px auto;
    border: 1px solid gray;
}
.about-end{
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
}
.about-end .card{
    display: flex;
    align-items: center;
    gap: 0 4px;
}
.about-end .card i{
    color: white;
    font-size: 20px;
}
.about-end .card h3{
    color: rgba(46, 168, 199, 1);
    font-size: 14px;
}
.about-end .card p{
    color: white;
    font-size: 10px;
}
}

@media screen and (min-width:768px){
    background: black;
    min-height: 632px;
.title{
    color: white;
    display: flex;
    justify-content: center;
    padding:10px 0;
    font-size: 18px;
}
.about{
    background: #3c3b3b;
    min-height: 600px;
}
.resume{
    width: 90%;
    margin: 0 auto;
    padding: 10px 0;
}
.resume h1{
    color: white;
    font-size: 16px;
    font-family: monospace;
}
.resume h2{
    color: white;
    font-size: 14px;
    font-weight: 300;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
.info{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 4px 0;
    margin: 15px 0;
}
.info p{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
    align-items: center;
    color: white;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 100;
}
.info span{
  width: 100px;
  text-align: start;
}
.resume a{
    border: 2px solid rgba(46, 168, 199, 1);
    color: rgba(46, 168, 199, 1);
    text-decoration: none;
    padding: 4px 8px;
    font-size: 14px;
}
.experience{
    width: 90%;
    margin: 15px auto;
    display: flex;
    justify-content: space-between;
    gap: 0 15px;
    min-height: 220px;
}
.experience .btns{
    display: flex;
    flex-direction: column;
    gap: 15px 0;
}
.experience .btns button{
    padding: 6px 10px;
    font-size: 12px;
    border-radius: 3px;
    background: none;
    border: 2px solid white;
    color: white;
}
.experience-info h1{
    color: rgba(46, 168, 199, 1);
    border: 2px solid white;
    display: flex;
    justify-content: center;
    padding: 3px 0;
    font-size: 16px;
    border-radius: 3px 3px 0 0;
}
.experience-info{
    width: 90%;
}
.experience-info .projects{
    padding: 10px;
    border: 2px solid gray;
    border-top: none;
}
.experience-info .projects h2{
    color: white;
    font-size: 14px;
    font-weight: 300;
}
.experience-info .projects h3{
    color: gray;
    font-size: 14px;
    padding: 3px 0;
}
.experience-info .projects p{
    color: gray;
    font-size: 14px;
}
.experience-info .projects hr{
   border: 1px solid  rgba(46, 168, 199, 1);
   width: 15%;
   margin-top:5px 0 10px 0;
}
.hr{
    width: 90%;
    margin: 10px auto;
    border: 1px solid gray;
}
.about-end{
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
}
.about-end .card{
    display: flex;
    align-items: center;
    gap: 0 4px;
}
.about-end .card i{
    color: white;
    font-size: 24px;
}
.about-end .card h3{
    color: rgba(46, 168, 199, 1);
    font-size: 16px;
}
.about-end .card p{
    color: white;
    font-size: 12px;
}
}

@media screen and (min-width:1024px){
    background: black;
    min-height: 732px;
.title{
    color: white;
    display: flex;
    justify-content: center;
    padding:10px 0;
    font-size: 20px;
}
.about{
    background: #3c3b3b;
    min-height: 600px;
}
.resume{
    width: 80%;
    margin: 0 auto;
    padding: 10px 0;
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
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 6px 0;
    margin: 15px 0;
}
.info p{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 260px;
    align-items: center;
    color: white;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 100;
}
.info span{
  width: 100px;
  text-align: start;
}
.resume a{
    border: 2px solid rgba(46, 168, 199, 1);
    color: rgba(46, 168, 199, 1);
    text-decoration: none;
    padding: 5px 10px;
    font-size: 14px;
}
.experience{
    width: 80%;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
    gap: 0 15px;
    min-height: 220px;
}
.experience .btns{
    display: flex;
    flex-direction: column;
    gap: 20px 0;
}
.experience .btns button{
    padding: 6px 10px;
    font-size: 12px;
    border-radius: 3px;
    background: none;
    border: 2px solid white;
    color: white;
}
.experience-info h1{
    color: rgba(46, 168, 199, 1);
    border: 2px solid white;
    display: flex;
    justify-content: center;
    padding: 5px 0;
    font-size: 18px;
    border-radius: 3px 3px 0 0;
}
.experience-info{
    width: 100%;
}
.experience-info .projects{
    padding: 10px;
    border: 2px solid gray;
    border-top: none;
}
.experience-info .projects h2{
    color: white;
    font-size: 16px;
    font-weight: 300;
}
.experience-info .projects h3{
    color: gray;
    font-size: 16px;
    padding: 3px 0;
}
.experience-info .projects p{
    color: gray;
    font-size: 14px;
}
.experience-info .projects hr{
   border: 1px solid  rgba(46, 168, 199, 1);
   width: 15%;
   margin-top:5px 0 10px 0;
}
.hr{
    width: 80%;
    margin: 10px auto;
    border: 1px solid gray;
}
.about-end{
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
}
.about-end .card{
    display: flex;
    align-items: center;
    gap: 0 4px;
}
.about-end .card i{
    color: white;
    font-size: 28px;
}
.about-end .card h3{
    color: rgba(46, 168, 199, 1);
    font-size: 18px;
}
.about-end .card p{
    color: white;
    font-size: 14px;
}
}

@media screen and (min-width:1440px){
    background: black;
    min-height: 732px;
.title{
    color: white;
    display: flex;
    justify-content: center;
    padding:10px 0;
    font-size: 20px;
}
.about{
    background: #3c3b3b;
    min-height: 600px;
}
.resume{
    width: 80%;
    margin: 0 auto;
    padding: 10px 0;
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
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 6px 0;
    margin: 15px 0;
}
.info p{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 260px;
    align-items: center;
    color: white;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 100;
}
.info span{
  width: 100px;
  text-align: start;
}
.resume a{
    border: 2px solid rgba(46, 168, 199, 1);
    color: rgba(46, 168, 199, 1);
    text-decoration: none;
    padding: 5px 10px;
    font-size: 14px;
}
.experience{
    width: 80%;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
    gap: 0 15px;
    min-height: 220px;
}
.experience .btns{
    display: flex;
    flex-direction: column;
    gap: 20px 0;
}
.experience .btns button{
    padding: 6px 10px;
    font-size: 12px;
    border-radius: 3px;
    background: none;
    border: 2px solid white;
    color: white;
}
.experience-info h1{
    color: rgba(46, 168, 199, 1);
    border: 2px solid white;
    display: flex;
    justify-content: center;
    padding: 5px 0;
    font-size: 18px;
    border-radius: 3px 3px 0 0;
}
.experience-info{
    width: 100%;
}
.experience-info .projects{
    padding: 10px;
    border: 2px solid gray;
    border-top: none;
}
.experience-info .projects h2{
    color: white;
    font-size: 16px;
    font-weight: 300;
}
.experience-info .projects h3{
    color: gray;
    font-size: 16px;
    padding: 3px 0;
}
.experience-info .projects p{
    color: gray;
    font-size: 14px;
}
.experience-info .projects hr{
   border: 1px solid  rgba(46, 168, 199, 1);
   width: 15%;
   margin-top:5px 0 10px 0;
}
.hr{
    width: 80%;
    margin: 10px auto;
    border: 1px solid gray;
}
.about-end{
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
}
.about-end .card{
    display: flex;
    align-items: center;
    gap: 0 4px;
}
.about-end .card i{
    color: white;
    font-size: 28px;
}
.about-end .card h3{
    color: rgba(46, 168, 199, 1);
    font-size: 18px;
}
.about-end .card p{
    color: white;
    font-size: 14px;
}
}



`
export default About