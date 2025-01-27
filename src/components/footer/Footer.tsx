import { GithubLogo, Globe, LinkedinLogo } from "@phosphor-icons/react";

function Footer() {
  return (
    <>
      <footer className="footer footer-center bg-base-100 text-base-content rounded p-6">
        <nav className="grid grid-flow-col gap-4">
          <a href="/" className="link link-hover">
          Placeholder
          </a>
          <a href="" className="link link-hover">
          Placeholder
          </a>
          <a href="" className="link link-hover">
          Placeholder
          </a>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://linkedin.com/in/czagiacomo/" target="_blank">
              <LinkedinLogo size={36} weight="regular" />
            </a>
            <a href="https://github.com/czagiacomo" target="_blank">
              <GithubLogo size={36} weight="regular" />
            </a>
            <a href="https://portfolio-beta-six-46.vercel.app" target="_blank">
              <Globe size={36} weight="regular" />
            </a>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            Catharina Zagiacomo
          </p>
        </aside>
      </footer>
    </>
  );
}

export default Footer;
