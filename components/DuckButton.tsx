import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { GiDuck } from "react-icons/gi";
import { FaArrowLeft } from "react-icons/fa";

export default function DuckButton() {
  const [isDuckPage, setIsDuckPage] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsDuckPage(window.location.pathname === '/duck');
    }
  }, []);

  return (
    <Link href={isDuckPage ? "/" : "/duck"}>
      <button
        className="fixed top-4 left-4 bg-yellow-500 bg-opacity-75 text-white px-4 py-2 rounded-full shadow-lg hover:bg-yellow-600 transition flex items-center gap-2"
      >
        {isDuckPage ? <FaArrowLeft /> : <GiDuck />}
        {isDuckPage ? "Return" : "View!"}
      </button>
    </Link>
  );
}
