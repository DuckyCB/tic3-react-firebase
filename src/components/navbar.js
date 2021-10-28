// import './index.css';
// import { ReactComponent as BellIcon } from './icons/bell.svg';
// import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
// import { ReactComponent as CaretIcon } from './icons/caret.svg';
// import { ReactComponent as PlusIcon } from './icons/plus.svg';
// import { ReactComponent as CogIcon } from './icons/cog.svg';
// import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
// import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
// import { ReactComponent as BoltIcon } from './icons/bolt.svg';
//
// import React, { useState, useEffect, useRef } from 'react';
// import { CSSTransition } from 'react-transition-group';
//
// // TODO: ESTO SE VA
// function App() {
// 	return (
// 		<Navbar>
// 			<NavItem icon={<PlusIcon />} />
// 			<NavItem icon={<BellIcon />} />
// 			<NavItem icon={<MessengerIcon />} />
//
// 			<NavItem icon={<CaretIcon />}>
// 				<DropdownMenu></DropdownMenu>
// 			</NavItem>
// 		</Navbar>
// 	);
// }
//
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import theme from "./theme";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
	transition: theme.transitions.create(['margin', 'width'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: `${drawerWidth}px`,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: 'flex-end',
}));

export default function Navbar() {
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Box height={80} sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar enableColorOnDark color="orangebg" sx={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0))'}} position="fixed" open={open}>
				<Toolbar>
					<IconButton
						color="white"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						sx={{ mr: 2, ...(open && { display: 'none' }) }}
					>
						<MenuIcon />
					</IconButton>
					<img src="kinchoo.png"  style={{margin:10}} height={60} alt="Kinchoo"/>
				</Toolbar>
			</AppBar>
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: drawerWidth,
						boxSizing: 'border-box',
					},
				}}
				variant="persistent"
				anchor="left"
				open={open}
			>
				<DrawerHeader>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
					</IconButton>
				</DrawerHeader>
				<Divider />
				<List>
					{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
						<ListItem button key={text}>
							<ListItemIcon>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
				<Divider />
				<List>
					{['All mail', 'Trash', 'Spam'].map((text, index) => (
						<ListItem button key={text}>
							<ListItemIcon>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
			</Drawer>
		</Box>
	);
}
// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
//
// export default function Navbar() {
// 	return (
// 		// <Box sx={{ flexGrow: 1, margin: 0 }}>
// 			<AppBar  position="static">
// 				<Toolbar>
// 					<IconButton
// 						size="large"
// 						edge="start"
// 						color="inherit"
// 						aria-label="menu"
// 						sx={{ mr: 2 }}
// 					>
// 						<MenuIcon />
// 					</IconButton>
// 					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
// 						News
// 					</Typography>
// 					<Button color="inherit">Login</Button>
// 				</Toolbar>
// 			</AppBar>
// 		// </Box>
// 	);
// }

// export default Navbar;
// export default function Navbar() {
// 	return (
// 		<nav className="navbar">
// 			{/*<ul className="navbar-nav">{props.children}</ul>*/}
// 			<NavItem icon={<PlusIcon />} />
// 			<NavItem icon={<BellIcon />} />
// 			<NavItem icon={<MessengerIcon />} />
//
// 			<NavItem icon={<CaretIcon />}>
// 				<DropdownMenu></DropdownMenu>
// 			</NavItem>
// 		</nav>
// 	);
// }
//
// function NavItem(props) {
// 	const [open, setOpen] = useState(false);
//
// 	return (
// 		<li className="nav-item">
// 			<a href="#" className="icon-button" onClick={() => setOpen(!open)}>
// 				{props.icon}
// 			</a>
//
// 			{open && props.children}
// 		</li>
// 	);
// }
//
// function DropdownMenu() {
// 	const [activeMenu, setActiveMenu] = useState('main');
// 	const [menuHeight, setMenuHeight] = useState(null);
// 	const dropdownRef = useRef(null);
//
// 	useEffect(() => {
// 		setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
// 	}, [])
//
// 	function calcHeight(el) {
// 		const height = el.offsetHeight;
// 		setMenuHeight(height);
// 	}
//
// 	function DropdownItem(props) {
// 		return (
// 			<a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
// 				<span className="icon-button">{props.leftIcon}</span>
// 				{props.children}
// 				<span className="icon-right">{props.rightIcon}</span>
// 			</a>
// 		);
// 	}
//
// 	return (
// 		<div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
//
// 			<CSSTransition
// 				in={activeMenu === 'main'}
// 				timeout={500}
// 				classNames="menu-primary"
// 				unmountOnExit
// 				onEnter={calcHeight}>
// 				<div className="menu">
// 					<DropdownItem>My Profile</DropdownItem>
// 					<DropdownItem
// 						leftIcon={<CogIcon />}
// 						rightIcon={<ChevronIcon />}
// 						goToMenu="settings">
// 						Settings
// 					</DropdownItem>
// 					<DropdownItem
// 						leftIcon="🦧"
// 						rightIcon={<ChevronIcon />}
// 						goToMenu="animals">
// 						Animals
// 					</DropdownItem>
//
// 				</div>
// 			</CSSTransition>
//
// 			<CSSTransition
// 				in={activeMenu === 'settings'}
// 				timeout={500}
// 				classNames="menu-secondary"
// 				unmountOnExit
// 				onEnter={calcHeight}>
// 				<div className="menu">
// 					<DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
// 						<h2>My Tutorial</h2>
// 					</DropdownItem>
// 					<DropdownItem leftIcon={<BoltIcon />}>HTML</DropdownItem>
// 					<DropdownItem leftIcon={<BoltIcon />}>CSS</DropdownItem>
// 					<DropdownItem leftIcon={<BoltIcon />}>JavaScript</DropdownItem>
// 					<DropdownItem leftIcon={<BoltIcon />}>Awesome!</DropdownItem>
// 				</div>
// 			</CSSTransition>
//
// 			<CSSTransition
// 				in={activeMenu === 'animals'}
// 				timeout={500}
// 				classNames="menu-secondary"
// 				unmountOnExit
// 				onEnter={calcHeight}>
// 				<div className="menu">
// 					<DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
// 						<h2>Animals</h2>
// 					</DropdownItem>
// 					<DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
// 					<DropdownItem leftIcon="🐸">Frog</DropdownItem>
// 					<DropdownItem leftIcon="🦋">Horse?</DropdownItem>
// 					<DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
// 				</div>
// 			</CSSTransition>
// 		</div>
// 	);
// }
//
// export default App;
