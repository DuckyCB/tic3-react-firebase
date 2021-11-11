import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import IconButton from '@mui/material/IconButton';
import {Stack, Typography} from "@mui/material";
import {doc, Timestamp, writeBatch} from "firebase/firestore";
const {db} = require("../lib/firebase");

// TODO: Obtener instancia del usuario actual


export default function VoteButtons ({ post }){
    // let user = false;
    // usuario kinchu
    let user = {id: 'l8pt7BnTT5XVCSlsxshTWJ7jpPn1'}
    let upVotesCount = post.upVotesCount;
    let downVotesCount = post.downVotesCount;
    let upvoteList = post.usersUpvote
    let downvoteList = post.usersDownvote

    const handleClick = async (type) => {
        // Do calculation to save the vote.
        upVotesCount = post.upVotesCount;
        downVotesCount = post.downVotesCount;
        upvoteList = post.usersUpvote
        downvoteList = post.usersDownvote

        const date = new Date();

        if (type === "upvote") {
            if (downvoteList.includes(user.id)){
                // remove downvote
                downvoteList = downvoteList.filter(id => id !== user.id)
                downVotesCount--
            } else {
                upVotesCount++;
                upvoteList.push(user.id);
            }
        } else {
            if (upvoteList.includes(user.id)){
                // remove upvote
                upvoteList = upvoteList.filter(id => id !== user.id)
                upVotesCount--
            } else {
                downVotesCount++;
                downvoteList.push(user.id);
            }
        }
        const batch = writeBatch(db);
        const postRef = doc(db, "posts", post.id);
        batch.update(postRef, {
            upVotesCount: upVotesCount,
            downVotesCount: downVotesCount,
            usersUpvote: upvoteList,
            usersDownvote: downvoteList,
            updatedAt: Timestamp.fromDate(date)
        });
        await batch.commit()
    };

return (
    <>
        <Stack direction="row">
            <IconButton
                color={user ? (post.usersDownvote.includes(user.id) ? "disabled" : "upvote"): "disabled"}
                disabled={!user || post.usersUpvote.includes(user.id)}
                style={(!user || post.usersUpvote.includes(user.id)) ? {color: '#FF8b60'}: {}}
                variant="outlined"
                onClick={() => handleClick("upvote")}
            >
                <ArrowUpwardIcon/>
            </IconButton>
            <IconButton
                color={user ? (post.usersUpvote.includes(user.id) ? "disabled" : "downvote"): "disabled"}
                disabled={!user || post.usersDownvote.includes(user.id)}
                style={(!user || post.usersDownvote.includes(user.id)) ? {color: '#9494FF'}: {}}
                variant="outlined"
                onClick={() => handleClick("downvote")}
            >
                <ArrowDownwardIcon/>
            </IconButton>
            <Typography p={1}>
                {post.upVotesCount - post.downVotesCount}
            </Typography>
        </Stack>
    </>
)}

