import { NextFunction } from "express";
import { db } from "../db/config";
import { users } from "../db/schema";
import { Request, Response } from "express";
import { CustomError } from "lib/custom-error";

export async function getAllUsers(req: Request, res: Response, next: NextFunction) {

    try {
        const usersData = await db.select({id: users.id, name: users.name, email: users.email}).from(users);
        res.status(200).json({usersData});
    } catch (error) {
        next(new CustomError("Failed to fetch users", 500));
    }
}