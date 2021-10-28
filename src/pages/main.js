import Navbar from "../components/navbar";
import React, {useEffect, useState} from "react";
import Footer from "../components/footer";
import AddNewPost from "../components/add-new-post";
import Post from "../components/post";
import {collection, getDocs, orderBy, query} from "firebase/firestore";
import {db} from "../lib/firebase";
import {Stack} from "@mui/material";

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
	},[])

	return (
		<>
			<Navbar />
			<AddNewPost />
			<p> Main page </p>
				<Stack spacing={4}
					   justifyContent="center"
					   alignItems="center"
				>
					{posts.map((post) => (
						<Post post={post} key={post.id} />
					))}
				</Stack>
			<Footer />
		</>
	)
}
