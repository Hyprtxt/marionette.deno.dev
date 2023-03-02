import { assertEquals } from "https://deno.land/std@0.178.0/testing/asserts.ts";
import { freshPuppetTestWrapper } from "https://deno.land/x/fresh_marionette@v1.0.1/mod.js";

// import { BASE_URL } from "@/utils/config.js"

const BASE_URL = Deno.env.get("BASE_URL") || "http://localhost:8000";

Deno.test(
  "Public Pages Testing",
  freshPuppetTestWrapper(async (t, page) => {
    await t.step("The homepage should work", async () => {
      const response = await page.goto(`${BASE_URL}`, {
        waitUntil: "networkidle2",
      });
      assertEquals(response.status(), 200);
    });

    await t.step("The 404 page should 404", async () => {
      const response = await page.goto(`${BASE_URL}/404`, {
        waitUntil: "networkidle2",
      });
      assertEquals(response.status(), 404);
    });

    // More steps?
  }),
);
