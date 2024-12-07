import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div
        className={cn("layout flex justify-between text-center", "w-full p-4")}
      >
        <p className="w-full text-base">
          © 2024,{" "}
          <Link href="http://ihsanmuh.my.id/">
            <span className="hover:underline hover:underline-offset-4">Muhammad Ihsan</span>
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
