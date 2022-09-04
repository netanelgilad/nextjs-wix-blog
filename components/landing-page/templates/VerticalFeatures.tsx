import Link from "next/link";
import { VerticalFeatureRow } from "../feature/VerticalFeatureRow";
import { Section } from "../layout/Section";

const VerticalFeatures = (props: {
  featuresTitle: string;
  featuresDescription: string;
  blogFeatureTitle: string;
  blogFeatureDescription: string;
  blogFeatureImage: string;
  pricingPlansFeatureTitle: string;
  pricingPlansFeatureDescription: string;
  pricingPlansFeatureImage: string;
  bookingsFeatureTitle: string;
  bookingsFeatureDescription: string;
  bookingsFeatureImage: string;
  usersFeatureTitle: string;
  usersFeatureDescription: string;
  usersFeatureImage: string;
}) => (
  <Section title={props.featuresTitle} description={props.featuresDescription}>
    <Link href={`/blog`}>
      <a aria-label={"blog"}>
        <VerticalFeatureRow
          title={props.blogFeatureTitle}
          description={props.blogFeatureDescription}
          image={props.blogFeatureImage}
          imageAlt="First feature alt text"
        />
      </a>
    </Link>
    <Link href={`/pricing`}>
      <a aria-label={"pricing"}>
        <VerticalFeatureRow
          title={props.pricingPlansFeatureTitle}
          description={props.pricingPlansFeatureDescription}
          image={props.pricingPlansFeatureImage}
          imageAlt="Pricing Plans feature alt text"
          reverse
        />
      </a>
    </Link>
    <Link href={`/bookings`}>
      <a aria-label={"bookings"}>
        <VerticalFeatureRow
          title={props.bookingsFeatureTitle}
          description={props.bookingsFeatureDescription}
          image={props.bookingsFeatureImage}
          imageAlt="Bookings feature alt text"
        />
      </a>
    </Link>
    <Link href={`/users`}>
      <a aria-label={"users"}>
        <VerticalFeatureRow
          title={props.usersFeatureTitle}
          description={props.usersFeatureDescription}
          image={props.usersFeatureImage}
          imageAlt="Users feature alt text"
          reverse
        />
      </a>
    </Link>
  </Section>
);

export { VerticalFeatures };
