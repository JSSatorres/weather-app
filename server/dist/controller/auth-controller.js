"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const user_models_1 = __importDefault(require("../models/user-models"));
const generate_jwt_1 = require("../helpers/generate-jwt");
/**
 *
 * @param req
 * @param res
 * check email is im DB
 * check users is active
 * check password
 * generate JWT
 */
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield user_models_1.default.findOne({ email: email });
    if (!user) {
        return res.status(400).json({ msg: "the email / password are not corrects - email" });
    }
    if (!user.state) {
        return res.status(400).json({ msg: "the email / password are not corrects - estate = false" });
    }
    const validPassword = bcryptjs_1.default.compareSync(password, user.password);
    if (!validPassword) {
        return res.status(400).json({ msg: "the email / password are not corrects - Password" });
    }
    console.log(user.id);
    const token = yield (0, generate_jwt_1.generateJWT)(user.id);
    try {
        res.json({
            user,
            token
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: "something go wrong" });
    }
});
exports.login = login;
/*
export const getUser = async (req: Request, res: Response) => {
  const {id}=  req.params

  try {
   const user = await User.findById(id)
    if (user){
      res.json({user});
    }else{
      res.json(`the user with the ${id} doenst exits`)
    }
 
  } catch (error :any) {
    console.log(error);
    res.status(500).json({msg:"something go wrong"})
  }
 
};

export const createUser = async (req: Request, res: Response) => {

  const {name,password,email,rol} =  req.body
    
  try {
    const newUser = await User.create({name,password,email,rol})
    //encrrypt password
    const salt = bcrypt.genSaltSync(10);
    newUser.password = bcrypt.hashSync(password,salt)
    
    await newUser.save()

    res.json({newUser})

  } catch (error :any) {
    console.log(error);
    res.status(500).json({msg:"aaaa este eroror adasdad"})
  }
};

export const updateUser = async(req: Request, res: Response) => {
  const {id}=  req.params
  const { _id, password, google,email, ...rest } = req.body;

  if (password) {
    const salt = bcrypt.genSaltSync();
    rest.password = bcrypt.hashSync(password, salt);
  }
  
  const user = await User.findByIdAndUpdate(id, rest);
  
  res.json({
    msg: "put Api",
    user
  });
};

export const deleteUser = async(req: Request, res: Response) => {
  const {id}=  req.params
  const user = await User.findByIdAndUpdate(id, { state: false });
  res.json({
    msg: `delete users ${id}`
  });
}; */ 
//# sourceMappingURL=auth-controller.js.map