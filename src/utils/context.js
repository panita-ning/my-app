import { useRouter } from "next/router";
import { useEffect } from "react";
import { getCookie } from "./authen";
const AuthenticationProvider = (props) => {
  const router = useRouter();

  useEffect(() => {
    const haveCookie = getCookie("login");
    if (!haveCookie) router.push("/login");
  }, []);
  return <>{props.children}</>;
};

export default AuthenticationProvider;