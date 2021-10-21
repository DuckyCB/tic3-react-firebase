import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import IconButton from '@mui/material/IconButton';
const {db} = require("../lib/firebase");



const VoteButtons = ({ post }) => {
    const handleClick = async (type) => {
        // Do calculation to save the vote.
        let upVotesCount = post.upVotesCount;
        let downVotesCount = post.downVotesCount;

        const date = new Date();

        if (type === "upvote") {
            upVotesCount = upVotesCount + 1;
        } else {
            downVotesCount = downVotesCount + 1;
        }

        await db.collection("posts").doc(post.id).set({
            title: post.title,
            upVotesCount,
            downVotesCount,
            createdAt: post.createdAt,
            updatedAt: date.toUTCString(),
        });
    };
return (
    <>
        <IconButton style={{ color: "#FF8b60"}} variant="outlined">
            <ArrowUpwardIcon/>
        </IconButton>
        <IconButton style={{ color: "#9494FF"}} variant="outlined">
            <ArrowDownwardIcon/>
        </IconButton>
    </>
)}
export default VoteButtons;
