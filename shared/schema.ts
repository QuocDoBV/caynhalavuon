import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { relations } from "drizzle-orm";

// Users table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Services table
export const services = pgTable("services", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const servicesInsertSchema = createInsertSchema(services, {
  title: (schema) => schema.min(3, "Title must be at least 3 characters"),
  description: (schema) => schema.min(10, "Description must be at least 10 characters"),
  imageUrl: (schema) => schema.url("Image URL must be a valid URL"),
});

export type ServiceInsert = z.infer<typeof servicesInsertSchema>;
export type Service = typeof services.$inferSelect;

// Testimonials table
export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  position: text("position").notNull(),
  content: text("content").notNull(),
  rating: integer("rating").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const testimonialsInsertSchema = createInsertSchema(testimonials, {
  name: (schema) => schema.min(2, "Name must be at least 2 characters"),
  position: (schema) => schema.min(2, "Position must be at least 2 characters"),
  content: (schema) => schema.min(10, "Content must be at least 10 characters"),
  rating: (schema) => schema.min(1, "Rating must be at least 1").max(5, "Rating must be at most 5"),
});

export type TestimonialInsert = z.infer<typeof testimonialsInsertSchema>;
export type Testimonial = typeof testimonials.$inferSelect;

// Contact form submissions
export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  isContacted: boolean("is_contacted").default(false).notNull(),
});

export const contactSubmissionInsertSchema = createInsertSchema(contactSubmissions, {
  name: (schema) => schema.min(2, "Name must be at least 2 characters"),
  email: (schema) => schema.email("Email must be valid"),
  phone: (schema) => schema.min(10, "Phone must be at least 10 characters"),
  subject: (schema) => schema.min(2, "Subject must be at least 2 characters"),
  message: (schema) => schema.min(10, "Message must be at least 10 characters"),
});

export type ContactSubmissionInsert = z.infer<typeof contactSubmissionInsertSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;
