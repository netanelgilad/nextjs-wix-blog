import { apiKeyAuthorizationStrategy, createClient } from "@wix/sdk";
import { GetStaticProps } from "next";
import { Base } from "../components/landing-page/templates/Base";
import { data } from "@wix/data-backend-public-sdk-poc";

const Index = (props: {homePage: any }) => <Base homePage={props.homePage} />;

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient({ data }).withAuth(
    apiKeyAuthorizationStrategy(
      process.env.WIX_API_KEY,
      process.env.WIX_SITE_ID
    )
  );

  const homePage = (await client.data.query({
    collectionName: "HomePage",
  })).items[0];

  return {
    props: { homePage },
    revalidate: 10,
  };
}