import { Service } from "@tsed/di";
import { UserModel } from "src/models/UserModel.class.js";

@Service()
export class UserService {
  constructor() {}

  public async getUser(): Promise<UserModel> {
    /** Business logic here */
    return Promise.resolve({
      username: "Gaurav",
      age: 20,
    });
  }

  public async getUserById(id: string): Promise<UserModel> {
    /** Business logic here */
    return Promise.resolve({
      username: "Gaurav",
      age: 20,
    });
  }
}