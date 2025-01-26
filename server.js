const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 7816;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'managmin')));
app.use(express.static(path.join(__dirname, 'web')));
app.use(express.static(path.join(__dirname, 'lymed')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'web', 'index.html'));
});

app.use('/managminpagesdashboard', (req, res, next) => {
    const userAgent = req.headers['user-agent'];
    const authCookie = req.cookies.authCode;

    if (!userAgent.includes('Chrome')) {
        return res.send(`
            <script>
                alert('Anda harus menggunakan browser Chrome untuk mengakses halaman ini!');
                window.history.back();
            </script>
        `);
    }

    if (!authCookie || authCookie !== 'aaacdbdasnak298#7b$88+owohs') {
        return res.send(`
            <script>
                alert('Jangan masuk!');
                window.history.back();
            </script>
        `);
    }
    next();
});

app.get('/lymed/', (req, res) => {
    res.sendFile(path.join(__dirname, 'lymed', 'index.html'));
});

app.get('/lymed', (req, res) => {
    res.sendFile(path.join(__dirname, 'lymed', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
