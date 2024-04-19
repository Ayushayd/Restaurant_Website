import express from 'express'
import cors from 'cors'
import { sendReservation } from "../controller/reservation.js"

const router = express.Router();
router.use(cors({
    origin: process.env.FRONTEND_URL
    // origin: 'http://localhost:5173'
}))
router.post("/send", sendReservation);

export default router;