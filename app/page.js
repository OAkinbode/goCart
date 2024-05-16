import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-teal-100 w-full flex flex-col justify-center items-center">
      <Header />
      <div className="bg-gray-50 w-4/5 flex flex-col justify-center items-center py-2 min-h-screen">
        Hello Again. Welcome to wedbev class. I am changing a bunch of things to
        demonstrate ci/cd. Continous integration, continous deployment.
      </div>
      <Footer />
    </main>
  );
}
