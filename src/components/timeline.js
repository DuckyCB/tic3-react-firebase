import Post from "./post";
import {Stack} from "@mui/material";
import React, {useEffect, useState} from "react";
import {collection, onSnapshot, orderBy, query, where} from "firebase/firestore";
import {db} from "../lib/firebase";
import {useParams} from "react-router-dom";

export default function Timeline({subKinchoo}) {
	const [posts, setPosts] = useState([]);
	console.log(subKinchoo)
	let q
	if (subKinchoo){
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const {subname} = useParams()
		q = query(collection(db, "posts"), where("subKinchoo.subname", "==", subname) , orderBy("createdAt", "desc"));
	} else {
		q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
	}
	useEffect(() => {
		async function getPosts() {
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
					<Post post={post} key={post.id} />
				))}
			</Stack>
		</div>
	)
}
