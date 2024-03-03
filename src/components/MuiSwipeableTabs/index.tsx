import {FC, useState, ReactNode, SyntheticEvent} from "react";
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

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
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

    return (
        <Box sx={{ width: '100%', height: 35, borderBottom: '1px solid gray' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="inhegrit"
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
                    Item One
                </TabPanel>
                <TabPanel value={value} index={1} >
                    Item Two
                </TabPanel>
                <TabPanel value={value} index={2} >
                    Item Three
                </TabPanel>
            </SwipeableViews>
        </Box>
    );
}

export default MuiSwipeableTabs