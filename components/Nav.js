import Link from 'next/link';
import React from 'react';

const Nav = () => {
  return (
    <nav className="nav">
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  );
};

export default Nav;
