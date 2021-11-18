import Button from "@mui/material/Button";
import {Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import {addDoc, collection, doc, Timestamp, writeBatch} from "firebase/firestore";
import {auth, db} from "../../lib/firebase";
import {fetchUserData} from "../../utils/userUtils";
import {useAuthState} from "react-firebase-hooks/auth";


export default function AddNewPost({ subKinchoo }) {
	const [open, setOpen] = useState(false);
	const [userData, setUserData] = useState(null);
	const [user, loading, error] = useAuthState(auth);
	const [title, setTitle] = useState('');
	const [imgURL, setImgURL] = useState('');
	const [content, setContent] = useState('');
	const date = new Date();

	useEffect(() => {
		const fetchData = async () => {
			if (loading || !user) return;
			setUserData(await fetchUserData(user));
		}
		fetchData();
	}, [user, loading]);

	async function handleCreatePost() {
		console.log(userData)
		console.log(subKinchoo)
		const docRef = await addDoc(collection(db, 'posts'), {
			user: {id: userData.id, username: userData.username},
			subKinchoo: {id: subKinchoo.id, subname: subKinchoo.subname, avatar: subKinchoo.avatar},
			upVotesCount: 1,
			downVotesCount: 0,
			createdAt: Timestamp.fromDate(date),
			title: title,
			imgURL: imgURL,
			content: content,
			usersUpvote:[userData.id],
			usersDownvote:[]
		})

		const postsCount = userData.postsCount + 1;

		const batch = writeBatch(db);
		const userRef = doc(db, "users", userData.id);
		batch.update(userRef, {postsCount: postsCount});
		await batch.commit()
		setOpen(false);
	}

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Button disabled={!userData} sx={{width: 8/10}} variant="contained" onClick={handleClickOpen}>
				Add New Post
			</Button>
			<Dialog fullWidth maxWidth={6/10} sx={{}} open={open} onClose={handleClose}>
				<DialogTitle>
					New post on {subKinchoo.subname}
				</DialogTitle>
				<DialogContent>
					<Stack spacing={1} justifyContent="center" alignItems="center"
						   sx={{ width: 8/10, paddingTop: 4, paddingBottom: 4, margin: 'auto' }}>
						<TextField id='title' label='Title' fullWidth
								   onChange={({target}) => setTitle(target.value)}/>
						<TextField id='imgLink' label='Image link' fullWidth
								   onChange={({target}) => setImgURL(target.value)}/>
						<TextField id='content' label='Content' fullWidth multiline rows={3}
								   onChange={({target}) => setContent(target.value)}/>
					</Stack>
				</DialogContent>
				<DialogActions>
					<Button variant="contained" onClick={handleClose}>Cancel</Button>
					<Button variant="contained" onClick={handleCreatePost}>Post</Button>
				</DialogActions>
			</Dialog>
		</>
	)
}
