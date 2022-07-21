import { Request, Response } from "express";

export const getUsers = (req: Request, res: Response) => {
  res.json({
    msg: "get users",
  });
};

export const getUser = (req: Request, res: Response) => {
  const {id}=  req.params
  res.json({
    msg: "get user",
    id
  });
};

export const createUser = (req: Request, res: Response) => {
  const {body}=  req
  const {id}=  req.params
  res.json({
    msg: "create users",
    body
  });
};

export const updateUser = (req: Request, res: Response) => {
  const {id}=  req.params
  res.json({
    msg: "update users",
    id
  });
};

export const deleteUser = (req: Request, res: Response) => {
  const {id}=  req.params
  res.json({
    msg: "delete users",
    id
  });
};