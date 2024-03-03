import {FC, useRef} from "react";
import {BottomNavigation, BottomNavigationAction, Box} from "@mui/material"
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import PhotoCameraFrontOutlinedIcon from '@mui/icons-material/PhotoCameraFrontOutlined';
import {useNavigate} from "react-router-dom";
import {styled} from "@mui/system";



const NavigationAction = styled(BottomNavigationAction)(() => ({
    minWidth: '30px', width: 'fit-content', color: 'inherit'
}))

interface MuiBottomNavigationProps {
    value: number;
    // setValue: Dispatch<SetStateAction<number>>
}

const MuiBottomNavigation:FC<MuiBottomNavigationProps> = ({value}) => {
    const navigate = useNavigate()
    const routePathRef = useRef<string>( '')


    const handleRoute = (path:string) => {
        if(path !== routePathRef.current) {
            routePathRef.current = path
            handleRoute(path)
            setTimeout(() => {
                console.log({path})

                console.log('navigate')
                navigate(path)
            }, 500)
        }
        console.log({path, pathRef: routePathRef.current})

    }

    return (
        <Box sx={{width: '100%', position: 'fixed', bottom:0, color: '#000', boxShadow: '0px -4px 10px rgba(0,0,0, .1)'}}>
            <BottomNavigation
                showLabels
                value={value}
                // onChange={(_:SyntheticEvent, newValue) => setValue(newValue)}
            >
                <NavigationAction label='screens' icon={<GridViewOutlinedIcon/>} onClick={() => handleRoute('/screens')}/>
                <NavigationAction label='apps' icon={<ExtensionOutlinedIcon/>} onClick={() => handleRoute('/apps')}/>
                <NavigationAction label='home' icon={<HomeOutlinedIcon/>} onClick={() => handleRoute('/')}/>
                <NavigationAction label='history' icon={<HistoryOutlinedIcon/>} onClick={() => handleRoute('/history')}/>
                <NavigationAction label='profile' icon={<PhotoCameraFrontOutlinedIcon/>} onClick={() => handleRoute('/profile')}/>
            </BottomNavigation>
        </Box>
    );
};

export default MuiBottomNavigation;