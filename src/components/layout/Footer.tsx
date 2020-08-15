import React from "react";
import { IosHeart } from "@meronex/icons/ios";
import styles from "styles/Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <div className="tpl-container pb-6">
      <section className={styles.footerWrap}>
        <footer className={styles.footer}>
          <div>
            <span>
              Made with <IosHeart className="inline-block" />.{" "}
              <a
                href="https://github.com/owanhunte/nextjs-webapp-starter/graphs/contributors"
                target="_blank"
                rel="noopener noreferrer"
              >
                See contributors
              </a>
            </span>
          </div>
          <div>
            <span>
              Next.js is{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                made by{" "}
                <img
                  src="/vercel.svg"
                  alt="Vercel Logo"
                  className={styles.vercelLogo}
                />
              </a>
            </span>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Footer;
