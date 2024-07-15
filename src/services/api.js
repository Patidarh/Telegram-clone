import axios from 'axios';

const API_URL = 'https://devapi.beyondchats.com/api/';

export const getChats = async () => {
  const response = await axios.get(`${API_URL}get_all_chats?page=1`);
  return response.data;
};

export const getChatMessages = async (chatId) => {
  const response = await axios.get(`${API_URL}get_chat_messages?chat_id=${chatId}`);
  return response.data;
};
