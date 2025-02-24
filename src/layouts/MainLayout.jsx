import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

export default function Layout({ children }) {
  return (
    <div className="flex bg-[#0E0E10] items-start">
      <div className="w-20 md:w-52">
        <Navbar />
      </div>

      <div className="flex-1 flex flex-col">
        <Sidebar />
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  );
}
