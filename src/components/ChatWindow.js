import React, { useState, useEffect } from 'react';
import { getChatMessages } from '../services/api';
import { Paper, List, ListItem, ListItemText } from '@mui/material';
import MessageInput from './MessageInput';

const ChatWindow = ({ selectedChatId }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (selectedChatId) {
      getChatMessages(selectedChatId).then(response => {
        setMessages(response.data);
      });
    }
  }, [selectedChatId]);

  return (
    <Paper style={{ padding: '16px', height: 'calc(100vh - 64px)', overflowY: 'auto' }}>
      <List>
        {messages.map((message) => (
          <ListItem key={message.id}>
            <ListItemText primary={message.text} />
          </ListItem>
        ))}
      </List>
      <MessageInput />
    </Paper>
  );
};

export default ChatWindow;
