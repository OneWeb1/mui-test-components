import {FC, useState, ReactNode, SyntheticEvent, useEffect} from "react";
import SwipeableViews from 'react-swipeable-views';
import {styled} from "@mui/system"
import { useTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


interface TabPanelProps {
    children: ReactNode,
    index: number;
    value: number
}

const MuiTab = styled(Tab)(() => ({
    minHeight: 0,
    height: '100%',
    maxHeight: 35,
    minWidth: 0,
    padding:10,
    fontSize: 14,
    textTransform:'none',
    width: 'fit-content'
}))
const TabPanel:FC<TabPanelProps> = ({children, index, value}) => {
    const bg = ['red', 'green', 'blue']
    return (
        <div
            // hidden={value !== index}
        >
            {value === index && (
                <Box sx={{ p: 3, background: bg[index] }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const MuiSwipeableTabs = () => {
    const theme = useTheme();
    const [value, setValue] = useState(0);

    const handleChange = (_:SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index: number) => {
        setValue(index);
    };

    useEffect(() => {
        handleChange({} as SyntheticEvent, 0)
        handleChangeIndex(0)
    }, [])

    return (
        <Box sx={{ width: '100%', height: 35, borderBottom: '1px solid gray' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="inherit"
                    sx={{width: 'fit-content', minHeight: 0, height: '100%', mt: 0, paddingX:2}}
                >
                    <MuiTab label="Inbox" />
                    <MuiTab label="Archive" />
                    <MuiTab label="Comments" />
                </Tabs>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} >
                    Inbox Content
                </TabPanel>
                <TabPanel value={value} index={1} >
                    Archive Content
                </TabPanel>
                <TabPanel value={value} index={2} >
                    Comments Content
                </TabPanel>
            </SwipeableViews>
        </Box>
    );
}

export default MuiSwipeableTabs