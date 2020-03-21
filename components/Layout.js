import Head from 'next/head';
import Footer from './Footer';
import Nav from './Nav';

export default ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <Nav />
    </header>
    <section className="wrapper">{children}</section>
    <Footer />
  </div>
);
