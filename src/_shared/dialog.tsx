import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton } from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';

type Props = {
    onConfirm: () => void
}
const DeleteDialog: React.FC<Props> = ({ onConfirm }) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true)
    };

    const handleClose = () => {
        setOpen(false)
    };
    const handleSuccessfulClose = () => {
        setOpen(false)
        onConfirm()
    }

    return (
        <div>
            <IconButton onClick={handleClickOpen} >
                <DeleteIcon />
            </IconButton>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are you sure you want to delete this?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        The data you are deleting right now cannot be recovered, and will be deleted entirely from the database...
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Ehm... not really.</Button>
                    <Button onClick={handleSuccessfulClose} autoFocus>
                        Yeah, I'm sure!
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
export default DeleteDialog