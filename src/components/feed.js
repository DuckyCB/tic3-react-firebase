import React from "react";

function Feed(props) {
    console.log(props)
    const posts = props.value;
    console.log(posts)
    return (
        <div className="feed">
            {posts}
        </div>
    );
}
//this.posts.map((post) => <Post post={post} />)

export default Feed;