// Import necessary modules
import express from 'express';
import { createListing } from '../controllers/listing.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

// Create an Express router
const router = express.Router();

// Define a route for creating a listing
router.post('/create', verifyToken, createListing);

// Export the router
export default router;
