// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { apiKeyAuthorizationStrategy, createClient } from "@wix/sdk";
import {data} from "@wix/data-backend-public-sdk-poc";

export default async function handler(req, res) {  
  const client = createClient({ data }).withAuth(
    apiKeyAuthorizationStrategy(
      process.env.WIX_API_KEY,
      process.env.WIX_SITE_ID
    )
  );

  const response = await client.data.query({
    collectionName: "Blog/Posts",
  });

  const post = response.items[0];

  
  // res.status(200).json(response.items);
  res.status(200).json(post.richContent);
}
