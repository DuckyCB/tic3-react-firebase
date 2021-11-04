import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import IconButton from '@mui/material/IconButton';
import {Stack, Typography} from "@mui/material";
import {doc, setDoc, Timestamp} from "firebase/firestore";
const {db} = require("../lib/firebase");

// TODO: Solo puede votar un USUARIO REGISTRADO que NO VOTO ANTES

const VoteButtons = ({ post }) => {
    let upVotesCount = post.upVotesCount;
    let downVotesCount = post.downVotesCount;
    const handleClick = async (type) => {
        // Do calculation to save the vote.
        upVotesCount = post.upVotesCount;
        downVotesCount = post.downVotesCount;

        const date = new Date();

        if (type === "upvote") {
            upVotesCount++;
        } else {
            downVotesCount++;
        }

        await setDoc(doc(db,"posts", post.id), {
            title: post.title,
            upVotesCount: upVotesCount,
            downVotesCount: downVotesCount,
            imgURL: post.imgURL,
            content: post.content,
            createdAt: post.createdAt,
            updatedAt: Timestamp.fromDate(date)
        })
    };
return (
    <>
        <Stack direction="row">
            <IconButton style={{ color: "#FF8b60"}} variant="outlined" onClick={() => handleClick("upvote")}>
                <ArrowUpwardIcon/>
            </IconButton>
            <IconButton style={{ color: "#9494FF"}} variant="outlined" onClick={() => handleClick("downvote")}>
                <ArrowDownwardIcon/>
            </IconButton>
            <Typography p={1}>
                {post.upVotesCount - post.downVotesCount}
            </Typography>
        </Stack>
    </>
)}
export default VoteButtons;
