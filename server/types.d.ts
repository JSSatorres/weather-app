import { Request } from "express"

export interface AuthRequest extends Request{
     uid :string
}
