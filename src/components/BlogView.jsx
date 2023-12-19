import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Context } from '../Context'

const BlogView = () => {
    const { api } = useContext(Context);
    const [blog,setBlog] = useState([])
    const { id } = useParams();
    const GetRecent = async() => {
        if (id && id !== undefined) {
        const res = await fetch(`${api}/blog/${id}`);
        const data = await res.json()
        setBlog(data)
        }
    }
    useEffect(()=>{
        GetRecent();
    },[])
    
  return (
    <BlogViewStyle>
        <h1 className='title'>MY BLOG</h1>
        <div className="gray">
            <div className="blog">
                <div className="post">
                    <h1>{blog.title}</h1>
                    <img src={blog.image ? `http://localhost:8080/${blog.image}` : null}  alt="img" />
                    <h2>{blog.descr}</h2>
                    <div className="more">
                        <div className='tags'>
                            <p>{blog.tags}</p>
                        </div>
                        <div className="info">
                            <p>{blog.views}</p>
                            <p>{blog.date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </BlogViewStyle>
  )
}

const BlogViewStyle = styled.div`
@media screen and (max-width:550px){
background: black;
min-height: 932px;
.title{
    color: white;
    display: flex;
    justify-content: center;
    font-size: 12px;
    padding: 10px 0;
}
.gray{
    background: #3c3b3b;
}
.blog{
    width: 90%;
    margin: 0 auto;
}
.post{
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    gap: 10px 0;
    width: 100%;
    margin: 0 auto;
}
.post h1{
    color: white;
    font-size: 12px;
}
.post img{
    width: 100%;
    height: 200px;
    background: white;
}
.post h2{
    color: white;
    font-size: 12px;
    font-weight: 300;
}
.more{
    display: flex;
    justify-content: space-between;
}
.tags{
    display: flex;
    gap: 0 10px;
}
.tags p{
    color: white;
    font-size: 10px;
}
.info{
    display: flex;
    gap: 0 10px;
}
.info p{
    color: white;
    font-size: 10px;
}
}

@media screen and (min-width:525px){
.post img{
    width: 100%;
    height: 300px;
    background: white;
} 
}

@media screen and (min-width:551px){
background: black;
min-height: 732px;
.title{
    color: white;
    display: flex;
    justify-content: center;
    font-size: 14px;
    padding: 10px 0;
}
.gray{
    background: #3c3b3b;
}
.blog{
    width: 90%;
    margin: 0 auto;
}
.post{
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    gap: 10px 0;
    width: 100%;
    margin: 0 auto;
}
.post h1{
    color: white;
    font-size: 14px;
}
.post img{
    width: 100%;
    height: 300px;
    background: white;
}
.post h2{
    color: white;
    font-size: 14px;
    font-weight: 300;
}
.more{
    display: flex;
    justify-content: space-between;
}
.tags{
    display: flex;
    gap: 0 10px;
}
.tags p{
    color: white;
    font-size: 12px;
}
.info{
    display: flex;
    gap: 0 10px;
}
.info p{
    color: white;
    font-size: 12px;
}
}

@media screen and (min-width:731px){
.title{
    font-size: 16px;
}
.post h1{
    font-size: 15px;
}
.post img{
    height: 360px;
}
.post h2{
    font-size: 15px;
}
.tags p{
    font-size: 15px;
}
.info p{
    font-size: 13px;
}
}

@media screen and (min-width:731px){
.title{
    font-size: 18px;
}
.blog{
    width: 80%;
    margin: 0 auto;
}
.post h1{
    font-size: 16px;
}
.post img{
    height: 360px;
}
.post h2{
    font-size: 16px;
}
.tags p{
    font-size: 16px;
}
.info p{
    font-size: 14px;
}
}

@media screen and (min-width:1120px){
.post img{
    height: 400px;
}
}

@media screen and (min-width:1250px){
.post img{
    height: 440px;
}
}

@media screen and (min-width:1350px){
.post img{
    height: 480px;
}
}


@media screen and (min-width:1439px){
.title{
    font-size: 20px;
}
.blog{
    width: 80%;
    margin: 0 auto;
}
.post h1{
    font-size: 18px;
}
.post img{
    height: 560px;
}
.post h2{
    font-size: 18px;
}
.tags p{
    font-size: 16px;
}
.info p{
    font-size: 16px;
}
}





`

export default BlogView