import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { z } from "zod";

type TAllowedFields = "body" | "query" | "header" | "params";
type TAllSchemas = Record<TAllowedFields, z.AnyZodObject>;
type TValidation = (schemas: Partial<TAllSchemas>) => RequestHandler;

export const validation: TValidation = (schemas) => (req, res, next) => {
  let issues: z.ZodIssue[][] = [];

  Object.entries(schemas).forEach(([field, scheme]) => {
    const validation = scheme.safeParse(req[field as TAllowedFields]);

    if (!validation.success) {
      issues.push(validation.error.errors);
    }
  });

  if (issues.length !== 0) {
    res.status(StatusCodes.BAD_REQUEST).json(issues);
  }

  next();
};
