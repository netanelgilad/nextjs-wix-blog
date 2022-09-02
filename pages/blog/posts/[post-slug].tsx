import { GetStaticPaths, GetStaticProps } from 'next'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Container from '../../../components/container'
import Header from '../../../components/header'
import Layout from '../../../components/layout'
import MoreStories from '../../../components/more-stories'
import PostBody from '../../../components/post-body'
import PostHeader from '../../../components/post-header'
import PostTitle from '../../../components/post-title'
import SectionSeparator from '../../../components/section-separator'
import Tags from '../../../components/tags'
import { getAllPostsWithSlug, getPostAndMorePosts } from '../../../lib/api'
import { CMS_NAME } from '../../../lib/constants'

export default function Post({ post, posts, preview }) {
  const router = useRouter()
  const morePosts = posts

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {`${post.title} | Next.js Blog Example with ${CMS_NAME}`}
                </title>
                <meta
                  property="og:image"
                  content={`https://static.wixstatic.com/media/${
                    post.coverImage.split("/")[3]
                  }`}
                />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.publishedDate.$date}
                author={post.author}
                categories={post.categories}
              />
              <PostBody content={post.plainContent} />
              <footer>
                {post.tags > 0 && <Tags tags={post.tags} />}
              </footer>
            </article>

            <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  const data = await getPostAndMorePosts(params['post-slug'], preview, previewData)

  return {
    props: {
      preview,
      post: data.post,
      posts: data.morePosts,
    },
    revalidate: 10,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug()

  return {
    paths: allPosts.map(({ slug }) => `/blog/posts/${slug}`) || [],
    fallback: true,
  }
}
