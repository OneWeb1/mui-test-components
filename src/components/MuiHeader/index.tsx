import {AppBar, Box, IconButton, Toolbar, Typography, Badge} from "@mui/material";
import {styled} from "@mui/system"
import MenuIcon from "@mui/icons-material/Menu"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import { useState} from "react";
import MuiMenuList from "../MenuList";
import MuiLeftSidebar from "../LeftSidebar";
import MuiNotificationView from "../MuiNotificationView";
import MuiForumView from "../MuiForumView";


const StyledBadge = styled(Badge)(({ theme }) => ({
    marginRight: '5px',

    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

const MuiHeader = () => {
    const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false)
    const [menuAnchorEl, setMenuAnchorEl] = useState<EventTarget | null>(null)
    const [notificationAnchorEl, setNotificationAnchorEl] = useState<EventTarget | null>(null)
    const [forumAnchorEl, setForumAnchorEl] = useState<EventTarget | null>(null)

    return (
        <AppBar position='static' sx={{background: '#fff', color: '#000'}}>
            <Toolbar variant='dense'>
                <IconButton
                    edge='start'
                    color='inherit'
                    onClick={() => setIsOpenSidebar(true)}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography>Realect</Typography>
                <Box sx={{flexGrow: 1}}></Box>
                <Box>
                    <StyledBadge badgeContent={332} color='error'>
                        <IconButton
                            edge='end'
                            size='large'
                            color='inherit'
                            onClick={e => setForumAnchorEl(e.currentTarget)}
                        >
                            <ForumOutlinedIcon/>
                        </IconButton>
                    </StyledBadge>
                    <StyledBadge badgeContent={32} color='error'>
                        <IconButton
                            edge='end'
                            size='large'
                            color='inherit'
                            onClick={e => setNotificationAnchorEl(e.currentTarget)}
                        >
                            <NotificationsNoneIcon/>
                        </IconButton>
                    </StyledBadge>
                    <IconButton
                        edge='end'
                        size='large'
                        color='inherit'
                        onClick={e => setMenuAnchorEl(e.currentTarget)}
                    >
                        <MoreVertIcon/>
                    </IconButton>
                </Box>
            </Toolbar>
            <MuiLeftSidebar isOpen={isOpenSidebar} setIsOpen={setIsOpenSidebar}/>
            <MuiMenuList anchorEl={menuAnchorEl} setAnchorEl={setMenuAnchorEl}/>
            <MuiNotificationView anchorEl={notificationAnchorEl} setAnchorEl={setNotificationAnchorEl}/>
            <MuiForumView anchorEl={forumAnchorEl} setAnchorEl={setForumAnchorEl}/>
        </AppBar>
    );
};

export default MuiHeader;