const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '..', 'public', 'candidatePhoto'));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

router.post('/upload', upload.single('image'), (req, res) => {
  const { details } = req.body;
  const candidateDetails = JSON.parse(details);

  // Save candidate details to a JSON file
  const detailsPath = path.join(__dirname, '..', 'public', 'candidateDetails.json');
  fs.readFile(detailsPath, (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Error reading details file' });
    }

    let candidates = [];
    if (data.length > 0) {
      candidates = JSON.parse(data);
    }

    candidates.push({
      ...candidateDetails,
      imagePath: `/candidatePhoto/${req.file.filename}`,
    });

    fs.writeFile(detailsPath, JSON.stringify(candidates, null, 2), (writeErr) => {
      if (writeErr) {
        return res.status(500).json({ error: 'Error writing details file' });
      }

      res.status(200).json({ message: 'Candidate details saved successfully' });
    });
  });
});

module.exports = router;
