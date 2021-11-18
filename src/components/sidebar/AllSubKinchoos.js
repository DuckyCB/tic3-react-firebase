import {Card, CardActionArea, Skeleton, Stack, Typography} from "@mui/material";
import Paper from "@mui/material/Paper";
import {useEffect, useState} from "react";
import {Link as RouterLink} from "react-router-dom";
import {collection, onSnapshot, orderBy, query, limit} from "firebase/firestore";
import {db} from "../../lib/firebase";

function SubKinchooItem({ subKinchoo }) {
    return (
        <Card sx={{width: 8/10}} variant="outlined">
            <CardActionArea sx={{height: 40, alignItems: 'center', display: 'flex'}} component={RouterLink} to={`/r/${subKinchoo.subname}`}>
                <Typography align='center'>
                    r/{subKinchoo.subname}
                </Typography>
            </CardActionArea>
        </Card>
    )
}

function SkeletonTopKinchoos() {
    return (
        <Stack spacing={2} justifyContent="center" alignItems="center" sx={{paddingTop: 2, paddingBottom: 2}}>
            <Skeleton animation='wave' variant='rectangular' sx={{ width: 8/10, height: 50 }}/>
            <Skeleton animation='wave' variant='rectangular' sx={{ width: 8/10, height: 50 }}/>
            <Skeleton animation='wave' variant='rectangular' sx={{ width: 8/10, height: 50 }}/>
            <Skeleton animation='wave' variant='rectangular' sx={{ width: 8/10, height: 50 }}/>
            <Skeleton animation='wave' variant='rectangular' sx={{ width: 8/10, height: 50 }}/>
        </Stack>
    )
}

export default function AllSubKinchoos() {
    const [topSubKinchoos, setTopSubKinchoos] = useState([]);

    useEffect(() => {

        async function getTopSubKinchoos() {
            try {
                const q = query(collection(db, 'subkinchoo'), orderBy('subname', 'asc'));
                onSnapshot(q, (querySnapshot) => {
                    const _topSubKinchoos = [];
                    querySnapshot.forEach((doc) => {
                        _topSubKinchoos.push({
                            id: doc.id,
                            ...doc.data(),
                        });
                    });
                    setTopSubKinchoos(_topSubKinchoos);
                });
            } catch (err) {
                console.error(err);
            }
        }
        getTopSubKinchoos();


    }, []);


    return (
        <Paper sx={{ width: 8/10}}>
            <Typography sx={{ paddingTop: 3, paddingBottom: 1 }} align='center' variant='h5'>
                All subKinchoos
            </Typography>
            {topSubKinchoos ? (
                <Stack spacing={2} justifyContent="center" alignItems="center" sx={{paddingTop: 2, paddingBottom: 2}}>
                    {topSubKinchoos.map( (subKinchoo) =>
                        <SubKinchooItem subKinchoo={subKinchoo}/>
                    )}
                </Stack>
            ) : (
                <SkeletonTopKinchoos/>
            )}
        </Paper>
    )

}
