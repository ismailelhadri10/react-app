const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/Auth');
const examRoutes = require('./routes/exams');
const examsRouter = require('./routes/exams');  // Should match the file name


const app = express();

app.use('/api/exams', examsRouter);

// Middleware
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/exams', examRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});