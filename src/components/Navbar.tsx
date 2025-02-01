import Link from "next/link";
import { CloseOutlined, MenuOutlined, SketchOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useState } from "react";
type itemsNavbar = {
  label: string;
  path: string;
}[];
const items: itemsNavbar = [
  {
    label: "Home",
    path: "/",
  },

  {
    label: "User",
    path: "/user",
  },
];
export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="w-full  shadow-lg p-3 md:p-5 font-poppins ">
      <div className="container mx-auto flex items-center justify-between">
        <section className="md:basis-1/2 w-full flex gap-2  ">
          <SketchOutlined className="text-base md:text-2xl" />
          <h1 className="text-base md:text-2xl font-semibold">MyBlog</h1>
        </section>
        <nav className="md:block hidden basis-1/2 w-full">
          <ul className="flex  justify-end gap-5">
            {items.map((item, index) => (
              <li key={index}>
                <Link href={item.path} className="hover:text-blue-500">
                  <p>{item.label}</p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Button
          type="text"
          className="md:hidden block"
          size="small"
          onClick={() => setShowMenu(true)}
        >
          <MenuOutlined className="text-base" />
        </Button>
      </div>
      <section
        className={` z-10 fixed md:hidden top-0 left-0 p-4 w-full h-screen bg-white transition-all duration-300 ease-in-out ${
          showMenu ? "translate-x-0" : "-translate-x-full "
        }`}
      >
        <header className="w-full flex justify-end">
          <Button type="text" size="small" onClick={() => setShowMenu(false)}>
            <CloseOutlined className="text-lg" />
          </Button>
        </header>
        <ul className="flex flex-col gap-5">
          {items.map((item, index) => (
            <li key={index}>
              <Link href={item.path} className="hover:text-blue-500">
                <p>{item.label}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </header>
  );
};
export default Navbar;
