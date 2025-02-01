import MyFooter from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import { usePathname } from "next/navigation";

type AppProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: AppProps) => {
  const pathname = usePathname();
  return (
    <>
      <Head>
        <title>Nextjs Tailwindcss</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <main className="mt-9 w-full container mx-auto font-poppins max-md:px-4 mb-14 min-h-screen">
        {children}
      </main>
      <MyFooter />
    </>
  );
};

export default RootLayout;
