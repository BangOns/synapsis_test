import { ImageImport } from "@/utils/ImageImport";
import { Image } from "antd";
import React from "react";

export const CommentPosts = (data: any) => {
  return (
    <section className="w-full">
      <figure className="flex gap-4 items-start ">
        <Image
          alt="profile"
          src={ImageImport.Profile.src}
          width={30}
          height={30}
          preview={false}
          className="rounded-full size-7"
        />
        <figcaption className="text-sm">
          <p>{data.data.name}</p>
          <p className="text-xs text-slate-400">{data.data.email}</p>
        </figcaption>
      </figure>
      <article className="mt-2 w-full md:w-4/6">
        <p className="text-xs md:text-sm pr-4">{data.data.body}</p>
      </article>
    </section>
  );
};
