import Nav from "./Nav";

const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Nav />
      {children}
   
    </div>
  );
};

export default Page;
