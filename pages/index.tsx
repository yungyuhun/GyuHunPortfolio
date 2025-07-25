import dynamic from "next/dynamic";

const Header = dynamic(() => import("../components/Header"), { ssr: false });
const Main = dynamic(() => import("../components/Main"), { ssr: false });
const WhoAmISection = dynamic(() => import("@/components/WhoAmI"), {
  ssr: false,
});
const MyWork = dynamic(() => import("@/components/MyWork"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

export default function Home() {
  return (
    <div
      className="relative w-full min-h-screen overflow-hidden bg-primary"
    >
      <Header />
      <Main />
      <WhoAmISection />
      <MyWork />
      <Footer />
    </div>
  );
}
