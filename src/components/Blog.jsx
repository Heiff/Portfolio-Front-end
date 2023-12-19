import React, { useContext } from 'react'
import styled from 'styled-components'
import { Context } from '../Context'
import { Link } from 'react-router-dom';
import { Pagination } from '@mui/material';


const Blog = () => {
    const {SortedData,recent,cotegory,totalPage,GetBlog,SortedByTags,sorting,search,setSearch,searchBlog,btns2,btns,blog,tagsChange} = useContext(Context);

    
  return (
    <BlogStyle>
    <h1 className='title'>MY BLOG</h1>
    <div className='gray'>
    <div className="blog">
    <div className='posts'>
        {    
          !tagsChange && !search && (!sorting || sorting == "ALL") ? 
          blog.map(el => {
            return( 
                <div key={el.id} className='post'>
                <h2>{el.title}</h2>
                <img src={`http://localhost:8080/${el.image}`} alt="" />
                <h3>{el.descr}</h3>
                <Link key={el.id} to={`/blogs/${el.id}`}>READ MORE</Link>
                <div className='info'>
                <div className='tags'>
                <p>{el.tags}</p>
                </div>
                <div className='tags'>
                    <p>{el.views}</p>
                    <p>{el.date}</p>
                </div>
                </div>
                </div>
            )
        }) :
          search ? 
          searchBlog.map(el => {
            return(
                <div key={el.id} className='post'>
                <h2>{el.title}</h2>
                <img src={`http://localhost:8080/${el.image}`} alt="" />
                <h3>{el.descr}</h3>
                <Link key={el.id} to={`/blogs/${el.id}`}> READ MORE </Link>
                <div className='info'>
                <div className='tags'>
                <p>{el.tags}</p>
                </div>
                <div className='tags'>
                    <p>{el.views}</p>
                    <p>{el.date}</p>
                </div>
                </div>
                </div>
            )    
        })
             : SortedData.length ?
            SortedData.map(el =>{
                return(
                    
                    <div key={el.id} className='post'>
                    <h2>{el.title}</h2>
                    <img src={`http://localhost:8080/${el.image}`} alt="" />
                    <h3>{el.descr}</h3>
                    <Link key={el.id} to={`/blogs/${el.id}`}> READ MORE </Link>
                    <div className='info'>
                    <div className='tags'>
                    <p>{el.tags}</p>
                    </div>
                    <div className='tags'>
                        <p>{el.views}</p>
                        <p>{el.date}</p>
                    </div>
                    </div>
                    </div>
                   
                    )
                }) : 
                SortedByTags.length ?
                SortedByTags.map(el =>{
                    return(
                       
                        <div key={el.id} className='post'>
                        <h2>{el.title}</h2>
                        <img src={`http://localhost:8080/${el.image}`} alt="" />
                        <h3>{el.descr}</h3>
                        <Link key={el.id} to={`/blogs/${el.id}`}> READ MORE </Link>
                        <div className='info'>
                        <div className='tags'>
                        <p>{el.tags}</p>
                        </div>
                        <div className='tags'>
                            <p>{el.views}</p>
                            <p>{el.date}</p>
                        </div>
                        </div>
                        </div>
                    
                        )
                    }) :
                    <div className='empty'>
                        <h4>Not found</h4>
                    </div>
        }
    </div>
        <div className='sidebarglav'>
        <div className='sidebar'>
    <Link to="/" className='homebtn'>Home</Link>
    <input className='search' onChange={(e) => {setSearch(e.target.value)}} type="text" placeholder='Search' />
    <div>
        <h1>RECENT POSTS</h1>
        {
            recent.map(el => {
                return(
                <div key={el.id} className='recent'>
             <img src={`http://localhost:8080/${el.image}`} alt="" />
            <div>
                <p>{el.title}</p>
                <span>{el.date}</span>
            </div>
        </div>
                )
            })
        }
    </div>
    <div className="coteg">
        <h1>COTEGORIES</h1>
        <input type='button' onClick={(e) => {btns(e)}} value="ALL"/>
        {
            cotegory.map(el =>{
                return(
                        <input key={el.id} type='button' onClick={(e) => {btns(e)}} value={el.name.toUpperCase()}/>
                )
            })
        }
    </div>
    <div className='popular'>
    <h1>POPULAR TAGS</h1>
    <div className='tags'>
        <input type="button" onClick={(e) =>{btns2(e)}} value="javascript"/>
        <input type="button" onClick={(e) =>{btns2(e)}} value="react.js"/>
        <input type="button" onClick={(e) =>{btns2(e)}} value="node.js"/>
        <input type="button" onClick={(e) =>{btns2(e)}} value="css"/>
    </div>
    </div>
    </div>
        </div>
    </div>
    <div className='pagination'>
       {!tagsChange && !search && (!sorting || sorting == "ALL") ? <Pagination count={totalPage} onChange={GetBlog} /> : <div></div> }
    </div>
    </div>
    </BlogStyle>
  )
}

const BlogStyle = styled.div`
@media screen and (max-width:551px){
    background: black;
    width: 100%;
.sidebarglav{
    width: 170px;
}
.title{
    position: fixed;
    top: 0;
    background: black;
    width: 100%;
    font-size: 12px;
    color: white;
    padding: 10px 0;
    display: flex;
    justify-content: center;
}
.blog{
    display: flex;
    justify-content: space-between;
    gap: 0 10px;
    padding:50px 0 30px 0;
    width: 90%;
    margin: 0 auto;
}
.gray{
    background: #3c3b3b;
    width: 100%;
    min-height: 100vh;
}
.posts{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px 0;
}

.post h2{
color: white;
font-size: 12px;
font-weight: 300;
}
.post img{
    width: 100%;
    margin: 0 auto;
    background: white;
    height: 180px;
}
.post h3{
    color: white;
    font-size: 12px;
    font-weight: 200;
    padding: 5px 0;
}
.empty h4{
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    min-height: 300px;
    font-size: 20px;
    color:white;
}
.post a{
    background: rgba(46, 168, 199, 1);
    text-decoration: none;
    border-radius: 3px;
    color: white;
    border:none;
    font-size: 8px;
    padding: 4px 10px;
}
.info{
    display: flex;
    justify-content: space-between;
    width: 100%;
}
.post .tags{
    margin: 5px 0;
    display: flex;
    gap:10px;
}
.post .tags p{
    color: white;
    font-size: 10px;
}
.sidebar{
    display: flex;
    justify-content: flex-start;
    position: fixed;
    top: 57px;
    flex-direction: column;
}
.sidebar h1{
    font-size: 10px;
    margin: 7px 0 0 0;
    color: white;
    font-weight: 400;
}
.homebtn{
    padding: 5px 0;
    text-align: center;
    text-decoration: none;
    border-radius: 4px;
    background: none;
    font-size: 10px;
    width: 80%;
    color: rgba(46, 168, 199, 1);
    border: 1px solid rgba(46, 168, 199, 1);
}
.sidebar .search{
    margin: 5px 0;
    height: 20px;
    font-size: 10px;
    background: black;
    color: gray;
    width: 80%;
    border: none;
    padding-left: 4px;
    border-radius: 4px;
}
.recent{
    margin-top: 7px;
    display: flex;
    width: 80%;
    gap: 0 5px;
}
.recent img{
    width: 60px;
    height: 40px;
    background: white;
}
.recent p{
    font-size: 8px;
    color: white;
}
.recent span{
    font-size: 8px;
    color: gray;
}
.coteg{
    display: flex;
    width: 80%;
    flex-direction: column;
    gap: 10px 0;
}
.coteg input{
    background: none;
    display: flex;
    justify-content: flex-start;
    border: none;
    color: gray;
    font-size: 10px;
    border-bottom: 1px solid gray;
    cursor: pointer;
}

.popular .tags{
    width:80%;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 5px;
}
.tags input{
    border: 1px solid gray;
    padding: 3px 5px;
    font-size: 10px;
    border-radius: 4px;
    background: none;
    color: gray;
}
.pagination{
    width: 80%;
    display: flex;
    justify-content: center;
    gap: 0 10px;
    padding-bottom: 30px;
}
.pagination button{
    min-width: 40px;
    height: 25px;
}
}

@media screen and (min-width:551px){
    background: black;
    width: 100%;
.sidebarglav{
    width: 250px;
}
.title{
    position: fixed;
    top: 0;
    background: black;
    width: 100%;
    font-size: 12px;
    color: white;
    padding: 10px 0;
    display: flex;
    justify-content: center;
}
.blog{
    display: flex;
    justify-content: space-between;
    gap: 0 10px;
    padding:50px 0 30px 0;
    width: 90%;
    margin: 0 auto;
}
.gray{
    background: #3c3b3b;
    width: 100%;
    min-height: 100vh;
}
.posts{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px 0;
}

.post h2{
color: white;
font-size: 12px;
font-weight: 300;
}
.post img{
    width: 100%;
    margin: 0 auto;
    background: white;
    height: 180px;
}
.post h3{
    color: white;
    font-size: 12px;
    font-weight: 200;
    padding: 5px 0;
}
.empty h4{
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    min-height: 300px;
    font-size: 20px;
    color:white;
}
.post a{
    background: rgba(46, 168, 199, 1);
    text-decoration: none;
    border-radius: 3px;
    color: white;
    border:none;
    font-size: 8px;
    padding: 4px 10px;
}
.info{
    display: flex;
    justify-content: space-between;
    width: 100%;
}
.post .tags{
    margin: 5px 0;
    display: flex;
    gap:10px;
}
.post .tags p{
    color: white;
    font-size: 10px;
}
.sidebar{
    display: flex;
    justify-content: flex-start;
    gap: 4px 0;
    position: fixed;
    top: 57px;
    flex-direction: column;
}
.sidebar h1{
    font-size: 10px;
    margin: 7px 0 0 0;
    color: white;
    font-weight: 400;
}
.homebtn{
    padding: 5px 0;
    text-align: center;
    text-decoration: none;
    border-radius: 4px;
    background: none;
    font-size: 12px;
    width: 100%;
    color: rgba(46, 168, 199, 1);
    border: 1px solid rgba(46, 168, 199, 1);
}
.sidebar .search{
    margin: 5px 0;
    height: 25px;
    font-size: 12px;
    background: black;
    color: gray;
    width: 100%;
    border: none;
    padding-left: 4px;
    border-radius: 4px;
}
.recent{
    margin:7px 0;
    display: flex;
    width: 100%;
    gap: 0 5px;
}
.recent img{
    width: 80px;
    height: 50px;
    background: white;
}
.recent p{
    font-size: 10px;
    color: white;
}
.recent span{
    font-size: 10px;
    color: gray;
}
.coteg{
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 12px 0;
}
.coteg input{
    background: none;
    display: flex;
    justify-content: flex-start;
    border: none;
    color: gray;
    font-size: 10px;
    border-bottom: 1px solid gray;
    cursor: pointer;
}

.popular .tags{
    width:100%;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 5px;
}
.tags input{
    border: 1px solid gray;
    padding: 3px 5px;
    font-size: 10px;
    border-radius: 4px;
    background: none;
    color: gray;
}
.pagination{
    width: 80%;
    display: flex;
    justify-content: center;
    gap: 0 10px;
    padding-bottom: 30px;
}
.pagination button{
    min-width: 40px;
    height: 25px;
}
}

@media screen and (min-width:700px){
    background: black;
    width: 100%;
.sidebarglav{
    width: 250px;
}
.title{
    position: fixed;
    top: 0;
    background: black;
    width: 100%;
    font-size: 14px;
    color: white;
    padding: 10px 0;
    display: flex;
    justify-content: center;
}
.blog{
    display: flex;
    justify-content: space-between;
    gap: 0 10px;
    padding:50px 0 30px 0;
    width: 90%;
    margin: 0 auto;
}
.gray{
    background: #3c3b3b;
    width: 100%;
    min-height: 100vh;
}
.posts{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px 0;
}

.post h2{
    color: white;
    font-size: 14px;
    font-weight: 300;
}
.post img{
    width: 100%;
    margin: 0 auto;
    background: white;
    height: 240px;
}
.post h3{
    color: white;
    font-size: 14px;
    font-weight: 200;
    padding: 7px 0;
}
.empty h4{
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    min-height: 300px;
    font-size: 20px;
    color:white;
}
.post a{
    background: rgba(46, 168, 199, 1);
    text-decoration: none;
    border-radius: 3px;
    color: white;
    border:none;
    font-size:10px;
    padding: 5px 10px;
}
.info{
    display: flex;
    justify-content: space-between;
    width: 100%;
}
.post .tags{
    margin: 7px 0;
    display: flex;
    gap:10px;
}
.post .tags p{
    color: white;
    font-size: 12px;
}
.sidebar{
    display: flex;
    justify-content: flex-start;
    gap: 4px 0;
    position: fixed;
    top: 57px;
    flex-direction: column;
}
.sidebar h1{
    font-size: 10px;
    margin: 7px 0 0 0;
    color: white;
    font-weight: 400;
}
.homebtn{
    padding: 5px 0;
    text-align: center;
    text-decoration: none;
    border-radius: 4px;
    background: none;
    font-size: 12px;
    width: 100%;
    color: rgba(46, 168, 199, 1);
    border: 1px solid rgba(46, 168, 199, 1);
}
.sidebar .search{
    margin: 5px 0;
    height: 25px;
    font-size: 12px;
    background: black;
    color: gray;
    width: 100%;
    border: none;
    padding-left: 4px;
    border-radius: 4px;
}
.recent{
    margin:7px 0;
    display: flex;
    width: 100%;
    gap: 0 5px;
}
.recent img{
    width: 80px;
    height: 50px;
    background: white;
}
.recent p{
    font-size: 10px;
    color: white;
}
.recent span{
    font-size: 10px;
    color: gray;
}
.coteg{
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 12px 0;
}
.coteg input{
    background: none;
    display: flex;
    justify-content: flex-start;
    border: none;
    color: gray;
    font-size: 10px;
    border-bottom: 1px solid gray;
    cursor: pointer;
}

.popular .tags{
    width:100%;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 5px;
}
.tags input{
    border: 1px solid gray;
    padding: 3px 5px;
    font-size: 10px;
    border-radius: 4px;
    background: none;
    color: gray;
}
.pagination{
    width: 80%;
    display: flex;
    justify-content: center;
    gap: 0 10px;
    padding-bottom: 30px;
}
.pagination button{
    min-width: 40px;
    height: 25px;
}
}

@media screen and (min-width:700px){
    background: black;
    width: 100%;
.sidebarglav{
    width: 250px;
}
.title{
    position: fixed;
    top: 0;
    background: black;
    width: 100%;
    font-size: 14px;
    color: white;
    padding: 10px 0;
    display: flex;
    justify-content: center;
}
.blog{
    display: flex;
    justify-content: space-between;
    gap: 0 10px;
    padding:50px 0 30px 0;
    width: 90%;
    margin: 0 auto;
}
.gray{
    background: #3c3b3b;
    width: 100%;
    min-height: 100vh;
}
.posts{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px 0;
}

.post h2{
    color: white;
    font-size: 14px;
    font-weight: 300;
}
.post img{
    width: 100%;
    margin: 0 auto;
    background: white;
    height: 240px;
}
.post h3{
    color: white;
    font-size: 14px;
    font-weight: 200;
    padding: 7px 0;
}
.empty h4{
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    min-height: 300px;
    font-size: 20px;
    color:white;
}
.post a{
    background: rgba(46, 168, 199, 1);
    text-decoration: none;
    border-radius: 3px;
    color: white;
    border:none;
    font-size:10px;
    padding: 5px 10px;
}
.info{
    display: flex;
    justify-content: space-between;
    width: 100%;
}
.post .tags{
    margin: 7px 0;
    display: flex;
    gap:10px;
}
.post .tags p{
    color: white;
    font-size: 12px;
}
.sidebar{
    display: flex;
    justify-content: flex-start;
    gap: 4px 0;
    position: fixed;
    top: 57px;
    flex-direction: column;
}
.sidebar h1{
    font-size: 10px;
    margin: 7px 0 0 0;
    color: white;
    font-weight: 400;
}
.homebtn{
    padding: 5px 0;
    text-align: center;
    text-decoration: none;
    border-radius: 4px;
    background: none;
    font-size: 12px;
    width: 100%;
    color: rgba(46, 168, 199, 1);
    border: 1px solid rgba(46, 168, 199, 1);
}
.sidebar .search{
    margin: 5px 0;
    height: 25px;
    font-size: 12px;
    background: black;
    color: gray;
    width: 100%;
    border: none;
    padding-left: 4px;
    border-radius: 4px;
}
.recent{
    margin:7px 0;
    display: flex;
    width: 100%;
    gap: 0 5px;
}
.recent img{
    width: 80px;
    height: 50px;
    background: white;
}
.recent p{
    font-size: 10px;
    color: white;
}
.recent span{
    font-size: 10px;
    color: gray;
}
.coteg{
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 12px 0;
}
.coteg input{
    background: none;
    display: flex;
    justify-content: flex-start;
    border: none;
    color: gray;
    font-size: 10px;
    border-bottom: 1px solid gray;
    cursor: pointer;
}

.popular .tags{
    width:100%;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    gap: 5px;
}
.tags input{
    border: 1px solid gray;
    padding: 3px 5px;
    font-size: 10px;
    border-radius: 4px;
    background: none;
    color: gray;
}
.pagination{
    width: 80%;
    display: flex;
    justify-content: center;
    gap: 0 10px;
    padding-bottom: 30px;
}
.pagination button{
    min-width: 40px;
    height: 25px;
}
}

@media screen and (min-width:850px){
.posts{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px 0;
}
.post img{
    width: 100%;
    margin: 0 auto;
    background: white;
    height: 280px;
}
}

@media screen and (min-width:950px){
.posts{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px 0;
}
.post img{
    width: 100%;
    margin: 0 auto;
    background: white;
    height: 300px;
}
}

@media screen and (min-width:1024px){
    background: black;
    width: 100%;
.sidebarglav{
    width: 280px;
}
.title{
    position: fixed;
    top: 0;
    background: black;
    width: 100%;
    font-size: 16px;
    color: white;
    padding: 10px 0;
    display: flex;
    justify-content: center;
}
.blog{
    display: flex;
    justify-content: space-between;
    gap: 0 10px;
    padding:50px 0 30px 0;
    width: 90%;
    margin: 0 auto;
}
.gray{
    background: #3c3b3b;
    width: 100%;
    min-height: 100vh;
}
.posts{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px 0;
}

.post h2{
    color: white;
    font-size: 16px;
    font-weight: 300;
}
.post img{
    width: 100%;
    margin: 0 auto;
    background: white;
    height: 330px;
}
.post h3{
    color: white;
    font-size: 16px;
    font-weight: 200;
    padding: 7px 0;
}
.empty h4{
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    min-height: 400px;
    font-size: 30px;
    color:white;
}
.post a{
    background: rgba(46, 168, 199, 1);
    text-decoration: none;
    border-radius: 3px;
    color: white;
    border:none;
    font-size:12px;
    padding: 5px 10px;
}
.info{
    display: flex;
    justify-content: space-between;
    width: 100%;
}
.post .tags{
    margin: 7px 0;
    display: flex;
    gap:10px;
}
.post .tags p{
    color: white;
    font-size: 14px;
}
.sidebar{
    display: flex;
    justify-content: flex-start;
    gap: 4px 0;
    position: fixed;
    top: 57px;
    flex-direction: column;
}
.sidebar h1{
    font-size: 12px;
    margin: 7px 0 0 0;
    color: white;
    font-weight: 400;
}
.homebtn{
    padding: 5px 0;
    text-align: center;
    text-decoration: none;
    border-radius: 4px;
    background: none;
    font-size: 14px;
    width: 100%;
    color: rgba(46, 168, 199, 1);
    border: 1px solid rgba(46, 168, 199, 1);
}
.sidebar .search{
    margin: 5px 0;
    height: 25px;
    font-size: 14px;
    background: black;
    color: gray;
    width: 100%;
    border: none;
    padding-left: 4px;
    border-radius: 4px;
}
.recent{
    margin:7px 0;
    display: flex;
    width: 100%;
    gap: 0 5px;
}
.recent img{
    width: 80px;
    height: 50px;
    background: white;
}
.recent p{
    font-size: 12px;
    color: white;
}
.recent span{
    font-size: 12px;
    color: gray;
}
.coteg{
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 12px 0;
}
.coteg input{
    background: none;
    display: flex;
    justify-content: flex-start;
    border: none;
    color: gray;
    font-size: 12px;
    border-bottom: 1px solid gray;
    cursor: pointer;
}
.popular h1{
    margin: 10px 0;
}
.popular .tags{
    width:100%;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 5px;
}
.tags input{
    border: 1px solid gray;
    padding: 3px 5px;
    font-size: 10px;
    border-radius: 4px;
    background: none;
    color: gray;
}
.pagination{
    width: 80%;
    display: flex;
    justify-content: center;
    gap: 0 10px;
    padding-bottom: 30px;
}
.pagination button{
    min-width: 40px;
    height: 25px;
}
}

@media screen and (min-width:1152px){
.posts{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px 0;
}
.post img{
    width: 100%;
    margin: 0 auto;
    background: white;
    height: 400px;
}
}

@media screen and (min-width:1440px){
    background: black;
    width: 100%;
.sidebarglav{
    width: 300px;
    display: flex;
    justify-content: center;
}
.title{
    position: fixed;
    top: 0;
    background: black;
    width: 100%;
    font-size: 18px;
    color: white;
    padding: 10px 0;
    display: flex;
    justify-content: center;
}
.blog{
    display: flex;
    justify-content: space-between;
    gap: 0 10px;
    padding:50px 0 30px 0;
    width: 90%;
    margin: 0 auto;
}
.gray{
    background: #3c3b3b;
    width: 100%;
    min-height: 100vh;
}
.posts{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px 0;
}

.post h2{
    color: white;
    font-size: 20px;
    font-weight: 300;
}
.post img{
    width: 100%;
    margin: 0 auto;
    background: white;
    height: 500px;
}
.post h3{
    color: white;
    font-size: 18px;
    font-weight: 200;
    padding: 7px 0;
}
.empty h4{
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    min-height: 400px;
    font-size: 30px;
    color:white;
}
.post a{
    background: rgba(46, 168, 199, 1);
    text-decoration: none;
    border-radius: 3px;
    color: white;
    border:none;
    font-size:14px;
    padding: 5px 10px;
}
.info{
    display: flex;
    justify-content: space-between;
    width: 100%;
}
.post .tags{
    margin: 10px 0;
    display: flex;
    gap:10px;
}
.post .tags p{
    color: white;
    font-size: 16px;
}
.sidebar{
    display: flex;
    justify-content: flex-start;
    gap: 4px 0;
    position: fixed;
    top: 57px;
    flex-direction: column;
}
.sidebar h1{
    font-size: 12px;
    margin: 7px 0 0 0;
    color: white;
    font-weight: 400;
}
.homebtn{
    padding: 5px 0;
    text-align: center;
    text-decoration: none;
    border-radius: 4px;
    background: none;
    font-size: 16px;
    width: 100%;
    color: rgba(46, 168, 199, 1);
    border: 1px solid rgba(46, 168, 199, 1);
}
.sidebar .search{
    margin: 5px 0;
    height: 25px;
    font-size: 14px;
    background: black;
    color: gray;
    width: 100%;
    border: none;
    padding-left: 4px;
    border-radius: 4px;
}
.recent{
    margin:7px 0;
    display: flex;
    width: 100%;
    gap: 0 5px;
}
.recent img{
    width: 80px;
    height: 50px;
    background: white;
}
.recent p{
    font-size: 12px;
    color: white;
}
.recent span{
    font-size: 12px;
    color: gray;
}
.coteg{
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 12px 0;
}
.coteg input{
    background: none;
    display: flex;
    justify-content: flex-start;
    border: none;
    color: gray;
    font-size: 12px;
    border-bottom: 1px solid gray;
    cursor: pointer;
}
.popular h1{
    margin: 10px 0;
}
.popular .tags{
    width:100%;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 5px;
}
.tags input{
    border: 1px solid gray;
    padding: 3px 5px;
    font-size: 10px;
    border-radius: 4px;
    background: none;
    color: gray;
}
.pagination{
    width: 80%;
    display: flex;
    justify-content: center;
    gap: 0 10px;
    padding-bottom: 30px;
}
.pagination button{
    min-width: 40px;
    height: 25px;
}
}

`

export default Blog