import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import { getCookie } from "../src/utils/authen";
import AuthenticationProvider from "../src/utils/context";
import UserLayout from "../src/components/Layout/user";
import { useRouter } from 'next/router';
import Navbar from "../src/components/Navbar/navbar"
import MenuLayout from '../src/components/Layout/menujob';


function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const haveCookie = getCookie("login");

  const ConditionLayout = () => {
    if (router.pathname === '/user') {
      return <Navbar> <Component {...pageProps} /></Navbar>
    }
    if (router.pathname === '/user/search') {
      return <Navbar> <Component {...pageProps} /></Navbar>
    }
    if (router.pathname === '/user/myjob') {
      return <Navbar> <Component {...pageProps} /></Navbar>
    }
    if (router.pathname === '/user/job') {
      return <Navbar> <Component {...pageProps} /></Navbar>
    }

    return <UserLayout>
      <Component {...pageProps} />
    </UserLayout>
    
  }
 
  return (
    <AuthenticationProvider>
      {haveCookie ? (
        <ConditionLayout />

      ) : (

        <Component {...pageProps} />
      )}
    </AuthenticationProvider>

  )
}

export default MyApp;
