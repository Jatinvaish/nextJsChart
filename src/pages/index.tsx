import Dashboard from "@/pages/dashboard";
import Login from "@/components/Login";
import { useSession } from "next-auth/react";
import scss from "../components/Layout/Layout.module.scss";
import React from "react";
// React.Fc == functional component
const Home = () => {
  const { data: session } = useSession();

  return (
    <main className={scss.main}>
      {session && <Dashboard />}
      {!session && <Login />}
    </main>
  );
};

export default Home;
