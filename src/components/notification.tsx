import { Modal, Box, Typography, Button, useTheme } from '@mui/material';
import { ReactElement } from 'react';
import { useNotification } from '../hooks/useMessage';

type Props = {
  open: boolean;

  message: string;
  action?: () => void;
};

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

export const NotificationModal = ({ open, action, message }: Props): ReactElement => {
  const theme = useTheme();
  //use hook example
  const { setNotification } = useNotification();
  return (
    <Modal
      open={open}
      onClose={() => {
        setNotification({ shouldShow: false, message: '', action: undefined });
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Notification
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {message}
        </Typography>
        {action && (
          <Button
            variant="contained"
            color="info"
            onClick={action}
            sx={{ position: 'absolute', bottom: theme.spacing(1), right: theme.spacing(1) }}>
            Confirm
          </Button>
        )}
      </Box>
    </Modal>
  );
};
