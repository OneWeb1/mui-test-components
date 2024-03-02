import {Dispatch, FC, SetStateAction, useEffect, useState} from 'react';
import {Box, Drawer} from "@mui/material";
import {Simulate} from "react-dom/test-utils";


interface LeftSidebarProps {
    isOpen:boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>
}
const MuiLeftSidebar:FC<LeftSidebarProps> = ({isOpen, setIsOpen}) => {
    const [width, setWidth] = useState<number>(400)
    const toggleDrawer = (newOpen: boolean) => {
        setIsOpen(newOpen)
    }

    const resizeHandler = () => {
        setWidth(window.innerWidth > 450 ? 400 : window.innerWidth * .8)
    }

    useEffect(() => {
        resizeHandler()
        window.addEventListener('resize', resizeHandler)

        return () => {
            window.removeEventListener('resize', resizeHandler)
        }
    })
    return (
        <Drawer open={isOpen} onClose={() => toggleDrawer(false)}>
            <Box width={width} role='presentation'>
                Sidebar
            </Box>
        </Drawer>
    );
};

export default MuiLeftSidebar;