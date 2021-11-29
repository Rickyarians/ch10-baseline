import Head from 'next/head'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const Layout = ({children, title}) => {
    const [isLogin, setIsLogin] = useState(false)


    return (
    <div>
        <Head>
            <title>{title}</title>
        </Head>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
            <Link href="/auth/login">
                <a class="nav-item nav-link active" href="#">Login</a>
            </Link>
            <Link href="/auth/register">
                <a class="nav-item nav-link active" href="#">Register</a>
            </Link>
            <Link href="/home">
                <a class="nav-item nav-link active" href="#">Dashboard</a>
            </Link>
          
            {/* <a class="nav-item nav-link" href="#">Register</a> */}
           </div>
        </div>
        </nav>
        <div>
            {children}
        </div>
    </div>
    )
}

export default Layout