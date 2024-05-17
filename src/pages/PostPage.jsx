import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

const PostPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios.get('https://dummyjson.com/posts');
            setPosts(response.data.posts);
            console.log(response.data);
        };

        fetchPosts();
    }, []);

    return (
        <div>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
            <Link to="/postPush">Create Post</Link>
        </div>
    );
};

export default PostPage;