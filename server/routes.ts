import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { db } from "@db";
import { services, testimonials, contactSubmissions, contactSubmissionInsertSchema } from "@shared/schema";
import { eq } from "drizzle-orm";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // API prefix
  const apiPrefix = "/api";

  // Get all services
  app.get(`${apiPrefix}/services`, async (_req: Request, res: Response) => {
    try {
      const allServices = await db.query.services.findMany({
        orderBy: (services, { asc }) => [asc(services.id)],
      });
      return res.status(200).json(allServices);
    } catch (error) {
      console.error("Error fetching services:", error);
      return res.status(500).json({ error: "Failed to fetch services" });
    }
  });

  // Get a specific service by ID
  app.get(`${apiPrefix}/services/:id`, async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ error: "Invalid service ID" });
      }

      const service = await db.query.services.findFirst({
        where: eq(services.id, id),
      });

      if (!service) {
        return res.status(404).json({ error: "Service not found" });
      }

      return res.status(200).json(service);
    } catch (error) {
      console.error("Error fetching service:", error);
      return res.status(500).json({ error: "Failed to fetch service" });
    }
  });

  // Get all testimonials
  app.get(`${apiPrefix}/testimonials`, async (_req: Request, res: Response) => {
    try {
      const allTestimonials = await db.query.testimonials.findMany({
        orderBy: (testimonials, { desc }) => [desc(testimonials.rating)],
      });
      return res.status(200).json(allTestimonials);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      return res.status(500).json({ error: "Failed to fetch testimonials" });
    }
  });

  // Handle contact form submissions
  app.post(`${apiPrefix}/contact`, async (req: Request, res: Response) => {
    try {
      const contactData = contactSubmissionInsertSchema.parse(req.body);
      
      const [newSubmission] = await db.insert(contactSubmissions)
        .values(contactData)
        .returning();
        
      // Here you could also add email notification logic
      
      return res.status(201).json({
        message: "Contact form submitted successfully",
        submission: newSubmission
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          error: "Invalid form data", 
          details: error.errors 
        });
      }
      
      console.error("Error submitting contact form:", error);
      return res.status(500).json({ error: "Failed to submit contact form" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
