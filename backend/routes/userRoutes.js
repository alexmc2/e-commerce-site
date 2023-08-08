import express from 'express';
const router = express.Router();
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserByID,
  deleteUsers,
  updateUser,
} from '../controllers/userController.js';

router.route('/').post(registerUser).get(getUsers);
router.post('/login', authUser);
router.post('/logout', logoutUser);
router.route('/profile').get(getUserProfile).put(updateUserProfile);
router.route('/:id').get(getUserByID).delete(deleteUsers).put(updateUser);

export default router;
