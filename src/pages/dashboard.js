import Navbar from "../components/navbar";
import React, {useEffect, useState} from "react";
import Footer from "../components/footer";
import AddNewPost from "../components/add-new-post";
import {Container, Grid, VStack} from "@chakra-ui/react";
import Post from "../components/post";
import {collection, getDocs, orderBy, query} from "firebase/firestore";
import {db} from "../lib/firebase";
import Timeline from "../components/timeline";
import Sidebar from "../components/sidebar";
import { ThemeProvider } from '@mui/material/styles';
import theme from "../components/theme";

export default function Dashboard() {
	const [posts, setPosts] = useState([]);

	//TODO: Ver como obtener los datos y pasarlos a los demás componentes

	useEffect(() => {
		document.title = 'Kinchoo'
	}, []);


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
			<ThemeProvider theme={theme}>
				<Navbar />
				<Grid container spacing={2} justifyContent="center" alignItems="flex-start">
					<Grid item xs={8}>
						<Timeline />
					</Grid>
					<Grid item xs={4}>
						<Sidebar />
					</Grid>
				</Grid>
				{/*<Container maxW="md" centerContent p={8}>*/}
				{/*	<VStack spacing={8} w="100%">*/}
				{/*		{posts.map((post) => (*/}
				{/*			<Post post={post} key={post.id} />*/}
				{/*		))}*/}
				{/*	</VStack>*/}
				{/*</Container>*/}
				<Footer />
			</ThemeProvider>
		</>
	)
}
