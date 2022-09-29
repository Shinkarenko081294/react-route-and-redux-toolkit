import {useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';

const Blogpage = () => {
    const [posts, setPost] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPost(data))
    }, []); 
    return (
        <div>
            <h1>THIS BLOGPAGE</h1>
            {
                posts.map(post =>(
                    <Link key={post.id} to={`/posts/${post.id}`}>
                        <li>{post.title}</li>
                    </Link>
                ))
            }
        </div>
    )
}
export {Blogpage};