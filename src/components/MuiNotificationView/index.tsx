import MuiNotificationList from "../NotificationList";
import {Dispatch, FC, SetStateAction} from "react";


interface MuiNotificationViewProps {
    anchorEl: EventTarget | null;
    setAnchorEl: Dispatch<SetStateAction<EventTarget | null>>
}
const MuiNotificationView:FC<MuiNotificationViewProps> = ({anchorEl, setAnchorEl}) => {
    return (
        <MuiNotificationList anchorEl={anchorEl} setAnchorEl={setAnchorEl}>
            NotificationList
        </MuiNotificationList>
    );
};

export default MuiNotificationView;