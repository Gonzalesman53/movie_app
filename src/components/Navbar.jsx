
import NavbarItem from "./NavbarItem";


function Navbar() {
    
  return (
    <div className="flex justify-center gap-6 p-4 items-center lg:text-lg dark:bg-gray-600 bg-amber-100">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchToprated" />
    </div>
  );
}
export default Navbar;
