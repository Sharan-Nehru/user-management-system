import express, { Request, Response } from 'express';
import User from '../models/User';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  const users = await User.find();
  res.json(users);
});

router.get('/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  const user = await User.findById(id);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
});

router.put('/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  const { name, email, bio } = req.body;
  const user = await User.findByIdAndUpdate(id, { name, email, bio }, { new: true });
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json(user);
});

export default router;