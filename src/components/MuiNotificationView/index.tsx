import MuiNotificationList from "../NotificationList";
import {Dispatch, FC, SetStateAction} from "react";
import {Box} from "@mui/material";
import MuiSwipeableTabs from "../MuiSwipeableTabs";


interface MuiNotificationViewProps {
    anchorEl: EventTarget | null;
    setAnchorEl: Dispatch<SetStateAction<EventTarget | null>>
}
const MuiNotificationView:FC<MuiNotificationViewProps> = ({anchorEl, setAnchorEl}) => {
    return (
        <MuiNotificationList anchorEl={anchorEl} setAnchorEl={setAnchorEl} ml={8}>
            <Box sx={{width: 450, height: 600}}>
                <MuiSwipeableTabs/>
            </Box>
        </MuiNotificationList>
    );
};

export default MuiNotificationView;