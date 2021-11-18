import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import IconButton from '@mui/material/IconButton';
import {Stack, Typography} from "@mui/material";
import {doc, Timestamp, writeBatch} from "firebase/firestore";
import {fetchUserData} from "../utils/userUtils";
import {useEffect, useState} from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../lib/firebase";
const {db} = require("../lib/firebase");



export default function VoteButtons ({ post }){
    const [userData, setUserData] = useState(null);
    const [user, loading, error] = useAuthState(auth);

    let upVotesCount = post.upVotesCount;
    let downVotesCount = post.downVotesCount;
    let upvoteList = post.usersUpvote
    let downvoteList = post.usersDownvote

    useEffect(() => {
        const fetchData = async () => {
            if (loading || !user) return;
            setUserData(await fetchUserData(user));
        }
        fetchData();
    }, [user, loading]);



    const handleClick = async (type) => {
        // Do calculation to save the vote.
        upVotesCount = post.upVotesCount;
        downVotesCount = post.downVotesCount;
        upvoteList = post.usersUpvote
        downvoteList = post.usersDownvote
        const date = new Date();

        if (type === "upvote") {
            if (downvoteList.includes(userData.id)){
                // remove downvote
                downvoteList = downvoteList.filter(id => id !== userData.id)
                downVotesCount--
            } else {
                upVotesCount++;
                upvoteList.push(userData.id);
            }
        } else {
            if (upvoteList.includes(userData.id)){
                // remove upvote
                upvoteList = upvoteList.filter(id => id !== userData.id)
                upVotesCount--
            } else {
                downVotesCount++;
                downvoteList.push(userData.id);
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
                color={userData ? (post.usersDownvote.includes(userData.id) ? "disabled" : "upvote"): "disabled"}
                disabled={!userData || post.usersUpvote.includes(userData.id)}
                style={userData ? (post.usersUpvote.includes(userData.id) ? {color: '#FF8b60'}: {}) : {}}
                variant="outlined"
                onClick={() => handleClick("upvote")}
            >
                <ArrowUpwardIcon/>
            </IconButton>
            <IconButton
                color={userData ? (post.usersUpvote.includes(userData.id) ? "disabled" : "downvote"): "disabled"}
                disabled={!userData || post.usersDownvote.includes(userData.id)}
                style={userData ? (post.usersDownvote.includes(userData.id) ? {color: '#9494FF'}: {}) : {}}
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

