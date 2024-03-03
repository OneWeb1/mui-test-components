import {Dispatch, FC, ReactNode, SetStateAction} from "react";
import {Menu} from "@mui/material";



interface MuiNotificationListProps {
    children: ReactNode;
    ml?: number;
    anchorEl: EventTarget | null;
    setAnchorEl: Dispatch<SetStateAction<EventTarget | null>>
}

const MuiNotificationList:FC<MuiNotificationListProps> = ({children, anchorEl, setAnchorEl}) => {
    const open = Boolean(anchorEl)

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <Menu
            open={open}
            sx={{width: 450, mt: 4}}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}

            onClose={handleClose}
        >
            {children}
        </Menu>
    );
};


export default MuiNotificationList;
