import React from "react";
import {Card, CardContent, CardHeader, CardMedia, Typography} from "@mui/material";
import VoteButtons from "./vote-buttons";

const Post = ({post}) => {
    let img;
    if (post.imgURL) {
        img = <CardMedia
            component="img"
            alt="Image not fetched"
            image={post.imgURL}
        />
    }
   return (
       <Card key={post.id} sx={{ width: 6/10 }}>

           <CardHeader title={post.title}/>
           <CardContent>
               <Typography align={"justify"} >
                   {post.content}
               </Typography>
               {img}
           </CardContent>
           <VoteButtons post = {post}/>
       </Card>
   );
};

export default Post;
