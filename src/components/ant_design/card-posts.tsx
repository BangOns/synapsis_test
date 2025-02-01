import { Card } from "antd";
import { StaticImageData } from "next/image";
import { Image } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
const { Meta } = Card;
type CardComponentProps = {
  title: string;
  description: string;
  src: StaticImageData;
  loading: boolean;
  data: {
    id?: string;
  };
};
const CardPosts = (props: CardComponentProps) => {
  const navigate = useRouter();
  return (
    <Card
      loading={props.loading}
      hoverable={!props.loading}
      className="w-full overflow-hidden"
      cover={
        !props.loading && (
          <Image
            alt={props.title}
            src={props.src.src}
            width={500}
            height={200}
            style={{
              width: "100%",
              objectFit: "cover",
            }}
            preview={false}
            className="w-full object-cover"
          />
        )
      }
      onClick={() =>
        !props.loading && navigate.push(`/posts/${props.data?.id}`)
      }
    >
      <Meta title={props.title} description={props.description} />
    </Card>
  );
};
export default CardPosts;
