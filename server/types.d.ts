import { Request } from "express"
import { ObjectId } from "mongoose";
import { UserProp } from "./models/user-models";

export interface AuthRequest extends Request{
     user :UserProp & { _id: ObjectId; } | null,
}
