import { createHandler, Get, Param, Req } from "next-api-decorators";
import type { NextApiRequest } from "next";

class HelloHandler {
  @Get("/:name")
  helloWithParams(@Param("name") name: string) {
    return {
      message: `Hello ${name}!`,
    };
  }

  @Get()
  hello() {
    return {
      message: "Hello World (Try using /api/hello/yourname)",
    };
  }
}

export default createHandler(HelloHandler);
