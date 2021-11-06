import {Card, CardContent, CardHeader, Paper, Stack, TextField, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";


function Comment({comment}) {
    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    });
    return (
        <Card sx={{ width: 8/10 }}>
            <CardHeader
                title={comment.postedBy}
                subheader="Fecha"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {comment.content}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default function Comments({post}) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        async function getComments() {
            // TODO: obtener los comentarios del post, que tiene una subcollection de comentarios
            const hardcodedComments = [
                {'content': 'contenido 1', 'postedBy': 'ducky'},
                {'content': 'contenido 2', 'postedBy': 'kinchu'}
            ];
            setComments(hardcodedComments)
        }
        getComments();

        console.log(comments)
    },[comments]);

    return (
        <Paper sx={{ width: 6/10 }}>
            <Stack spacing={4} justifyContent="center" alignItems="center" sx={{ width: 6/10 }}>
                {comments.map((comment) =>
                    <Comment comment={comment}/>
                )}
            </Stack>
        </Paper>
    )
}