import "./postform.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../Header/header";
import Footer from "../Footer/footer";

const PostForm = () =>{
    const [posts,setPosts] = useState({image:"",author:"", location:"", description:""});
    const [setvalue] = useState("No File Chosen")
    const navigate = useNavigate();
    
    const convertbase64 = (file)=> new Promise((res,rej)=>{
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => res(reader.result)
        reader.onerror = (err) =>rej(err)
    })

    const afterUpload = async (e)=>{
        //console.log("Hello")
        const file = e.target.files[0]
        const base64 = await convertbase64(file)
        setPosts({...posts,image:base64})
        setvalue(e.target.value)
    }

    const handlePosts =()=>{
        console.log(posts);
        axios({
            url: "https://instacloneserver.herokuapp.com/postform",
            method: "POST",
            headers: {
            },
            data: posts
        }).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
        navigate("/postview");
    }

    return(
        <>
        <div className="container">
            <header>
                    <Header />
            </header>
            <div className="formContainer">
            
                <form method="POST">
                    <h2 style={{"textAlign":"center", "color":"#7f0392"}}>Add New Post</h2>
                    <input type="file" onChange={(e)=> afterUpload(e) } ></input>     
                    <input type="text" value={posts.author} onChange={(e)=>{setPosts({...posts, author: e.target.value})}} id="author" name="author" placeholder="Author" />
                    <input type="text" value={posts.location} onChange={(e)=>{setPosts({...posts, location: e.target.value})}} id="location" name="location" placeholder="Location" />
                    <input type="text" value={posts.description} onChange={(e)=>{setPosts({...posts, description: e.target.value})}} id="description" name="description" placeholder="Description" />
                    <input type="submit" id="submitbtn" value="Submit" onClick={handlePosts}/>
                </form>
            </div>
            <Footer/>
        </div>
        </>
    );
}
export default PostForm;