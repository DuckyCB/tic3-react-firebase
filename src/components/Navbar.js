import * as React from 'react';
import {useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import {CardMedia} from "@mui/material";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import {ColorModeContext} from "../app";
import * as ROUTES from "../constants/routes";
import {red} from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import { logout } from '../utils/userUtils';

const drawerWidth = 240;
// TODO: Obtener isntancia del usuario actual
// const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
// 	({ theme, open }) => ({
// 		flexGrow: 1,
// 		padding: theme.spacing(3),
// 		transition: theme.transitions.create('margin', {
// 			easing: theme.transitions.easing.sharp,
// 			duration: theme.transitions.duration.leavingScreen,
// 		}),
// 		marginRight: -drawerWidth,
// 		...(open && {
// 			transition: theme.transitions.create('margin', {
// 				easing: theme.transitions.easing.easeOut,
// 				duration: theme.transitions.duration.enteringScreen,
// 			}),
// 			marginRight: 0,
// 		}),
// 	}),
// );

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
	transition: theme.transitions.create(['margin', 'width'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginRight: drawerWidth,
	}),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: 'flex-start',
}));

export default function Navbar({user, onLogout}) {
	const history = useHistory();
	const theme = useTheme();
	const [open, setOpen] = useState(false);
	const [sidebar, setSidebar] = useState(null);
	const [menuOpener, setMenuOpener] = useState(null);

	const handleDrawerOpen = () => {
		setOpen(true);
	};


	const handleDrawerClose = () => {
		setOpen(false);
	};

	
	useEffect(() => {
		if (!user) {
			setSidebar(
				<List>
					<ListItem button key={'Login'} onClick={() => {
						history.push(ROUTES.LOGIN);
					}}>
						<ListItemIcon>
							<LoginIcon />
						</ListItemIcon>
						<ListItemText primary={'Login'} />
					</ListItem>
					<ListItem button key={'SignUp'} onClick={() => {
						history.push(ROUTES.SIGNUP);
					}}>
						<ListItemIcon>
							<SaveAltIcon />
						</ListItemIcon>
						<ListItemText primary={"SignUp"} />
					</ListItem>
	
					<Divider />
				</List>);
			setMenuOpener(<>
			<IconButton
				color="inherit"
				aria-label="open drawer"
				edge="end"
				onClick={handleDrawerOpen}
				sx={{ ...(open && { display: 'none' }) }}
			>
				<MenuIcon />
			</IconButton></>);
		} else {
			setSidebar(
			<List>
				<ListItem button key={'Profile'} onClick={() => {
					history.push(`/u/${user.username}`);
				}}>
					<ListItemIcon>
						<PersonIcon />
					</ListItemIcon>
					<ListItemText primary={'Profile'} />
				</ListItem>
				<Divider />
				<ListItem button key={'Logout'} onClick={async () => {
					await onLogout();
				}}>
					<ListItemIcon>
						<LogoutIcon />
					</ListItemIcon>
					<ListItemText primary={"Logout"} />
				</ListItem>
	
				<Divider/>
			</List>);
			setMenuOpener(<><IconButton
				color="inherit"
				aria-label="open drawer"
				edge="end"
				onClick={handleDrawerOpen}
			>
				<Avatar sx={{bgcolor: red[500], height: 60, width: 60}}
						src={user.avatar}
						aria-label="recipe"/>
			</IconButton></>);
		}
	}, [user, open]);

	return (
		<Box height={87} sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar enableColorOnDark color="orangebg" sx={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0))'}} position="fixed" open={open}>
				<Toolbar>
					<Link to={ROUTES.DASHBOARD}>
						<img src="../../kinchoo.png" style={{margin:10}} height={60} alt="Kinchoo"/>
					</Link>
					<Typography sx={{ flexGrow: 1 }} component="div">
					</Typography>
					<ColorModeContext.Consumer>
						{colorMode => (
							<IconButton onClick={colorMode.toggleColorMode} color="inherit">
								{theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
							</IconButton>
                        )}
					</ColorModeContext.Consumer>
					{menuOpener}
				</Toolbar>
			</AppBar>
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: drawerWidth,
					},
				}}
				variant="persistent"
				anchor="right"
				open={open}
			>
				<DrawerHeader>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
					</IconButton>
				</DrawerHeader>
				<Divider />
				{sidebar}
				{/*<List>*/}
				{/*	{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (*/}
				{/*		<ListItem button key={text}>*/}
				{/*			<ListItemIcon>*/}
				{/*				{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}*/}
				{/*			</ListItemIcon>*/}
				{/*			<ListItemText primary={text} />*/}
				{/*		</ListItem>*/}
				{/*	))}*/}
				{/*</List>*/}
				{/*<Divider />*/}
				{/*<List>*/}
				{/*	{['All mail', 'Trash', 'Spam'].map((text, index) => (*/}
				{/*		<ListItem button key={text}>*/}
				{/*			<ListItemIcon>*/}
				{/*				{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}*/}
				{/*			</ListItemIcon>*/}
				{/*			<ListItemText primary={text} />*/}
				{/*		</ListItem>*/}
				{/*	))}*/}
				{/*</List>*/}
			</Drawer>
		</Box>
	);
}
