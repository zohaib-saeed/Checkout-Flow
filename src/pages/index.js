import React from "react";
import { Inter } from "next/font/google";
import SelectRoute from "@/components/CheckoutFlow/SelectRoute/Index";
import SelectVariation from "@/components/CheckoutFlow/SelectVariation/Index";
import SelectDay from "@/components/CheckoutFlow/SelectDay/Index";
import Checkout from "@/components/CheckoutFlow/Checkout/Index";
import Confirmation from "@/components/Confirmation/Index";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <React.Fragment>
      {/* <SelectRoute /> */}
      {/* <SelectVariation /> */}
      {/* <SelectDay /> */}
      {/* <Checkout /> */}
      <Confirmation />
    </React.Fragment>
  );
}
