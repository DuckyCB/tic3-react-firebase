import React, {useEffect} from "react";
import {Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Link, Typography} from "@mui/material";
import VoteButtons from "./vote-buttons";
import Avatar from "@mui/material/Avatar";
import {red} from "@mui/material/colors";
import * as ROUTES from "../constants/routes";
import {Link as RouterLink} from "react-router-dom";

const Post = ({post, fullRender}) => {

    let user;
    if (post.user) {
        user = `Posted by ${post.user.username}`
    }

    let img;
    if (post.imgURL) {
        img = <CardMedia
            component="img"
            alt="Image not fetched"
            image={post.imgURL}
        />
    }
    const styleUser = {

    }
   return (
       <Card key={post.id} sx={{ width: 6/10 }}>
           <CardHeader
               avatar={
                   <Avatar sx={{bgcolor: red[500]}} aria-label="recipe" src={post.subKinchoo.avatar}/>
               }
               title={
                   // TODO: Poner bien el color de esto
                   <Link component={RouterLink} to={`/r/${post.subKinchoo.subname}`} style={{textDecoration: 'none'}}>
                       {post.subKinchoo.subname}
                   </Link>
               }
               subheader={
                   // TODO: Poner bien el color de esto
                   <Link component={RouterLink} to={`/u/${post.user.username}`} style={{textDecoration: 'none'}}>
                       {user}
                   </Link>
               }
           />
           <CardActionArea sx={fullRender ? {disabled: true} : {}} component={RouterLink} to={`/p/${post.id}`}>
               <CardContent>
                   <Typography variant="h6" display="block" gutterBottom>
                       {post.title}
                   </Typography>
                   {img}
                   <Typography sx={fullRender ? {} : {maxHeight: 250, overflow: 'hidden', display: (post.imgURL === '' ? 'block' : 'none')}} align={"justify"} >
                       {post.content}
                   </Typography>
               </CardContent>
           </CardActionArea>
           <CardActions>
               <VoteButtons post = {post}/>
               <Typography align={"right"} >
                   {post.createdAt.toDate().toString()}
               </Typography>
           </CardActions>
       </Card>
   );
};

Post.defaultProps = {
    fullRender: false
};

export default Post;
