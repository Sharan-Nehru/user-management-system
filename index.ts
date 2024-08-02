import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import auth from './routes/auth';
import users from './routes/users';

const app = express();

mongoose.connect('mongodb://localhost/user-management-system', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', auth);
app.use('/users', users);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});