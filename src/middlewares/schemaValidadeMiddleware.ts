import { Request, Response, NextFunction } from "express";
import { wrongSchemaError } from "../utils/errorUtils";

export function schemaValidate(schema: any) {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) throw wrongSchemaError(error.details[0].message);
    next();
  };
}
