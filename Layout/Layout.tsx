import useLoading from "../Hooks/useLoading";
import Spinner from "../Components/UI/Spinner";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const loading = useLoading();

  return loading ? (
    <Spinner />
  ) : (
    <>
      <main className="">{children}</main>
    </>
  );
};

export default Layout;
