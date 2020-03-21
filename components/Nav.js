import Link from 'next/link';
import React from 'react';

export default () => {
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
