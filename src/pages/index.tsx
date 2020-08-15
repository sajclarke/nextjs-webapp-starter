import { NextPage } from "next";
import WebApp from "components/layout/WebApp";
import styles from "styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <WebApp>
      <div className="tpl-container">
        <div className="flex flex-row justify-between py-12">
          <div className={styles.card}>
            <p>
              Hi, this is a starter template for building{" "}
              <a href="https://nextjs.org">Next.js web apps</a>. It's
              bootstrapped with all the goodness that{" "}
              <a href="https://github.com/vercel/next.js/tree/canary/packages/create-next-app">
                create-next-app
              </a>{" "}
              gives you, complemented with{" "}
              <a href="https://javascripty.gitbook.io/next-js-webapp-starter/#the-icing-on-top">
                some icing on top
              </a>
              .{" "}
              <a href="https://javascripty.gitbook.io/next-js-webapp-starter/">
                Check out the official documentation
              </a>{" "}
              .
            </p>
          </div>

          <div className={styles.card}>
            <p>
              Build your awsome app by editing the components found in the{" "}
              <code>src/pages</code> and <code>src/components</code> folders,
              and the CSS/Sass files found in the <code>styles/</code> folder to
              suit.
            </p>
          </div>
        </div>
      </div>
    </WebApp>
  );
};

export default Home;
