import { GetStaticProps } from "next";
import Head from "next/head";
import Container from "../../components/container";
import HeroPost from "../../components/hero-post";
import Intro from "../../components/intro";
import Layout from "../../components/layout";
import MoreStories from "../../components/more-stories";
import { getAllPosts } from "../../lib/api";
import { CMS_NAME } from "../../lib/constants";

export default function Index({ allPosts, preview }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <Layout preview={preview}>
      <Head>
        <title>{`Next.js Blog Example with ${CMS_NAME}`}</title>
      </Head>
      <Container>
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.publishedDate.$date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPosts = await getAllPosts();

  return {
    props: { allPosts },
    revalidate: 10,
  };
};
