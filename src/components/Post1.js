import React, {forwardRef} from 'react'
import "./Post1.css";
import { Avatar } from "@material-ui/core"

const Post1= forwardRef(
    ({ displayName, text, avatar}, ref)=> {
    return (
        <div className="post" ref={ref}>
            <div className="post__avatar">
                <Avatar src={avatar} />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            {displayName}{" "}
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
);

export default Post1
