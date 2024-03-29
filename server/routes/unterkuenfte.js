import { Router } from "express";
import {
  getUnterkuenfte,
  getUnterkunftById,
  createUnterkunft,
} from "../controllers/unterkuenfte.js";

const router = Router();

router.get("/", getUnterkuenfte);
router.get("/:id", getUnterkunftById);
router.post('/create', upload.array('bilder'), createUnterkunft);

export default router;
