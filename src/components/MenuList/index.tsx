import {Dispatch, FC, SetStateAction, SyntheticEvent, useState} from "react";
import {ListItemIcon, Menu, MenuItem} from "@mui/material";
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import PublishOutlinedIcon from '@mui/icons-material/PublishOutlined';
import ContentCutOutlinedIcon from '@mui/icons-material/ContentCutOutlined';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import GetAppOutlinedIcon from '@mui/icons-material/GetAppOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


interface MuiMenuListProps {
    anchorEl: EventTarget | null;
    setAnchorEl: Dispatch<SetStateAction<EventTarget | null>>
}

const MuiMenuList:FC<MuiMenuListProps> = ({anchorEl, setAnchorEl}) => {
    const [selectedIndex, setSelectIndex] = useState(1)
    const open = Boolean(anchorEl)

    const handleMenuItemClick = (_:SyntheticEvent, index:number) => {
        setSelectIndex(index)
        console.log(selectedIndex)
        setAnchorEl(null)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }



    return (
            <Menu
                open={open}
                sx={{width: 300, mt: 3.5}}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}

                onClose={handleClose}
            >
                <MenuItem style={{height: '35px', minHeight: '20px'}} onClick={e => handleMenuItemClick(e, 1)}>
                    <ListItemIcon sx={{color:'inherit'}}><NoteAddOutlinedIcon fontSize='small'/></ListItemIcon> Новий файл
                </MenuItem>
                <MenuItem style={{height: '35px', minHeight: '20px'}} onClick={e => handleMenuItemClick(e, 2)}>
                    <ListItemIcon sx={{color:'inherit'}}><CreateNewFolderOutlinedIcon fontSize='small'/></ListItemIcon> Нова папка
                </MenuItem>
                <MenuItem style={{height: '35px', minHeight: '20px'}} onClick={e => handleMenuItemClick(e, 3)}>
                    <ListItemIcon sx={{color:'inherit'}}><PublishOutlinedIcon fontSize='small'/></ListItemIcon> Импортировать файл
                </MenuItem>
                <MenuItem style={{height: '35px', minHeight: '20px'}} onClick={e => handleMenuItemClick(e, 4)}>
                    <ListItemIcon sx={{color:'inherit'}}><ContentCutOutlinedIcon fontSize='small'/></ListItemIcon> Вырезать
                </MenuItem>
                <MenuItem style={{height: '35px', minHeight: '20px'}} onClick={e => handleMenuItemClick(e, 5)}>
                    <ListItemIcon sx={{color:'inherit'}}><DriveFileRenameOutlineOutlinedIcon fontSize='small'/></ListItemIcon> Переименовать
                </MenuItem>
                <MenuItem style={{height: '35px', minHeight: '20px'}} onClick={e => handleMenuItemClick(e, 6)}>
                    <ListItemIcon sx={{color:'inherit'}}><ContentCopyOutlinedIcon fontSize='small'/></ListItemIcon> Скопировать путь
                </MenuItem>
                <MenuItem style={{height: '35px', minHeight: '20px'}} onClick={e => handleMenuItemClick(e, 7)}>
                    <ListItemIcon sx={{color:'inherit'}}><ContentCopyOutlinedIcon fontSize='small'/></ListItemIcon> Скопировать в проект
                </MenuItem>
                <MenuItem style={{height: '35px', minHeight: '20px'}} onClick={e => handleMenuItemClick(e, 8)}>
                    <ListItemIcon sx={{color:'inherit'}}><GetAppOutlinedIcon fontSize='small'/></ListItemIcon> Експорт
                </MenuItem>
                <MenuItem style={{height: '35px', minHeight: '20px'}} onClick={e => handleMenuItemClick(e, 9)}>
                    <ListItemIcon sx={{color:'inherit'}}><DeleteOutlineOutlinedIcon fontSize='small'/></ListItemIcon> Удалить
                </MenuItem>

            </Menu>
    );
};


export default MuiMenuList;
