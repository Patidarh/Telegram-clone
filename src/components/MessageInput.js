import React from 'react';
import { TextField, Button } from '@mui/material';

const MessageInput = () => {
  return (
    <form style={{ display: 'flex', marginTop: '16px' }}>
      <TextField
        variant="outlined"
        placeholder="Type a message"
        fullWidth
        style={{ marginRight: '8px' }}
      />
      <Button variant="contained" color="primary">
        Send
      </Button>
    </form>
  );
};

export default MessageInput;
