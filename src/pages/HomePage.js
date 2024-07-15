import React, { useEffect, useState } from 'react';
import { getChats } from '../services/api';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ChatWindow from '../components/ChatWindow';
import { Grid } from '@mui/material';

const HomePage = () => {
  const [chats, setChats] = useState([]);
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getChats()
      .then(response => {
        setChats(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleSelectChat = (chatId) => {
    setSelectedChatId(chatId);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <Header />
      <Grid container>
        <Grid item xs={12} md={4} style={{ borderRight: '1px solid #ccc', height: 'calc(100vh - 64px)' }}>
          <Sidebar chats={chats} onSelectChat={handleSelectChat} />
        </Grid>
        <Grid item xs={12} md={8}>
          <ChatWindow selectedChatId={selectedChatId} />
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
