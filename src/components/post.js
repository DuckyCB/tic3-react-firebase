import React from "react";

const Post = (post) => {
   return (
      <div key={post.id}>
         <div>
            <p>{post.title}</p>
         </div>
      </div>
   );
};

export default Post;