import className from "classnames";
import Image from "next/image";
import { useRouter } from "next/router";

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    "mt-20",
    "flex",
    "flex-wrap",
    "items-center",
    {
      "flex-row-reverse": props.reverse,
    }
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full sm:w-1/2 text-center sm:px-6">
        <h3 className="text-3xl text-gray-900 font-semibold">{props.title}</h3>
        <div
          className="mt-6 text-xl leading-9"
          dangerouslySetInnerHTML={{ __html: props.description }}
        ></div>
      </div>

      <div className="w-full sm:w-1/2 p-6">
        <Image src={`https://static.wixstatic.com/media/${
        props.image.split("/")[3]
      }`} alt={props.imageAlt} width={2000}
      height={1000} />
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
