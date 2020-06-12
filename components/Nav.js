import Link from 'next/link';
import React from 'react';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="container">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
