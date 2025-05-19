import { Configuration } from "@tsed/di";

@Configuration({
  mongoose: [
    {
      id: "default",
      url: "mongodb://localhost:27017/mydb",
      connectionOptions: {},
    },
  ],
})
export class MongooseConfig {}
