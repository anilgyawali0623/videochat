import { Router } from "express";
import { protectRoute } from "../middlewares/auth.middleware.js";
import {
  acceptFriendRequest,
  getFriendRequests,
  getMyFriends,
  getRecommendUser,
  getOutGoingFriendReqs,
  sendFriendRequest,
} from "../controllers/user.controller.js";
const router = Router();
router.use(protectRoute);

router.get("/", getRecommendUser);
router.get("/friends", getMyFriends);
router.get("/friend-request/:id", sendFriendRequest);
router.put("/friend-request/:id/accept", acceptFriendRequest);
router.get("/friend-requests", getFriendRequests);
router.get("/outgoing-friend-requests", getOutGoingFriendReqs);
export default router;
