// import 'bootstrap/dist/css/bootstrap.css'; // Add this line
import '../styles/globals.css'
import Router from "next/router";
import Login from './auth/login';
import { useRouter } from 'next/router';
import { route } from 'next/dist/server/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  let token = "";
  let userInfo = "";
  let expiresAt = "";

  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
    userInfo = localStorage.getItem("userInfo");
    expiresAt = localStorage.getItem("expiresAt");
  }


  
  if(token) {
    console.log('jalan')
    return <Component {...pageProps} />
  } else {
    return <Login/>
  }
  
}

export default MyApp
