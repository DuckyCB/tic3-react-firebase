import React from "react";
import {Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Link, Typography} from "@mui/material";
import VoteButtons from "./VoteButtons";
import Avatar from "@mui/material/Avatar";
import {red} from "@mui/material/colors";
import {Link as RouterLink} from "react-router-dom";
import {formatDay} from "../utils/date-utils";

function Content({post, fullRender}) {

    let img;
    if (post.imgURL) {
        img = <CardMedia component="img" alt="Image not fetched" image={post.imgURL}/>
    }

    return (
        <CardContent>
            <Typography variant="h6" display="block" gutterBottom>
                {post.title}
            </Typography>
            {post.imgURL ? <CardMedia component="img" alt="Image not fetched" image={post.imgURL}/> : null}
            <Typography sx={fullRender ? {} : {maxHeight: 250, overflow: 'hidden', display: (post.imgURL === '' ?
                    'block' : 'none')}} align={"justify"} >
                {post.content}
            </Typography>
        </CardContent>
    )
}

const Post = ({post, fullRender}) => {
    let user;
    if (post.user) {
        user = `Posted by u/${post.user.username}`
    }
    const date = formatDay(post.createdAt)


    const styleUser = {

    }
   return (
       <Card key={post.id} sx={{ width: 6/10 }}>
           <CardHeader
               avatar={
                   <Avatar sx={{bgcolor: red[500]}} aria-label="recipe" src={post.subKinchoo.avatar}/>
               }
               title={
                   <Link component={RouterLink} to={`/r/${post.subKinchoo.subname}`} sx={{ textDecoration: 'none', color: 'text.primary' }}>
                       r/{post.subKinchoo.subname}
                   </Link>
               }
               subheader={
                   <Link component={RouterLink} to={`/u/${post.user.username}`} sx={{ textDecoration: 'none', color: 'text.secondary' }}>
                       {user}
                   </Link>
               }
           />
           {fullRender ? (
               <Content post={post} fullRender={fullRender}/>
           ) : (
               <CardActionArea component={RouterLink} to={`/p/${post.id}`}>
                   <Content post={post} fullRender={fullRender}/>
               </CardActionArea>
           )}
           <CardActions sx={{justifyContent: 'space-between'}}>
               <VoteButtons post = {post}/>
               <Typography align={"right"} >
                   Posted: {date}
               </Typography>
           </CardActions>
       </Card>
   );
};

Post.defaultProps = {
    fullRender: false
};

export default Post;
