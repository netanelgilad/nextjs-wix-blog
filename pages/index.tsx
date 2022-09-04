import { GetStaticProps } from "next";
import { Base } from "../components/landing-page/templates/Base";
import { getHomePageContent } from "../lib/api";

const Index = (props: {homePage: any }) => <Base homePage={props.homePage} />;

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const homePage = await getHomePageContent();

  return {
    props: { homePage },
    revalidate: 10,
  };
}