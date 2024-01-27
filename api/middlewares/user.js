import UserService from "../services/UserService.js";

class User {
  async register(req, res) {
    try {
      const { name, email, password, image } = req.body;
      await UserService.create({ name, email, password, image });
      res.status(200).json({
        message: "User Registered Successfully",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "error while registering the user",
      });
    }
  }
}

export const user = new User();
