import React, {useEffect} from "react";
import {Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Typography} from "@mui/material";
import VoteButtons from "./vote-buttons";
import Avatar from "@mui/material/Avatar";
import {red} from "@mui/material/colors";
import * as ROUTES from "../constants/routes";

const Post = ({post}) => {

    useEffect(() => {
        async function getPosts() {
            // TODO: Pide el post asociado al comentario para printearlo
            // Capaz no es necesario pedirlo aca, sino obtenerlo al momento de cargar el post
            // y heredarlo a este componente
        }
        getPosts();
    },[]);

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
               avatar={
                   <Avatar sx={{bgcolor: red[500]}} aria-label="recipe">
                       {/* TODO: Aca va la foto del subKinchoo */}
                       R
                   </Avatar>
               }
               // TODO: Aca va el titulo del subKinchoo
               title='SubKinchoo name'
               // TODO: Aca va el que posteo el post
               subheader='Posted by MAD MAX'
           />
           <CardActionArea href={`${ROUTES.FULLPOST}${post.id}`}>
               <CardContent>
                   <Typography variant="h6" display="block" gutterBottom>
                       {post.title}
                   </Typography>
                   <Typography align={"justify"} >
                       {post.content}
                   </Typography>
                   {img}
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
