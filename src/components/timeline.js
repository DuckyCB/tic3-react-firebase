import Post from "./post";
import {Stack} from "@mui/material";
import React, {useEffect, useState} from "react";
import {collection, onSnapshot, orderBy, query} from "firebase/firestore";
import {db} from "../lib/firebase";

export default function Timeline() {
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
		<div>
			Timeline
			<Stack spacing={4} justifyContent="center" alignItems="center">
				{posts.map((post) => (
					<Post post={post} key={post.id} />
				))}
			</Stack>
		</div>
	)
}