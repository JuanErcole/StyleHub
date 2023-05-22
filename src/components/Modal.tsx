import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useUiStore } from '../hooks/useUiStore';

interface ModalProps {
  title: string;
  body: string;
  buttonTitle: string;
}

export const Modal = ({title, body, buttonTitle}: ModalProps) => {

  const { isModalOpen, closeModal } = useUiStore();

  const handleClose = () => {
    closeModal();
  };

  return (
    <div>
      <Dialog
        open={isModalOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {body}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' onClick={handleClose} autoFocus>
            {buttonTitle}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}