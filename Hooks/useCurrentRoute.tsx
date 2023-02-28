import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useCurrentRoute = () => {
  const [Title, setTitle] = useState("");
  const route = useRouter();

  useEffect(() => {
    if (route.pathname == "/") {
      setTitle("Home");
    } else {
      let title = route.pathname.slice(1).toString();
      setTitle(title);
    }
  }, [route.pathname]);

  return `Chalet | ${Title}`;
};

export default useCurrentRoute;
