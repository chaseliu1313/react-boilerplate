import { Box, Button, IconButton, Stack, TextField, Typography, useTheme } from '@mui/material';
import { ReactElement, useState } from 'react';

import AttachFileIcon from '@mui/icons-material/AttachFile';
import { useNotification } from '../hooks/useMessage';
import { NotificationModal } from '../components';
//icons can be found: https://mui.com/material-ui/material-icons/?query=file

export const Home = (): ReactElement => {
  const theme = useTheme(); //theme hook where you can access custom theme values, styled-component has the same hook
  const [input, setInput] = useState<string>('');
  const { setNotification, notification } = useNotification();
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        padding: theme.spacing(2)
      }}>
      <Box
        component="form"
        autoComplete="on"
        sx={{
          height: '200px',
          width: '70%',
          backgroundColor: theme.palette.background.paper,
          boxShadow: theme.shadows[1],
          borderRadius: theme.spacing(2), //theme spacing is 8px per increment,
          padding: theme.spacing(2),
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          position: 'relative'
        }}>
        <Typography sx={{ position: 'absolute', top: theme.spacing(2), left: theme.spacing(2) }}>
          Upload your file
        </Typography>
        <Stack direction="row" alignItems="center" spacing={2} sx={{}}>
          <Button variant="contained" component="label" size="large">
            Upload
            <input
              hidden
              accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
              multiple
              type="file"
            />
          </Button>
          <IconButton color="primary" aria-label="upload picture" component="label">
            <input
              hidden
              accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
              type="file"
            />
            <AttachFileIcon />
          </IconButton>
        </Stack>
      </Box>
      <Box
        component="form"
        autoComplete="on"
        sx={{
          height: '300px',
          width: '70%',
          marginTop: theme.spacing(3),
          backgroundColor: theme.palette.background.paper,
          boxShadow: theme.shadows[1],
          borderRadius: theme.spacing(2), //theme spacing is 8px per increment,
          padding: theme.spacing(2),
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          position: 'relative'
        }}>
        <Typography sx={{ position: 'absolute', top: theme.spacing(2), left: theme.spacing(2) }}>
          Enter your question
        </Typography>
        <TextField
          id="standard-multiline-static"
          label="Enter here"
          fullWidth
          multiline
          rows={4}
          variant="standard"
          value={input}
          onChange={(v) => {
            setInput(v.target.value);
          }}
        />
        <Button
          variant="contained"
          size="large"
          color="primary"
          onClick={() => {
            setNotification({
              shouldShow: true,
              message: input,
              action: () => {
                //add this function will enable confirm button so you can add secondary action
                console.log('example');
              }
            });
          }}
          sx={{ position: 'absolute', bottom: theme.spacing(2), right: theme.spacing(2) }}>
          Submit
        </Button>
      </Box>
      <NotificationModal
        open={notification.shouldShow}
        message={notification.message}
        action={notification.action}
      />
    </Box>
  );
};
