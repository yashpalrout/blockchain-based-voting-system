const express = require('express');
const path = require('path');
const uploadRoute = require('./routes/upload');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', uploadRoute);

app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
