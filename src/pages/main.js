import Navbar from "../components/navbar";
import React, {useEffect, useState} from "react";
import Footer from "../components/footer";
import AddNewPost from "../components/add-new-post";
import Post from "../components/post";
import {collection, orderBy, query, onSnapshot} from "firebase/firestore";
import {db} from "../lib/firebase";
import {Link, Stack} from "@mui/material";

export default function Main() {
	const [posts, setPosts] = useState([]);

	useEffect(  async () => {
		const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
		onSnapshot(q,(querySnapshot) => {
			const _posts = [];
			querySnapshot.forEach((doc) => {
				_posts.push({
					id: doc.id,
					...doc.data(),
				});

			});
			setPosts(_posts);
		});
	},[]);

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
