import React from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

interface Props {
  title?: string;
  description?: string;
  children: React.ReactElement | React.ReactElement[];
}

const WebApp: React.FC<Props> = ({ title, description, children }) => {
  const pageDescription =
    description ||
    "reasonably opinionated starter template for Next.js web apps";

  return (
    <>
      <Head>
        <title>{title || process.env.NEXT_PUBLIC_APP_NAME}</title>
        {process.env.NEXT_PUBLIC_APP_BUILD_TARGET !== "production" ? (
          <meta name="robots" content="noindex" />
        ) : null}
        {pageDescription && (
          <meta name="description" content={pageDescription} />
        )}
      </Head>
      <div className="flex flex-col min-h-screen relative w-full">
        <Header />
        <main className="flex-1 text-center">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default WebApp;
