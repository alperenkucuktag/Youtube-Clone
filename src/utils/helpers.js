import axios from 'axios';

const options = {
  params: { geo: 'TR', lang: 'tr' },
  headers: {
    'X-RapidAPI-Key': 'a81cc9c303mshe54bf31ae4df9e6p180290jsn3bce82edd85d',
    'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
  },
};
axios.defaults.baseURL = 'https://yt-api.p.rapidapi.com';

// veridğimiz url'e istek atıp
// geriye verileri döndüren yardımıxcı fonk
export const getData = async (url) => {
  try {
    const response = await axios.get(url, options);
    return response;
  } catch (err) {
    console.log('Verileri çekerken hata oluştu');
  }
};
