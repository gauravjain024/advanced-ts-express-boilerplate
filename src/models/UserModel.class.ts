import { Name, Property, Required } from "@tsed/schema";

export class UserModel {
  @Required()
  @Property()
  @Name("username")
  public username: string;

  @Required()
  @Property()
  @Name("age")
  public age: number;
}