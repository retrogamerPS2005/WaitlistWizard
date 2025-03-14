import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/waitlist", async (req, res) => {
    try {
      const parsedData = insertWaitlistSchema.safeParse(req.body);
      
      if (!parsedData.success) {
        return res.status(400).json({
          message: fromZodError(parsedData.error).message,
        });
      }

      const isRegistered = await storage.isEmailRegistered(parsedData.data.email);
      if (isRegistered) {
        return res.status(400).json({
          message: "This email is already registered",
        });
      }

      const entry = await storage.addToWaitlist(parsedData.data);
      res.status(201).json(entry);
    } catch (err) {
      res.status(500).json({
        message: "Failed to add to waitlist",
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
