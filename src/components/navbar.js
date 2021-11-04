import * as React from 'react';
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

const drawerWidth = 240;

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

export default function PersistentDrawerRight() {
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);
	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};
	let isLoggedIn = true;
	let sidebar, menuOpener;
	if (!isLoggedIn) {
		sidebar =
			<List>
				<ListItem button key={'Login'}>
					<ListItemIcon>
						<LoginIcon />
					</ListItemIcon>
					<ListItemText primary={'Login'} />
				</ListItem>
				<ListItem button key={'Signup'}>
					<ListItemIcon>
	                    <SaveAltIcon />
					</ListItemIcon>
					<ListItemText primary={"Signup"} />
				</ListItem>

				<Divider />
			</List>;
		menuOpener = <IconButton
			color="inherit"
			aria-label="open drawer"
			edge="end"
			onClick={handleDrawerOpen}
			sx={{ ...(open && { display: 'none' }) }}
		>
			<MenuIcon />
		</IconButton>
	} else {
		sidebar =
		<List>
			<ListItem button key={'Profile'}>
				<ListItemIcon>
					<PersonIcon />
				</ListItemIcon>
				<ListItemText primary={'Profile'} />
			</ListItem>
			<Divider />
			<ListItem button key={'Logout'}>
				<ListItemIcon>
					<LogoutIcon />
				</ListItemIcon>
				<ListItemText primary={"Logout"} />
			</ListItem>

			<Divider/>
		</List>;
		menuOpener = <IconButton
			color="inherit"
			aria-label="open drawer"
			edge="end"
			onClick={handleDrawerOpen}
		>
			<CardMedia
				component="img"
				alt="Image not fetched"
				height={60}
				image={"https://avatars.githubusercontent.com/u/66039600?s=64&v=4"}
			/>
		</IconButton>
	}

	return (
		<Box height={87} sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar enableColorOnDark color="orangebg" sx={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0))'}} position="fixed" open={open}>
				<Toolbar>
					<a href="https://www.reddit.com/">
						<img src="kinchoo.png" style={{margin:10}} height={60} alt="Kinchoo"/>
					</a>
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
