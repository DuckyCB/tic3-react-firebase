import React from "react";
import {Card, CardContent, CardHeader, CardMedia, Typography} from "@mui/material";
import VoteButtons from "./vote-buttons";

const Post = ({post}) => {
    let img;
    if (post.imageURL) {
        img = <CardMedia
            component="img"
            height="194"
            alt="Image not fetched"
            image={post.imageURL}
        />
    }
   return (
       <Card key={post.id} sx={{ width: 6/10 }}>

           <CardHeader title={post.title}/>
           <CardContent>
               <Typography>
                   {post.content}
               </Typography>
               {img}
           </CardContent>
           <VoteButtons post = {post}/>
       </Card>
   );
};

export default Post;
