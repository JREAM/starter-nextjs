import Head from 'next/head';
import Footer from './Footer';
import Nav from './Nav';

const Layout = ({ children, title }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Nav />
    <div className="page">{children}</div>
    <Footer />
  </div>
);

export default Layout;
