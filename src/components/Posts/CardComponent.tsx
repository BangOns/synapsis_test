import { Pagination } from "antd";
import React, { Fragment, useState } from "react";
import CardPosts from "../ant_design/card-posts";
import { ImageImport } from "@/utils/ImageImport";
import { useQuery } from "@tanstack/react-query";
import { getPostAll } from "@/lib/react-query/posts";

export const CardComponent = () => {
  const [currentPage, currentPageSet] = useState(1);
  const { data, isLoading } = useQuery({
    queryKey: ["posts", currentPage],
    queryFn: ({ queryKey }) => getPostAll(queryKey[1]),
  });
  return (
    <Fragment>
      <article className="mt-5 w-full gap-5  md:grid lg:grid-cols-3 md:grid-cols-2 flex flex-wrap justify-between ">
        {data?.map((items: any, index: any) => (
          <CardPosts
            data={items}
            loading={isLoading}
            key={index}
            src={ImageImport.Blogs}
            title={items.title}
            description={items.body}
          />
        ))}
      </article>
      <section className="mt-5 w-full flex justify-center">
        <Pagination
          align="center"
          defaultCurrent={currentPage}
          total={100}
          onChange={(page) => currentPageSet(page)}
        />
      </section>
    </Fragment>
  );
};
