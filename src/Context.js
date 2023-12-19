import axios from "axios";
import React,{createContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

const Context = createContext()

const ContextProvider = ({children})=>{
    const [about,setAbout] = useState([]);
    const [experience,setExperience] = useState([]);
    const [change,setChange] = useState("experience");
    const [blog,setBlog] = useState([]);
    const [recent,setRecent] = useState([]);
    const [cotegory,setCotegory] = useState([]);
    const [totalPage,setTotalPage] = useState();
    const [searchBlog,setSearchBlog] = useState([]);
    const [search,setSearch] = useState("");
    const [sorting,setSorting] = useState("");
    const [tagsChange,setTagsChange] = useState("");
    const [portfolio,setPortfolio] = useState([]);
    const [portfolioPage,setPortfolioPage] = useState();
    const [forSorting,setForSorting] = useState([]);
    const [name,setName] = useState("");
    const [email,setEmail] = useState();
    const [comment,setComment] = useState("");
    const [succes,setSucces] = useState(false);
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [aboutme,setAboutMe] = useState();
    const [firstname,setFirstname] = useState();
    const [lastname,setLastname] = useState();
    const [birthday,setBirthday] = useState();
    const [notionality,setNotionality] = useState();
    const [freelance,setFreelance] = useState();
    const [phone,setPhone] = useState();
    const [address,setAddress] = useState();
    const [language,setLanguage] = useState();
    const [github,setGithub] = useState();
    const [createCotegory,setCreateCotegory] = useState();
    const [title,setTitle] = useState();
    const [image,setImage] = useState("");
    const [portfolioImage,setPortfolioImage] = useState("");
    const [portfolioTitle,setPortfolioTitle] = useState();
    const [portfolioDate,setPortfolioDate] = useState()
    const [descr,setDescr] = useState();
    const [tags,setTags] = useState();
    const [coteg,setCoteg] = useState();
    const [updId,setUpdId] = useState();
    const [changeImg,setChangeImg] = useState("")
    const [updIdPortfolio,setUpdIdPortfolio] = useState();
    const [cotegoryName,setCotegoryName] = useState();
    const [cotegoryId,setCotegoryId] = useState();
    const [updCotegoryId,setUpdCotegoryId] = useState()
    const navigate = useNavigate();
    const size = 3;
    const token = localStorage.getItem("token");
    


    const SortedData =  sorting ? forSorting.filter(el => el.cotegory.includes(sorting.toLowerCase())) : [];
    const SortedByTags = tagsChange ? forSorting.filter(el => el.tags.includes(tagsChange)) : [];
    
    const api = "http://localhost:8080"
    const AboutMe = async () =>{
        const res = await fetch (api + '/about')
        const data = await res.json();
        setAbout(data);

    };
    useEffect(()=>{
        AboutMe();
    },[])

    const GetBlogs = async(e,p) => {
        const res = await fetch(`${api}/blog`);
        const data = await res.json()
        setForSorting(data[0])
    }

    useEffect(()=>{
        GetBlogs();
    },[])
   

   const btns = (e) => {
    setTagsChange("")
    setSorting(e.target.value)
   }
   const btns2 = (e) => {  
    setSorting("")
    setTagsChange(e.target.value)
    
   }

    const SearchBlog = async () =>{  
          if (search.trim() !== '') {
            const fetchData = async () => {
              try {
                const res = await axios.get(api + `/blogs?title=${search}`);
                setSearchBlog(res.data);
              } catch (error) {
                console.error('Error fetching search results:', error);
              }
            };
            fetchData();
          } else {
            setSearchBlog([]);
          }
    };

    useEffect(()=>{
        SearchBlog();
    },[search])

    const GetPortfolio = async(e,p) => {
        const res = await fetch(`${api}/portfolio?page=${p ? p -1 : 0}&size=${6}`);
        const data = await res.json()
        setPortfolio(data[0])
        setPortfolioPage(data[1].totalPage)
        window.scrollTo({top: 0, behavior: 'smooth'})
    }
    useEffect(() => {
        GetPortfolio()
    },[])



    const GetCotegory = async () =>{
        const res = await fetch (api + '/cotegory')
        const data = await res.json();
        setCotegory(data);

    };
    useEffect(()=>{
        GetCotegory();
    },[])

    const GetRecent = async(e) => {
        const res = await fetch(`${api}/blog`);
        const data = await res.json()
        const recentBlog = data[0].sort((a,b) => b.id - a.id)
        setRecent([recentBlog[0]])
    }
    useEffect(()=>{
        GetRecent();
    },[])

    

    const GetExperience = async(e) => {
        const res = await fetch(`${api}/${e ? e : change}`);
        const data = await res.json();
        console.log(data);
        setExperience(data)
        if (e) {
            setChange(e)
        }
    }
    useEffect(()=>{
        GetExperience();
    },[])

    const GetBlog = async(e,p) => {
        const res = await fetch(`${api}/blog?page=${p ? p-1 : 0}&size=${size}`);
        const data = await res.json()
        setBlog(data[0])
        setTotalPage(data[1].totalPage)
        window.scrollTo({top: 0, behavior: 'smooth'})
    }
   
    useEffect(()=>{
        GetBlog();
    },[])

    const SendTouch = async(e) => {
        e.preventDefault()
        await axios.post(api + "/touch",{name,email,comment}).then((res) => {
            if (res.status == 200) {
                setName("");
                setEmail("");
                setComment("");
                setSucces(true)
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    const Reg = async(e) => {
        e.preventDefault()
        await axios.post(api + "/register",{username,password}).then((res) =>{
            console.log(res);
            if (res.status == 201) {
                navigate("/login")
            }
        }).catch((err) =>{
            console.log(err);
        })
    }

    const Log = async(e) => {
        e.preventDefault()
        await axios.post(api + "/login",{username,password}).then((res) =>{
            if (res.status == 200) {
                localStorage.setItem("token",res.data.token)
                navigate("/admin/about")
            }
        }).catch((err) =>{
            console.log(err);
        })
    }

    const Ok = (e) => {
        setSucces(false);
        window.location.reload()
    }


    const AboutmeChange = async(e) => {
        e.preventDefault()
        
        await axios.put(`${api}/about`,{aboutme,firstname,lastname,birthday,notionality,freelance,phone,address,email,language,github },{headers:{token}}).then((res) => {
            if (res.status == (200)) {
                setSucces(true);
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    const AboutmeCreate = async(e) => {
        e.preventDefault()
        
        await axios.post(`${api}/about`,{aboutme,firstname,lastname,birthday,notionality,freelance,phone,address,email,language,github },{headers:{token}}).then((res) => {
            if (res.status == (201)) {
                    window.location.reload()
            }
        }).catch((err) => {
            console.log(err);
        })
    }
    
    const CreateBlogs = async(e) => {
        e.preventDefault()  
        const form = new FormData()
        form.append('image',image)
        form.append('tags',tags)
        form.append('title',title)
        form.append('coteg',coteg)
        form.append('descr',descr)
        await axios.post(`${api}/blog`,form,{headers:{token}}).then((res) => {
            if (res.status == 201) {
                setImage('')
                setTags('')
                setTitle('')
                setCoteg('')
                setDescr('')
                setSucces(true)
            }
        }).catch((err) => {
            console.log(err);
        })
}

    const DeleteBlogs = async(id) => {
        await axios.delete(`${api}/blog/${id}`,{headers:{token}}).then((res) => {
            if (res.status == 200) {
                setSucces(true)
            }
        }).catch((err) => {
            console.log(err);
        })
    }

    const UpdateBlogs = async(e) => {
        e.preventDefault()
            const form = new FormData()
            form.append('image',changeImg)
            form.append('tags',tags)
            form.append('title',title)
            form.append('coteg',coteg)
            form.append('descr',descr)
            await axios.put(`${api}/blog/${updId}`,form,{headers:{token}}).then((res) => {
                if (res.status == 200) {
                    setChangeImg('')
                    setTags('')
                    setTitle('')
                    setCoteg('')
                    setDescr('')
                    setSucces(true)
                }
            }).catch((err) => {
                console.log(err);
            })
        }

        const CreatePortfolio = async(e) => {
            e.preventDefault()
            const form = new FormData()
            form.append('image',portfolioImage)
            form.append('title',portfolioTitle)
            form.append('date',portfolioDate)
            await axios.post(`${api}/portfolio`,form,{headers:{token}}).then((res) => {
                if (res.status == 201) {
                    setPortfolioImage('')
                    setPortfolioTitle('')
                    setPortfolioDate('')
                    setSucces(true)
                }
            }).catch((err) => {
                console.log(err);
            })
    }

    const UpdatePortfolio = async(e) => {
            e.preventDefault()
            const form = new FormData()
            form.append('image',portfolioImage)
            form.append('title',portfolioTitle)
            form.append('date',portfolioDate)
            await axios.put(`${api}/portfolio/${updIdPortfolio}`,form,{headers:{token}}).then((res) => {
                if (res.status == 200) {
                    setPortfolioImage('')
                    setPortfolioTitle('')
                    setPortfolioDate('')
                    setSucces(true)
                }
            }).catch((err) => {
                console.log(err);
            })
        }

        const DeletePortfolio = async(id) => {
            await axios.delete(`${api}/portfolio/${id}`,{headers:{token}}).then((res) => {
                if (res.status == 200) {
                    setSucces(true)
                }
            }).catch((err) => {
                console.log(err);
            })     
        }

        const CreateCotegory = async(e) => {
            e.preventDefault()
            await axios.post(`${api}/cotegory`,{name:cotegoryName},{headers:{token}}).then((res) => {
                if (res.status == 200) {
                    setSucces(true)
                }
            }).catch((err) => {
                console.log(err);
            })
        }
        const UpdateCotegory = async(e) => {
            e.preventDefault();
            await axios.put(`${api}/cotegory/${updCotegoryId}`,{name:cotegoryName},{headers:{token}}).then((res) => {
                if (res.status == 200) {
                    setSucces(true)
                }
            }).catch((err) => {
                console.log(err);
            })
        }

        const DeleteCotegory = async(e) => {
            e.preventDefault()
            await axios.delete(`${api}/cotegory/${cotegoryId}`,{headers:{token}}).then((res) => {
                if (res.status == 200) {
                    setSucces(true)
                }
            }).catch((err) =>{ 
                console.log(err);
            })
        }
        

    

    return(
        <Context.Provider value={{
        about,experience,change,setChange,
        GetExperience,SortedData,recent,cotegory,totalPage,
        GetBlog,setSorting,sorting,searchBlog,search,setSearch,
        setTagsChange,btns,btns2,SortedByTags,blog,tagsChange,api,
        GetPortfolio,portfolio,portfolioPage,name,setName,comment,setComment,email,setEmail,
        SendTouch,succes,setSucces,Reg,setUsername,setPassword,Log,setAboutMe,setLastname,
        setFirstname,setBirthday,setNotionality,setFreelance,setPhone,setAddress,setLanguage,setGithub,AboutmeChange,navigate,
        forSorting,createCotegory,setCreateCotegory,setTitle,setImage,setDescr,setTags,setCoteg,CreateBlogs,coteg,DeleteBlogs,
        updId,setUpdId,UpdateBlogs,setChangeImg,AboutmeCreate,Ok,setUpdIdPortfolio,CreatePortfolio,UpdatePortfolio,DeletePortfolio,
        updIdPortfolio,setPortfolioDate,setPortfolioImage,setPortfolioTitle,setCotegoryName,CreateCotegory,UpdateCotegory,
        DeleteCotegory,setCotegoryId,cotegoryId,updCotegoryId,setUpdCotegoryId
        }}>
            {children}
        </Context.Provider>
    )
}
export {Context,ContextProvider}