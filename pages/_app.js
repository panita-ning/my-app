
import 'antd/dist/antd.css';
import { getCookie } from "../src/utils/authen";
import AuthenticationProvider from "../src/utils/context";
import UserLayout from "../src/components/Layout/user";
import { useRouter } from 'next/router';
import Navbar from "../src/components/Navbar/navbar"
import Navbarcompany from '../src/components/Navbar/companynavbar';
import Navbaradmin from '../src/components/Navbar/adminnavbar';

function MyApp({ Component, pageProps }) {
  const router = useRouter()


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
    if (router.pathname === '/user/history') {
      return <Navbar> <Component {...pageProps} /></Navbar>
    }
    if (router.pathname === '/user/setting') {
      return <Navbar> <Component {...pageProps} /></Navbar>
    }
    if (router.pathname === '/user/jobdata') {
      return <Navbar> <Component {...pageProps} /></Navbar>
    }
    if (router.pathname === '/user/interested_job') {
      return <Navbar> <Component {...pageProps} /></Navbar>
    }
    if (router.pathname === '/company/registor') {
      return <Navbar> <Component {...pageProps} /></Navbar>
    }
    if (router.pathname === '/registor') {
      return <Navbar> <Component {...pageProps} /></Navbar>
    }
    if (router.pathname === '/admin/company') {
      return <Navbar> <Component {...pageProps} /></Navbar>
    }
    if (router.pathname === '/admin/company_edit') {
      return <Navbar> <Component {...pageProps} /></Navbar>
    }
    if (router.pathname === '/admin/user') {
      return <Navbar> <Component {...pageProps} /></Navbar>
    }
    if (router.pathname === '/admin/user_edit') {
      return <Navbar> <Component {...pageProps} /></Navbar>
    }
    if (router.pathname === '/admin/follow') {
      return <Navbar> <Component {...pageProps} /></Navbar>
    }
    if (router.pathname === '/admin/follow_show') {
      return <Navbar> <Component {...pageProps} /></Navbar>
    }


    return <UserLayout>
      <Component {...pageProps} />
    </UserLayout>

  }
const ConditionLayouts = () => {
  const role = 1;

    if (role == 1) {
      return (
      
          <ConditionLayout>
          <Component {...pageProps} />
          </ConditionLayout>
        
      )
    }

    if (role == 2) {
      return (
        <Navbarcompany>
          <Component {...pageProps} />
        </Navbarcompany>
      )
    }

    if (role == 3) {
      return (
        <Navbaradmin>
          <Component {...pageProps} />
        </Navbaradmin>
      );
    }
}

  

  return (
    <AuthenticationProvider>
      <ConditionLayouts />
    </AuthenticationProvider>

  )
}

 

export default MyApp;
