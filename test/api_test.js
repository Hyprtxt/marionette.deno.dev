import { assertEquals } from "$std/testing/asserts.ts";
import { freshTestWrapper } from "marionette";

// import { BASE_URL } from "@/utils/config.js";
const BASE_URL = Deno.env.get("BASE_URL") || "http://localhost:8000";

Deno.test(
  "API Testing",
  freshTestWrapper(async (t) => {
    await t.step("The API joke route should work", async () => {
      const joke = await fetch(`${BASE_URL}/api/joke`, {}).then(async (res) => {
        return await res.text();
      });
      console.log(joke);
      assertEquals(true, joke.length !== 0);
    });
  }),
);
