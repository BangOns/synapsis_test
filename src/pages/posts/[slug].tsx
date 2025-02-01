import { ImageImport } from "@/utils/ImageImport";
import { Button, Form, FormProps, Input } from "antd";
import { Image } from "antd";
import { useRouter } from "next/router";
import { LeftOutlined } from "@ant-design/icons";
import Link from "next/link";
import CommentComponent from "@/components/Posts/CommentComponent";
import { useQuery } from "@tanstack/react-query";
import { getPostDetail } from "@/lib/react-query/posts";
type FieldType = {
  name: string;
  email: string;
  body: string;
};

const PageBlogDetails = () => {
  const pathName = useRouter();
  const { data } = useQuery({
    queryKey: ["detail-post", pathName?.query?.slug],
    queryFn: ({ queryKey }) => getPostDetail(queryKey[1] as never),
  });

  return (
    <article className="w-full ">
      <Link href={"/"} className="w-full flex gap-2 items-center text-sm">
        <LeftOutlined /> Back
      </Link>
      <figcaption className="my-4">
        <h2 className="font-semibold">{data?.title}</h2>
      </figcaption>
      <figure className="w-full h-auto  relative flex justify-center ">
        <Image
          alt="Image Blogs"
          src={ImageImport.Blogs.src}
          width={800}
          className="w-full h-full object-cover rounded-md  "
          height={300}
          preview={false}
        />
      </figure>
      <section className="w-full mt-6">
        <article className="w-full space-y-4 ">
          <h3 className="font-semibold">Description</h3>
          <p className="text-sm md:text-base">{data?.body}</p>
        </article>
        <CommentComponent id={data?.id} />
      </section>
    </article>
  );
};
export default PageBlogDetails;
