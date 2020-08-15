import React from "react";
import { LogoGithub, IosBook } from "@meronex/icons/ios";
import styles from "styles/Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className="bg-transparent text-white">
        <div className="tpl-container text-left">
          <div className="flex flex-row justify-center relative">
            <section className="flex items-center flex-wrap">
              <ul className={styles.navbar}>
                <li>
                  <a
                    href="https://github.com/owanhunte/nextjs-webapp-starter/releases/latest"
                    target="_blank"
                  >
                    <span className="inline-block rounded bg-indigo-900 text-white py-2 px-4 leading-none">
                      v{process.env.NEXT_PUBLIC_APP_VERSION}
                    </span>
                  </a>
                </li>
              </ul>
            </section>
            <div className={styles.githubStarBtn}>
              <a
                className="github-button"
                href="https://github.com/owanhunte/nextjs-webapp-starter"
                data-icon="octicon-star"
                data-size="large"
                data-show-count="true"
                aria-label="Star owanhunte/nextjs-webapp-starter on GitHub"
              >
                Star
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section className="mt-8 text-center">
        <h1 className="text-gray-800 text-4xl font-medium mb-3">
          {process.env.NEXT_PUBLIC_APP_NAME}
        </h1>
        <p className="text-xl text-gray-600 font-light">
          reasonably opinionated starter template for Next.js web apps
        </p>
        <div className="pt-8 pb-10 flex flex-row justify-center">
          <a
            href="https://github.com/owanhunte/nextjs-webapp-starter"
            className={`${styles.ctaBtn} bg-gray-800 hover:bg-black focus:bg-black`}
            target="_blank"
          >
            <LogoGithub className="w-5 h-5 mr-2" />
            <span>View on GitHub</span>
          </a>
          <a
            href="https://javascripty.gitbook.io/next-js-webapp-starter"
            className={`${styles.ctaBtn} bg-blue-700 hover:bg-blue-900 focus:bg-blue-900`}
            target="_blank"
          >
            <IosBook className="w-5 h-5 mr-2" />
            <span>View Documentation</span>
          </a>
        </div>
      </section>
    </header>
  );
};

export default Header;
