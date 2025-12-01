import Image from "next/image";
import Link from "next/link";
import ToggleFrontPage from "@/components/ToggleFrontPage";
import CardItems from "@/components/CardItems";
import TrustedPartners from "@/components/TrustedPartners";

export default function Home() {
  return (
    <div>
      <main className="container mx-auto px-4 py-10 max-w-7xl flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center text-[#102c4d] mb-8">
          Witamy w <strong>TaskFlow</strong>
          <br></br>
          Twoim partnerze w zarządzaniu zadaniami
        </h1>
        <Link href="/rejestracja">
          <span className="cursor-pointer mx-auto px-[1.2rem] py-[0.6rem] bg-[#102c4d] text-white font-semibold rounded-lg hover:bg-[#0d3b66] transition-colors duration-300">
            Zarejestruj się
          </span>
        </Link>
        <section className="text-center mb-12"></section>
        <ToggleFrontPage />
        <CardItems />
        <TrustedPartners />
      </main>
    </div>
  );
}
