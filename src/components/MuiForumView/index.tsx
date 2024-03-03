import MuiNotificationList from "../NotificationList";
import {Dispatch, FC, SetStateAction} from "react";
import {Box, Typography} from "@mui/material";


interface MuiForumViewProps {
    anchorEl: EventTarget | null;
    setAnchorEl: Dispatch<SetStateAction<EventTarget | null>>
}
const MuiForumView:FC<MuiForumViewProps> = ({anchorEl, setAnchorEl}) => {
    return (
        <MuiNotificationList anchorEl={anchorEl} setAnchorEl={setAnchorEl}>
            <Box sx={{width: 450, height: 600}}>
                <Typography>Forum</Typography>
            </Box>
        </MuiNotificationList>
    );
};

export default MuiForumView;