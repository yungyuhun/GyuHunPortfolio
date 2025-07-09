import WhoAmISection from "@/components/WhoAmI";
import Header from "../components/Header";
import Main from "../components/Main";
import MyWork from "@/components/MyWork";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen overflow-hidden bg-primary">
      <Header />
      <Main />
      <WhoAmISection />
      <MyWork />
      <Footer />
    </main>
  );
}
