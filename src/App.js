import { Container, Flex, Spinner, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Post from "./components/post";
import db from "./lib/firebase";

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Hook to handle the initial fetching of posts

    db.collection("posts")
       .orderBy("createdAt", "desc")
       .get()
       .then((querySnapshot) => {
         const data = querySnapshot.docs.map((doc) => ({
           id: doc.id,
           ...doc.data(),
         }));

         setPosts(data);
       });
  }, []);

  return (
     <>
       <Container maxW="md" centerContent p={8}>
         <VStack spacing={8} w="100%">
           {posts.map((post) => (
              <Post post={post} key={post.id} />
           ))}
         </VStack>
       </Container>
     </>
  );
};

export default App;
