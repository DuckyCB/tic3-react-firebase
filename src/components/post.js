import React from "react";
// import {HStack} from "@chakra-ui/react";
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
       <Card sx={{ width: 6/10 }}>

           <CardHeader title={post.title}/>
           <CardContent>
               <Typography>
                   {post.content}
               </Typography>
               {img}
           </CardContent>
           <VoteButtons post = {post}/>
       </Card>

      // <HStack key={post.id} w="100%" alignItems="flex-start">
      //    <Box bg="gray.100" p={4} rounded="md" w="100%">
      //       <Text>{post.title}</Text>
      //    </Box>
      // </HStack>
   );
};

export default Post;
