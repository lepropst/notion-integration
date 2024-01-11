"use server";
import { Client } from "@notionhq/client";

const TOKEN = process.env.NOTION_TOKEN;

const notion = new Client({ auth: TOKEN });

/* 
---------------------------------------------------------------------------
*/

/**
 * Resources:
 * - Create a database endpoint (notion.databases.create(): https://developers.notion.com/reference/create-a-database)
 * - Create a page endpoint (notion.pages.create(): https://developers.notion.com/reference/post-page)
 * - Working with databases guide: https://developers.notion.com/docs/working-with-databases
 */

export async function GET(id: string | undefined) {
  console.log(id);
  console.log("ROUITE GET");
  return await notion.search({
    query: id,
    filter: { value: "database", property: "object" },
  });
}
