import Post from "./post";
import {Stack} from "@mui/material";
import React, {useEffect, useState} from "react";
import {collection, onSnapshot, orderBy, query} from "firebase/firestore";
import {db} from "../lib/firebase";

export default function Timeline() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		async function getPosts() {
			const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
			onSnapshot(q, (querySnapshot) => {
				const _posts = [];
				querySnapshot.forEach((doc) => {
					_posts.push({
						id: doc.id,
						...doc.data(),
					});
				});
				setPosts(_posts);
			});
		}
		getPosts();
	},[]);

	return (
		<div>
			<Stack spacing={4} justifyContent="center" mb={5} mt={2} alignItems="center">
				{posts.map((post) => (
					<Post post={post} />
				))}
			</Stack>
		</div>
	)
}
