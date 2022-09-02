import { apiKeyAuthorizationStrategy, createClient } from "@wix/sdk";
import { data } from "@wix/data-backend-public-sdk-poc";

const API_URL = process.env.WORDPRESS_API_URL;

async function fetchAPI(query = "", { variables }: Record<string, any> = {}) {
  const headers = { "Content-Type": "application/json" };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      "Authorization"
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  // WPGraphQL Plugin must be enabled
  const res = await fetch(API_URL, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getPreviewPost(id, idType = "DATABASE_ID") {
  const data = await fetchAPI(
    `
    query PreviewPost($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        databaseId
        slug
        status
      }
    }`,
    {
      variables: { id, idType },
    }
  );
  return data.post;
}

export async function getAllPostsWithSlug() {
  return getAllPosts();
}

export async function getAllPosts() {
  const client = createClient({ data }).withAuth(
    apiKeyAuthorizationStrategy(
      process.env.WIX_API_KEY,
      process.env.WIX_SITE_ID
    )
  );

  return (
    await client.data.query({
      collectionName: "Blog/Posts",
      includeReferencedItems: ["author"],
    })
  ).items.map(x => JSON.parse(JSON.stringify(x)));
}

export async function getPostAndMorePosts(slug, preview, previewData) {
  const allPosts = await getAllPosts();
  const post = allPosts.find((post) => post.slug === slug);
  const morePosts = allPosts.filter((post) => post.slug !== slug);
  return {
    post,
    morePosts,
  };
}
