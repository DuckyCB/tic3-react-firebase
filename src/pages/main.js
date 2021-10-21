import Navbar from "../components/navbar";
import React, {useEffect, useState} from "react";
import Footer from "../components/footer";
import AddNewPost from "../components/add-new-post";
import {Container, VStack} from "@chakra-ui/react";
import Post from "../components/post";
import {collection, getDocs, orderBy, query} from "firebase/firestore";
import {db} from "../lib/firebase";

export default function Main() {
	const [posts, setPosts] = useState([]);

	//TODO: Ver como obtener los datos y pasarlos a los demás componentes

	useEffect(  async () => {
		const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
		const querySnapshot = await getDocs(q);
		const _posts = [];
		querySnapshot.forEach((doc) => {
			_posts.push({
				id: doc.id,
				...doc.data(),
			})
		})
		setPosts(_posts);
		console.log(_posts)
	},[])

	return (
		<>
			<Navbar />
			<AddNewPost />
			<p> Main page </p>
			<Container maxW="md" centerContent p={8}>
				<VStack spacing={8} w="100%">
					{posts.map((post) => (
						<Post post={post} key={post.id} />
					))}
				</VStack>
			</Container>
			<Footer />
		</>
	)
}
