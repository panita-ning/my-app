import { useRouter } from "next/router";
import { useEffect } from "react";
import { getCookie } from "./authen";
const AuthenticationProvider = (props) => {
  const router = useRouter();

  useEffect(() => {
    const haveCookie = getCookie("");
    if (!haveCookie) router.push("");
  }, []);
  return <>{props.children}</>;
};

export default AuthenticationProvider;