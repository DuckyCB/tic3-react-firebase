import {ButtonBase, Paper, Stack, TextField} from "@mui/material";
import Grid from "@mui/material/Grid";
import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";



function Comment(props: { post: * }) {

    const Img = styled('img')({
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    });

    return (
        <Paper>
            <Grid container spacing={2}>
                <Grid item>
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Img alt="complex" src="/../../public/logo192.png" />
                    </ButtonBase>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default function Comments({post}) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        async function getComments() {
            // TODO: Pedir comentarios
            console.log('Falta recibir los comentarios');
            const _comments = {};
            setComments(_comments);
        }
        getComments();
    },[]);

    return (
        <div>
            <Stack spacing={4} justifyContent="center" alignItems="center">
                {comments.map((comment) => (
                    <Comment post={comment} key={comment.id} />
                ))}
            </Stack>
            <TextField id="outlined-basic" label="New comment" variant="outlined" />
        </div>
    )
}