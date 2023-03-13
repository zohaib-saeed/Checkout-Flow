import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center text-white">
      Home
    </div>
  );
}
