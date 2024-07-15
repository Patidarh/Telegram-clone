import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Telegram
        </Typography>
        <IconButton edge="end" color="inherit">
          <SettingsIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
