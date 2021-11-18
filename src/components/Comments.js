import {Card, CardContent, Paper, Stack, TextField, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import {Link as RouterLink} from "react-router-dom";
import {addDoc, collection, onSnapshot, query, Timestamp} from "firebase/firestore";
import {auth, db} from "../lib/firebase";
import {formatMinutes} from "../utils/date-utils";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {useAuthState} from "react-firebase-hooks/auth";
import {fetchUserData} from "../utils/userUtils";


function Comment({content, postedBy, createdAt}) {

    return (
        <Card variant="outlined" sx={{ width: '100%' }}>
            <CardContent>
                <Typography variant="body1" color="text.primary">
                    {content}
                </Typography>
                <Typography variant="caption" color="text.secondary" component={RouterLink}
                            to={`/u/${postedBy}`} sx={{ textDecoration: 'none', color: 'text.primary' }}>
                    {postedBy} - {createdAt}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default function Comments({post}) {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState([]);
    const [userData, setUserData] = useState(null);
    const [user, loading, error] = useAuthState(auth);


    useEffect(() => {
        async function getComments() {
            try {
                const q = query(collection(db, 'posts', post.id, 'comments'));
                onSnapshot(q, (querySnapshot) => {
                    const _comments = [];
                    querySnapshot.forEach((doc) => {
                        _comments.push({id: doc.id, ...doc.data()});
                    });
                    setComments(_comments);
                });
            } catch (err) {
                console.error(err);
            }
        }


        const fetchData = async () => {
            if (loading || !user) return;
            setUserData(await fetchUserData(user));
        }

        fetchData();
        getComments();

    }, [user, loading]);

    async function handleNewComment() {
        const docRef = await addDoc(collection(db, 'posts', post.id, 'comments'), {
            content: newComment,
            createdAt: Timestamp.fromDate(new Date()),
            downVotes: 0,
            upVotes: 0,
            postedBy: userData.username
        });
        setNewComment('');
    };

    return (
        <Paper sx={{ width: 6/10, marginBottom: 5 }}>
            <Stack spacing={1} justifyContent="center" alignItems="center"
                   sx={{ width: 9/10, paddingTop: 4, paddingBottom: 4, margin: 'auto' }}>
                {comments.map((comment) =>
                    <Comment content={comment.content} postedBy={comment.postedBy} createdAt={formatMinutes(comment.createdAt)}/>
                )}
                <Box sx={{width: '100%'}}>
                    <Grid container component="form" sx={{paddingBottom: 4}} spacing={1}>
                        <Grid item xs={10}>
                            <TextField fullWidth id="outlined-textarea" label="New comment" placeholder="Excelent post!" multiline
                                       value={newComment}
                                       onChange={({target}) => setNewComment(target.value)}/>
                        </Grid>
                        <Grid item xs={2} container>
                            <Button variant="contained" sx={{height: '100%', width: '100%'}} onClick={handleNewComment}>+</Button>
                        </Grid>
                    </Grid>
                </Box>
            </Stack>
        </Paper>
    )
}
