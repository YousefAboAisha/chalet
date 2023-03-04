import useLoading from "../Hooks/useLoading";
import Spinner from "../Components/UI/Spinner";
import Navbar from "Components/Navbar";
import Footer from "Components/Footer";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const loading = useLoading();

  return loading ? (
    <Spinner />
  ) : (
    <div>
      <Navbar />
      <main className="min-h-[800px]">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
