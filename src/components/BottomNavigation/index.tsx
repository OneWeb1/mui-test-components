import {SyntheticEvent, useState} from "react";
import {BottomNavigation, BottomNavigationAction, Box} from "@mui/material"
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import PhotoCameraFrontOutlinedIcon from '@mui/icons-material/PhotoCameraFrontOutlined';


const MuiBottomNavigation = () => {
    const [value, setValue] = useState<number>(0)

    return (
        <Box sx={{width: '100%', position: 'fixed', bottom:0, color: '#000', boxShadow: '0px -4px 10px rgba(0,0,0, .1)'}}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event:SyntheticEvent, newValue) => setValue(newValue)}
            >
                <BottomNavigationAction sx={{minWidth: '30px', width: 'fit-content', color: 'inherit'}} label='screens' icon={<GridViewOutlinedIcon/>}/>
                <BottomNavigationAction sx={{minWidth: '30px', width: 'fit-content', color: 'inherit'}} label='apps' icon={<ExtensionOutlinedIcon/>}/>
                <BottomNavigationAction sx={{minWidth: '30px', width: 'fit-content', color: 'inherit'}} label='home' icon={<HomeOutlinedIcon/>}/>
                <BottomNavigationAction sx={{minWidth: '30px', width: 'fit-content', color: 'inherit'}} label='history' icon={<HistoryOutlinedIcon/>}/>
                <BottomNavigationAction sx={{minWidth: '30px', width: 'fit-content', color: 'inherit'}} label='profile' icon={<PhotoCameraFrontOutlinedIcon/>}/>
            </BottomNavigation>
        </Box>
    );
};

export default MuiBottomNavigation;