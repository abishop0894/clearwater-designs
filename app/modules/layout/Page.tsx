import Footer from "./Footer";
import Nav from "./Nav";

const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="overflow-x-hidden overflow-y-hidden">
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Page;
