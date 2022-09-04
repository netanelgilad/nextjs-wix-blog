import { apiKeyAuthorizationStrategy, createClient } from "@wix/sdk";
import { data } from "@wix/data-backend-public-sdk-poc";

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

export async function getHomePageContent() {
  const client = createClient({ data }).withAuth(
    apiKeyAuthorizationStrategy(
      process.env.WIX_API_KEY,
      process.env.WIX_SITE_ID
    )
  );

  return (await client.data.query({
    collectionName: "HomePage",
  })).items[0];
}