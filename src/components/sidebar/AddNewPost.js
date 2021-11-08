import Button from "@mui/material/Button";
import {Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField} from "@mui/material";
import {useState} from "react";


export default function AddNewPost({ subKinchoo }) {
	const [open, setOpen] = useState(false);

	const handleCreatePost = () => {
		// TODO: Guardar el post nuevo
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
						<TextField id='title' label='Title' fullWidth/>
						<TextField id='imgLink' label='Image link' fullWidth/>
						{/* TODO: Cargar imagen agregada aca asi se puede ver*/}
						<TextField id='content' label='Content' fullWidth multiline rows={3}/>
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