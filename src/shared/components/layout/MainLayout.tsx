import { Footer } from "@shared/components/layout/Footer.tsx";
import { Header } from "@shared/components/layout/Header.tsx";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col gap-12">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
