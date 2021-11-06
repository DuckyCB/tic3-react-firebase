import {Card, CardContent, Paper, Stack, TextField, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import {Link as RouterLink} from "react-router-dom";


function Comment({comment}) {
    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    });
    return (
        <Card variant="outlined" sx={{ width: '100%' }}>
            <CardContent>
                <Typography variant="body1" color="text.primary">
                    {comment.content}
                </Typography>
                <Typography variant="caption" color="text.secondary" component={RouterLink}
                            to={`/u/${comment.postedBy}`} sx={{ textDecoration: 'none', color: 'text.primary' }}>
                    {comment.postedBy} - {comment.createdAt}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default function Comments({post}) {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState([])

    useEffect(() => {
        async function getComments() {
            // TODO: obtener los comentarios del post, está en una subcollection 'comments' del post
            const hardcodedComments = [
                {'content': 'Muy buen post bro, la verdad estoy totalmente de acuerdo. Que siga asi el buen contenido. ' +
                        'Saludos a la flia!', 'postedBy': 'ducky', 'createdAt': '06/11/2021 11:37'},
                {'content': 'Además, para recuperar todos los documentos de una colección, puedes omitir el filtro ' +
                        'where() por completo, como se muestra a continuación:', 'postedBy': 'kinchu',
                        'createdAt': '06/12/2021 16:20'},
                {'content': 'contenido 2', 'postedBy': 'kinchu', 'createdAt': '06/11/2021 12:37'},
                {'content': 'contenido 3', 'postedBy': 'kinchu', 'createdAt': '06/11/2021 13:34'},
                {'content': 'contenido 4', 'postedBy': 'kinchu', 'createdAt': '06/11/2021 14:39'}
            ];
            setComments(hardcodedComments)
        }
        getComments();

    },[]);

    const handleNewComment = (event) => {
        event.preventDefault();
        // TODO: Crear nuevo comentario
    };

    return (
        <Paper sx={{ width: 6/10, marginBottom: 5 }}>
            <Stack spacing={1} justifyContent="center" alignItems="center"
                   sx={{ width: 9/10, paddingTop: 4, paddingBottom: 4, margin: 'auto' }}>
                {comments.map((comment) =>
                    <Comment comment={comment}/>
                )}
            </Stack>
            <Box component="form" onSubmit={handleNewComment} sx={{ width: 9/10, paddingBottom: 4, margin: 'auto' }}>
                <TextField fullWidth id="outlined-textarea" label="New comment" placeholder="Excelent post!" multiline/>
            </Box>
        </Paper>
    )
}