import { Router } from 'express';
import {
  registerUser,
  loginUser,
  sendVerificationCode,
  resetPassword,
  getMeRequest,
  refreshTokenController,
  logout,
} from '../controllers/auth.controller.js';
import {
  authLimiter,
  codeLimiter,
} from '../middleware/rateLimit.middleware.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
const router = Router();
router.post('/send-code', codeLimiter, sendVerificationCode);
router.post('/register', authLimiter, registerUser);
router.post('/login', authLimiter, loginUser);
router.post('/reset-password', authLimiter, resetPassword);
router.get('/me', authMiddleware, getMeRequest);
router.post('/refresh', refreshTokenController);
router.post('/logout', logout);
export default router;
