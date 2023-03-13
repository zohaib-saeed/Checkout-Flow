import React from "react";
import { Inter } from "next/font/google";
import SelectRoute from "@/components/CheckoutFlow/SelectRoute/SelectRoute";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <React.Fragment>
      <SelectRoute />
    </React.Fragment>
  );
}
