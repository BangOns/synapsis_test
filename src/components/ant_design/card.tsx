import { Card } from "antd";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
const { Meta } = Card;
type CardComponentProps = {
  title: string;
  description: string;
  src: StaticImageData;
};
const CardComponent = (props: CardComponentProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useRouter();
  return (
    <Card
      loading={loading}
      hoverable={!loading}
      className="w-full"
      cover={
        !loading && (
          <Image alt={props.title} src={props.src} width={600} height={600} />
        )
      }
      onClick={() => !loading && navigate.push("/blog/asdas")}
    >
      <Meta title={props.title} description={props.description} />
    </Card>
  );
};
export default CardComponent;
