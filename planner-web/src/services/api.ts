import axios from 'axios';

// Criando a instância do Axios
export const api = axios.create({
  baseURL: 'http://localhost:3000', // Coloque a URL do seu backend aqui
  headers: {
    'Content-Type': 'application/json',
  },
});