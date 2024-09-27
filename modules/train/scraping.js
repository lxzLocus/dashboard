const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://transit.yahoo.co.jp/timetable/25834/1771?ym=202409&d=8&hh=7&pref=27';

axios.get(url)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error fetching the URL:', error);
    });
