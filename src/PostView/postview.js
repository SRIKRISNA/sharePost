import { useEffect, useState} from "react";
import "./post-view.css";
import axios from "axios";
import Header from "../Header/header";
import Footer from "../Footer/footer";

const PostView = ()=> {
    const [userData, setPostData] = useState([]);
    useEffect(()=> {
        axios.get('https://instacloneserver.herokuapp.com/postform').then((res)=>{
            let data = res.data.reverse();
            console.log(data)
            setPostData(data);
        }).catch((err)=>{
            console.log(err)
        })
    }, []);

   //`${new Date().toLocaleString()}`
    return (
        <>
            <div className="container">
                <header>
                    <Header />
                </header>
                <div className="postContainer">
                    {
                        userData.map((post,i)=> {
                            return (
                                <div className="post">
                                    <div className="user-information" key={i}>
                                        <div id="name_location"><h3>{post.author}</h3>{post.location}</div>
                                        <span id="dots"><h1>...</h1></span>
                                    </div>
                                    <div className="user-image">
                                        <img src={post.image} id="postimg" alt="user-defined-imge"></img>
                                    </div>
                                    <div className="user-meta">
                                        <span>{post.date}</span>
                                    </div>
                                    <div className="user-likes">
                                        <div className="like_comment">
                                             <img src="../like.svg" alt="Likes" id="likes" width="20px"></img>
                                            <img src="../comment.svg" alt="Comments" id="comments" width="20px"></img>
                                        </div>
                                    {post.likes} likes
                                    </div>
                                    <div className="user-description">
                                       <strong>{post.description}</strong>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <Footer />
            </div>
        </>
    )
}
export default PostView;