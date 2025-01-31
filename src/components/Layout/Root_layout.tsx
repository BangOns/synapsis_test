import MyFooter from "@/components/Footer";
import Navbar from "@/components/Navbar";

type AppProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: AppProps) => {
  return (
    <>
      <Navbar />
      <main className="mt-9 w-full container mx-auto font-poppins max-md:px-4 mb-14 min-h-screen">
        {children}
      </main>
      <MyFooter />
    </>
  );
};

export default RootLayout;
