import { Router } from "express";

const SubscriptionRouter = Router();

SubscriptionRouter.get("/", (req, res) => {
  res.send({ title: "Get all Subscriptions" });
});


SubscriptionRouter.get("/:id", (req, res) => {
  res.send({ title: `Get Subscription with ID: ${req.params.id}` });
});


SubscriptionRouter.post("/", (req, res) => {
  res.send({ title: "Create Subscription" });
});


SubscriptionRouter.delete("/:id", (req, res) => {
  res.send({ title: `Delete Subscription with ID: ${req.params.id}` });
});


SubscriptionRouter.put("/:id", (req, res) => {
  res.send({ title: `Update Subscription with ID: ${req.params.id}` });
});


SubscriptionRouter.get("/user/:id", (req, res) => {
  res.send({ title: `Get Subscription for User with ID: ${req.params.id}` });
});


SubscriptionRouter.get("/upcoming-renewals", (req, res) => {
  res.send({ title: `Get Upcoming Renewals` });
});


SubscriptionRouter.put("/:id/cancel", (req, res) => {
  res.send({ title: `Cancel Subscription with ID: ${req.params.id}` });
});

export default SubscriptionRouter;
