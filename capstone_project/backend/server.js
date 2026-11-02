
const express = require('express');
const app = express();

const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    project: 'AccessHub',
    description: 'Secure Retail User Management System',
    status: 'Backend server running',
    sprint: 3
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    service: 'AccessHub API'
  });
});

app.listen(PORT, () => {
  console.log(`AccessHub server running at http://localhost:${PORT}`);
});
