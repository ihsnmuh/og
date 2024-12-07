import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <section className="layout w-full h-[calc(100dvh-56px)] flex justify-center items-center">
      <div className="flex justify-center items-center">
        <div className="flex flex-col gap-4">
          <div className="text-center">
            <h1 className="h1 mb-2">Open Graph Generator</h1>
            <p className="text-base">
              Create using {" "}
              <Link className="font-semibold hover:underline hover:underline-offset-4" href={"https://vercel.com/docs/functions/og-image-generation"}>
                @vercel/og
              </Link>
            </p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <Button asChild className="cursor-newtab">
              <Link href="https://github.com/ihsnmuh/og" className="cursor-newtab">See Repository</Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/create">Let's Try</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
