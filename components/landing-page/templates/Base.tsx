import { Meta } from "../layout/Meta";
import { AppConfig } from "../utils/AppConfig";
import { Banner } from "./Banner";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { VerticalFeatures } from "./VerticalFeatures";

const Base = (props: { homePage: any }) => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero
      title={props.homePage.title}
      description={props.homePage.description}
      callToAction={props.homePage.callToAction}
    />
    <VerticalFeatures
      featuresTitle={props.homePage.featuresTitle}
      featuresDescription={props.homePage.featuresDescription}
      blogFeatureTitle={props.homePage.blogFeatureTitle}
      blogFeatureDescription={props.homePage.blogFeatureDescription}
      blogFeatureImage={props.homePage.blogFeatureImage}
      pricingPlansFeatureTitle={props.homePage.pricingPlansFeatureTitle}
      pricingPlansFeatureDescription={props.homePage.pricingPlansFeatureDescription}
      pricingPlansFeatureImage={props.homePage.pricingPansFeatureImage}
      bookingsFeatureTitle={props.homePage.bookingsFeatureTitle}
      bookingsFeatureDescription={props.homePage.bookingsFeatureDescription}
      bookingsFeatureImage={props.homePage.bookingsFeatureImage}
      usersFeatureTitle={props.homePage.usersFeatureTitle}
      usersFeatureDescription={props.homePage.usersFeatureDescription}
      usersFeatureImage={props.homePage.usersFeatureImage}
    />
    <Banner />
    <Footer />
  </div>
);

export { Base };
