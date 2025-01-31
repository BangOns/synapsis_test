import { ImageImport } from "@/utils/ImageImport";
import Image from "next/image";
import { useRouter } from "next/router";

const PageBlogDetails = () => {
  const pathName = useRouter();
  return (
    <article className="w-full ">
      <header className="w-full h-96 relative ">
        <Image
          alt="Image Blogs"
          src={ImageImport.ImageBlogs}
          width={700}
          className="w-full h-full object-cover rounded-md "
          height={700}
        />
      </header>
      <section className="w-full mt-6">
        <article className="w-full space-y-7">
          <h2>Title</h2>
          <p>Description</p>
        </article>
      </section>
    </article>
  );
};
export default PageBlogDetails;
