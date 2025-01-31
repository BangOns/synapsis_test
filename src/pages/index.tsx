import CardComponent from "@/components/ant_design/card";
import { ImageImport } from "@/utils/ImageImport";
import { Pagination } from "antd";

export default function Home() {
  return (
    <>
      <header className="w-full ">
        <h1 className="text-2xl font-semibold uppercase">This Blogs</h1>
      </header>
      <article className="mt-5 w-full gap-5  md:grid lg:grid-cols-3 md:grid-cols-2 flex flex-wrap justify-between ">
        <CardComponent
          src={ImageImport.ImageBlogs}
          title="asdawd"
          description="asdawdwd"
        />
        <CardComponent
          src={ImageImport.ImageBlogs}
          title="asdawd"
          description="asdawdwd"
        />
        <CardComponent
          src={ImageImport.ImageBlogs}
          title="asdawd"
          description="asdawdwd"
        />
        <CardComponent
          src={ImageImport.ImageBlogs}
          title="asdawd"
          description="asdawdwd"
        />
        <CardComponent
          src={ImageImport.ImageBlogs}
          title="asdawd"
          description="asdawdwd"
        />
        <CardComponent
          src={ImageImport.ImageBlogs}
          title="asdawd"
          description="asdawdwd"
        />
      </article>
      <section className="mt-5 w-full flex justify-center">
        <Pagination
          align="center"
          defaultCurrent={1}
          total={50}
          defaultPageSize={6}
          onChange={(page) => console.log(page)}
        />
      </section>
    </>
  );
}
