import axios from 'axios';

export async function  getArtises() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/artise');
        return response.data;
      } catch (error) {
        return error;
      }
}

export async function getArtise(id:any) {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/artise/${id}`)
    return response.data;
    } catch (error) {
        return error;
    }
}
