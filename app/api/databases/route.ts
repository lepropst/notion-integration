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

export async function GET() {
  return Response.json({
    databses: await notion.search({
      filter: { property: "object", value: "database" },
    }),
  });
}
