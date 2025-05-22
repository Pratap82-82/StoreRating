const jwt = require('jsonwebtoken');


const token = jwt.sign(
  { id: user.id, role: user.role }, 
  process.env.JWT_SECRET,
  { expiresIn: '1h' }
);

res.json({ token, role: user.role });
