const LoginSchema = require('../models/login');
const bcrypt = require('bcryptjs');
const { SignJWT, jwtVerify } = require('jose');
const JWT_SECRET = process.env.JWT_SECRET;
const secret = new TextEncoder().encode(JWT_SECRET);

class AuthController {
  async register(req, res) {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      const user = new LoginSchema({ username, password: hashedPassword });
      await user.save();
      res.status(201).send({ message: 'User registered' });
    } catch (error) {
      res.status(400).send({ error: 'Registration failed' });
    }
  }

  async login(req, res) {
    console.log(req.body);
    
    const { username, password } = req.body;

    const user = await LoginSchema.findOne({ username });
    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send({ error: 'Invalid credentials' });
    }

    const token = await new SignJWT({ id: user._id.toString() })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('1h')
      .sign(secret);

    res.send({ token });
  }

  async check(req, res) {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).send({ error: 'Unauthorized' });
    }

    try {
      const { payload } = await jwtVerify(token, secret);
      res.send({ message: 'Valid token', userId: payload.id });
    } catch {
      res.status(401).send({ error: 'Invalid token' });
    }
  }
}

module.exports = new AuthController()
