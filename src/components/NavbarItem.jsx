"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

function NavbarItem({title,param}) {
    const searchParams = useSearchParams();
    const genre = searchParams.get("genre");
  return (
    <div className="">
        <Link className={`hover:text-amber-600 font-semibold ${genre === param ? "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg" : ""}`} href={`/?genre=${param}`}>{title}</Link>
    </div>
  )
}
export default NavbarItem;
