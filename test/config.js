// import { BASE_URL, DENO_ENV } from "@/utils/config.js"
const DENO_ENV = Deno.env.get("DENO_ENV") || "development";
export const BASE_URL = Deno.env.get("BASE_URL") || "http://localhost:8000";

export const puppet_config = DENO_ENV === "development"
  ? { headless: false, defaultViewport: null }
  : { headless: true };
