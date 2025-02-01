import Blogs from "@/assets/img/img-blogs.jpeg";
import Profile from "@/assets/img/img-profile.jpg";
import { StaticImageData } from "next/image";

type ImageImportType = {
  Blogs: StaticImageData;
  Profile: StaticImageData;
};

export const ImageImport: ImageImportType = {
  Blogs,
  Profile,
};
