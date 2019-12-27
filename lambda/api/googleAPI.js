const axios = require('axios');

exports.handler = async () => {
    const URL = `https://translation.googleapis.com/language/translate/v2?key=${process.env.GoogleAPI_KEY}&source=en&target=es&q=word&format=text`;    
    axios.get(URL)
    .then(res => {
      console.log({"translated": res.data.data.translations[0].translatedText });
      return
  }).catch(err => {
      console.log('err:', err);
      return
  })
};