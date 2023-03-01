import useLoading from "../Hooks/useLoading";
import Spinner from "../Components/UI/Spinner";
import Navbar from "Components/Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const loading = useLoading();

  return loading ? (
    <Spinner />
  ) : (
    <>
      <Navbar />
      <main className="">{children}</main>
    </>
  );
};

export default Layout;
