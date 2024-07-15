import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const Sidebar = ({ chats, onSelectChat }) => {
  if (!Array.isArray(chats)) {
    return null;
  }

  return (
    <List component="nav">
      {chats.map((chat) => (
        <ListItem button key={chat.id} onClick={() => onSelectChat(chat.id)}>
          <ListItemText primary={chat.name} />
        </ListItem>
      ))}
    </List>
  );
};

export default Sidebar;
