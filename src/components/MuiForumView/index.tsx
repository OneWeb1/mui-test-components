import MuiNotificationList from "../NotificationList";
import {Dispatch, FC, SetStateAction} from "react";


interface MuiForumViewProps {
    anchorEl: EventTarget | null;
    setAnchorEl: Dispatch<SetStateAction<EventTarget | null>>
}
const MuiForumView:FC<MuiForumViewProps> = ({anchorEl, setAnchorEl}) => {
    return (
        <MuiNotificationList anchorEl={anchorEl} setAnchorEl={setAnchorEl}>
            ForumList
        </MuiNotificationList>
    );
};

export default MuiForumView;