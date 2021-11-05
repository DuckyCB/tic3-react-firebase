import React, {useEffect} from "react";
import {Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Typography} from "@mui/material";
import VoteButtons from "./vote-buttons";
import Avatar from "@mui/material/Avatar";
import {red} from "@mui/material/colors";
import * as ROUTES from "../constants/routes";
import {Link} from "react-router-dom";

const Post = ({post}) => {

    // useEffect(() => {
    //     async function getPosts() {
    //         // TODO: Pide el subkinchoo asociado al post para printearlo
    //         // Capaz no es necesario pedirlo aca, sino obtenerlo al momento de cargar el post
    //         // y heredarlo a este componente
    //     }
    //     getPosts();
    // },[]);

    console.log(post);

    let user;
    if (post.user) {
        user = `Posted by ${post.user.name}`
    }

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
           <CardHeader
            //    avatar={
            //        <Avatar sx={{bgcolor: red[500]}} aria-label="recipe" src={post.subKinchoo.avatar}/>
            //    }
               // TODO: Aca va el titulo del subKinchoo
               title={post.subKinchoo.name}
               // TODO: Aca va el que posteo el post
               subheader={user}
           />
           <CardActionArea component={Link} to={`/p/${post.id}`}>
               <CardContent sx={{ maxHeight: 250, textOverflow: 'ellipsis'}} >
                   <Typography variant="h6" display="block" gutterBottom>
                       {post.title}
                   </Typography>
                   {img}
                   <Typography align={"justify"} >
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

export default Post;
