import { User } from "../models/user.js";

class UserService {
  static async create({ name, email, password, image }) {
    try {
      const newUser = new User({ name, email, password, image });
      return await newUser.save();
    } catch (err) {
      throw err;
    }
  }
}

export default UserService;
