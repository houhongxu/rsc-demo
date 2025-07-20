const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 3001

const JSON_MAP = {
  1: { username: 'John Doe', age: 20 },
  2: { username: 'Jane Smith', age: 25 },
  3: { username: 'Mike Johnson', age: 30 },
  4: { username: 'Emily Davis', age: 22 },
  5: { username: 'David Wilson', age: 28 },
  6: { username: 'Sarah Brown', age: 24 },
  7: { username: 'Chris Taylor', age: 35 },
  8: { username: 'Lisa Anderson', age: 27 },
  9: { username: 'Tom Miller', age: 31 },
  10: { username: 'Amy Garcia', age: 23 },
  11: { username: 'James Rodriguez', age: 29 },
  12: { username: 'Mary Martinez', age: 26 },
  13: { username: 'Robert Lopez', age: 33 },
  14: { username: 'Linda Gonzalez', age: 21 },
  15: { username: 'William Wilson', age: 32 },
  16: { username: 'Jennifer Clark', age: 28 },
  17: { username: 'Michael Lewis', age: 30 },
  18: { username: 'Patricia Lee', age: 25 },
  19: { username: 'Richard Walker', age: 34 },
  20: { username: 'Susan Hall', age: 27 },
  21: { username: 'Joseph Allen', age: 29 },
  22: { username: 'Jessica Young', age: 24 },
  23: { username: 'Thomas Hernandez', age: 31 },
  24: { username: 'Nancy King', age: 26 },
  25: { username: 'Daniel Wright', age: 33 },
  26: { username: 'Betty Lopez', age: 22 },
  27: { username: 'Matthew Hill', age: 28 },
  28: { username: 'Helen Scott', age: 30 },
  29: { username: 'Anthony Green', age: 25 },
  30: { username: 'Sandra Adams', age: 27 },
  31: { username: 'Mark Baker', age: 32 },
  32: { username: 'Donna Gonzalez', age: 24 },
  33: { username: 'Steven Nelson', age: 29 },
  34: { username: 'Carol Carter', age: 26 },
  35: { username: 'Paul Mitchell', age: 31 },
  36: { username: 'Ruth Perez', age: 23 },
  37: { username: 'Andrew Roberts', age: 28 },
  38: { username: 'Sharon Turner', age: 30 },
  39: { username: 'Joshua Phillips', age: 25 },
  40: { username: 'Michelle Campbell', age: 27 },
  41: { username: 'Kenneth Parker', age: 33 },
  42: { username: 'Laura Evans', age: 22 },
  43: { username: 'Kevin Edwards', age: 29 },
  44: { username: 'Sarah Collins', age: 26 },
  45: { username: 'Brian Stewart', age: 31 },
  46: { username: 'Kimberly Sanchez', age: 24 },
  47: { username: 'George Morris', age: 28 },
  48: { username: 'Deborah Rogers', age: 30 },
  49: { username: 'Edward Reed', age: 25 },
  50: { username: 'Dorothy Cook', age: 27 },
  51: { username: 'Ronald Morgan', age: 32 },
  52: { username: 'Lisa Bell', age: 23 },
  53: { username: 'Timothy Murphy', age: 29 },
  54: { username: 'Nancy Bailey', age: 26 },
  55: { username: 'Jason Rivera', age: 31 },
  56: { username: 'Karen Cooper', age: 24 },
  57: { username: 'Jeffrey Richardson', age: 28 },
  58: { username: 'Betty Cox', age: 30 },
  59: { username: 'Ryan Howard', age: 25 },
  60: { username: 'Helen Ward', age: 27 },
  61: { username: 'Jacob Torres', age: 33 },
  62: { username: 'Sandra Peterson', age: 22 },
  63: { username: 'Gary Gray', age: 29 },
  64: { username: 'Donna Ramirez', age: 26 },
  65: { username: 'Nicholas James', age: 31 },
  66: { username: 'Carol Watson', age: 24 },
  67: { username: 'Jonathan Brooks', age: 28 },
  68: { username: 'Ruth Kelly', age: 30 },
  69: { username: 'Stephen Sanders', age: 25 },
  70: { username: 'Michelle Price', age: 27 },
  71: { username: 'Larry Bennett', age: 32 },
  72: { username: 'Laura Wood', age: 23 },
  73: { username: 'Justin Barnes', age: 29 },
  74: { username: 'Sarah Ross', age: 26 },
  75: { username: 'Scott Henderson', age: 31 },
  76: { username: 'Kimberly Coleman', age: 24 },
  77: { username: 'Brandon Jenkins', age: 28 },
  78: { username: 'Deborah Perry', age: 30 },
  79: { username: 'Benjamin Powell', age: 25 },
  80: { username: 'Dorothy Long', age: 27 },
  81: { username: 'Samuel Patterson', age: 33 },
  82: { username: 'Lisa Hughes', age: 22 },
  83: { username: 'Gregory Flores', age: 29 },
  84: { username: 'Nancy Washington', age: 26 },
  85: { username: 'Frank Butler', age: 31 },
  86: { username: 'Karen Simmons', age: 24 },
  87: { username: 'Raymond Foster', age: 28 },
  88: { username: 'Betty Gonzales', age: 30 },
  89: { username: 'Alexander Bryant', age: 25 },
  90: { username: 'Helen Alexander', age: 27 },
  91: { username: 'Patrick Russell', age: 32 },
  92: { username: 'Sandra Griffin', age: 23 },
  93: { username: 'Jack Diaz', age: 29 },
  94: { username: 'Donna Hayes', age: 26 },
  95: { username: 'Dennis Myers', age: 31 },
  96: { username: 'Carol Ford', age: 24 },
  97: { username: 'Jerry Hamilton', age: 28 },
  98: { username: 'Ruth Graham', age: 30 },
  99: { username: 'Tyler Sullivan', age: 25 },
  100: { username: 'Michelle Wallace', age: 27 },
}

app.use(cors())

app.get('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const user = JSON_MAP[id]

  if (user) {
    res.json(user)
  } else {
    res.status(404).json({ error: 'User not found' })
  }
})

// 启动服务器
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
