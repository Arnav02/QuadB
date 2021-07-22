const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

const fetchData = async () => {
    try {
        const res = await axios.get('https://api.wazirx.com/api/v2/tickers');
        console.log(res.data.xrpinr.low);
    }
    catch (err) {
        console.log('Something went wrong: ', err);
    }
}

fetchData();

app.get('/', (req, res) => {
    res.render('index');
})

const port = 3000;
app.listen(port, () => {
    console.log(`On port, ${port}`);
})