import Button from "@mui/material/Button";
import {Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField} from "@mui/material";
import {useState} from "react";
import {addDoc, collection, Timestamp} from "firebase/firestore";
import {db} from "../../lib/firebase";


export default function AddNewPost({ subKinchoo }) {
	const [open, setOpen] = useState(false);

	const [title, setTitle] = useState('');
	const [imgURL, setImgURL] = useState('');
	const [content, setContent] = useState('');
	const date = new Date();
	// TODO: Obtener isntancia del usuario actual
	const logedUser = {id: 'l8pt7BnTT5XVCSlsxshTWJ7jpPn1', username: 'kinchu'};

	async function handleCreatePost() {
		const docRef = await addDoc(collection(db, 'posts'), {
			user: {id: logedUser.id, username: logedUser.username},
			subKinchoo: {id: subKinchoo.id, subname: subKinchoo.subname, avatar: subKinchoo.avatar},
			upVotesCount: 1,
			downVotesCount: 0,
			createdAt: Timestamp.fromDate(date),
			title: title,
			imgURL: imgURL,
			content: content
		})
		// TODO: Cuando se guarda el post, se le suma 1 a la cantidad de posts del usuario
		setOpen(false);
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<Button sx={{width: 8/10}} variant="contained" onClick={handleClickOpen}>
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
						{/* TODO: Cargar imagen agregada aca asi se puede ver*/}
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
