import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PostPush = () => {
    const titleRef = useRef();
    const bodyRef = useRef();
    const navigate = useNavigate();

    const handlePostRequest = async () => {
        const postData = {
            title: titleRef.current.value,
            body: bodyRef.current.value,
        };

            const response = await axios.post('https://dummyjson.com/posts/', postData);
            console.log('Ответ на POST-запрос:', response.data);
            navigate('/posts');
        console.log(postData);
    };

    return (
        <div>
            <h1>Create Post</h1>
            <label>Title: </label>
            <input type="text" ref={titleRef} />
            <br />
            <label>Body: </label>
            <textarea ref={bodyRef} />
            <br />
            <button onClick={handlePostRequest}>Create Post</button>
        </div>
    );
};

export default PostPush;
