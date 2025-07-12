const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/api/diet-plan', (req, res) => {
  const { name, age, weight, goal } = req.body;
  let plan = '';

  switch (goal) {
    case 'weight-loss':
      plan = 'Low calorie diet with high protein and cardio exercises.';
      break;
    case 'weight-gain':
      plan = 'High protein and calorie surplus diet with strength training.';
      break;
    case 'maintain':
      plan = 'Balanced diet with regular moderate exercise.';
      break;
    default:
      plan = 'No specific goal provided.';
  }

  res.json({ plan });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});