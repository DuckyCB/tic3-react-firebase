import Button from "@mui/material/Button";
import {Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField} from "@mui/material";
import {useState} from "react";
import {addDoc, collection, Timestamp} from "firebase/firestore";
import {db} from "../../lib/firebase";


export default function CreateNewSubKinchoo() {
    const [open, setOpen] = useState(false);

    const [name, setName] = useState('');
    const [subname, setSubname] = useState('');
    const [avatar, setAvatar] = useState('');
    const [description, setDescription] = useState('');
    const date = new Date();

    // TODO: Obtener instancia del usuario actual
    const logedUser = {id: 'l8pt7BnTT5XVCSlsxshTWJ7jpPn1', username: 'kinchu'};



    async function handleCreateSubKinchoo() {
        // TODO: Verificar que el subname sea todo en minusculas y sin espacios
        const docRef = await addDoc(collection(db, 'subkinchoo'), {
            avatar: avatar,
            description: description,
            followers: [],
            followersCount: 0,
            name: name,
            posts: [],
            subname: subname,
            createdAt: Timestamp.fromDate(date),
        })
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
            <Button sx={{width: 8/10}} variant="contained" onClick={handleClickOpen}>
                Create new SubKinchoo
            </Button>
            <Dialog fullWidth maxWidth={6/10} sx={{}} open={open} onClose={handleClose}>
                <DialogTitle>
                    Create new SubKinchoo
                </DialogTitle>
                <DialogContent>
                    <Stack spacing={1} justifyContent="center" alignItems="center"
                           sx={{ width: 8/10, paddingTop: 4, paddingBottom: 4, margin: 'auto' }}>
                        <TextField id='name' label='Name' placeholder='Sub Kinchoo name' fullWidth
                                   onChange={({target}) => setName(target.value)}/>
                        <TextField id='subname' label='Subname' placeholder='subkinchooname' fullWidth
                                   onChange={({target}) => setSubname(target.value)}/>
                        <TextField id='imgLink' label='Image link' placeholder='images.com/yourimage' fullWidth
                                   onChange={({target}) => setAvatar(target.value)}/>
                        {/* TODO: Cargar imagen agregada aca asi se puede ver*/}
                        <TextField id='description' label='Description' placeholder='Description of the SubKinchoo' fullWidth multiline rows={3}
                                   onChange={({target}) => setDescription(target.value)}/>
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" onClick={handleClose}>Cancel</Button>
                    <Button variant="contained" onClick={handleCreateSubKinchoo}>Create</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
