import Button from "@mui/material/Button";
import {Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import {addDoc, collection, Timestamp} from "firebase/firestore";
import {auth, db} from "../../lib/firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import {fetchUserData} from "../../utils/userUtils";


export default function CreateNewSubKinchoo() {
    const [open, setOpen] = useState(false);
    const [userData, setUserData] = useState(null);
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState('');
    const [subname, setSubname] = useState('');
    const [avatar, setAvatar] = useState('');
    const [description, setDescription] = useState('');
    const date = new Date();

    useEffect(() => {
        const fetchData = async () => {
            if (loading || !user) return;
            setUserData(await fetchUserData(user));
        }

        fetchData();
    }, [user, loading]);

    const hasWhiteSpace = str => str.indexOf(' ') >= 0;

    async function handleCreateSubKinchoo() {
        if (hasWhiteSpace(subname)){
            alert('Sub-kinchoo subname can\'t have spaces');
            return;
        }
        const docRef = await addDoc(collection(db, 'subkinchoo'), {
            avatar: avatar,
            description: description,
            followersCount: 0,
            name: name,
            posts: [],
            subname: subname.toLowerCase(),
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

            <Button disabled={!userData} sx={{width: 8/10}} variant="contained" onClick={handleClickOpen}>
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
