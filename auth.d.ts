import 'next-auth';
import { Role } from './types/authTypes';
import type { NextComponentType, NextPageContext } from "next"
import type { Session } from "next-auth"
import type { Router } from "next/router"

declare module 'next-auth' {
  interface User {
    _id: string;
    name: string;
    email: string;
    password: string;
    avatar: { public_id: string; url: string };
    role: Role;
  }

  interface Session {
    user: User;
  }
}

declare module "next/app" {
  type AppProps<P = Record<string, unknown>> = {
    Component: NextComponentType<NextPageContext, any, P>
    router: Router
    __N_SSG?: boolean
    __N_SSP?: boolean
    pageProps: P & {
      /** Initial session passed in from `getServerSideProps` or `getInitialProps` */
      session?: Session
    }
  }
}
