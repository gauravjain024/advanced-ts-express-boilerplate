import { Controller } from "@tsed/di";
import { Get } from "@tsed/schema";
import { UserService } from "src/services/UserService.class";

@Controller("/user")
export class UserController {
  constructor(private userService: UserService) {}

  @Get("/")
  public async getUserDetails() {
    return await this.userService.getUser();
  }

  @Get("/:id")
  public async getUserbyId(id: string) {
    return await this.userService.getUserById(id);
  }
}
