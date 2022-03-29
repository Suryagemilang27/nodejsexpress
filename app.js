const express = require('express');
const bodyParser = require('body-parser');
const koneksi = require('./config/database');
const app = express();
const PORT = process.env.PORT || 5000;
// set body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// buat server nya
app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));

// create data / insert data
app.post('/api/movies', (req, res) => {
    // buat variabel penampung data dan query sql
    const data = { ...req.body };
    const querySql = 'INSERT INTO movies (judul,rating,deskripsi,foto) values (?,?,?,?);';
            const judul = req.body.judul;
            const rating = req.body.rating;
            const deskripsi = req.body.deskripsi;
const foto = req.body.foto;
    // jalankan query
    koneksi.query(querySql, data, (err, rows, field) => {
        // error handling
        if (err) {
            return res.status(500).json({ message: 'Gagal insert data!', error: err });
        }

        // jika request berhasil
        res.status(201).json({ success: true, message: 'Berhasil insert data!' });
    });
});

