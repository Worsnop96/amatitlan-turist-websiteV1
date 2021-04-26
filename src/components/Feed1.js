import React, { useState, useEffect } from 'react'
import "./Feed1.css";
import CommentBox from "./CommentBox"
import Post from "./Post1"
import db from "../firebase"
import FlipMove from "react-flip-move";



function Feed1() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((doc) => doc.data()))
        );
    }, []);
    return (
        <div >
            <div className="feed1">
                <CommentBox />
                {/**commentBox */}
                <FlipMove>
                    {posts.map((post) => (
                        <Post
                            key={post.text}
                            displayName={post.displayName}
                            text={post.text}
                            avatar={post.avatar}
                        />
                    ))}
                </FlipMove>
                {/**post  */}
            </div>

        </div>

    )
}

export default Feed1
