import axios from 'axios';

const API_URL = 'http://localhost:4000/api/v1/user';

export const getUsers = () => axios.get(API_URL);
