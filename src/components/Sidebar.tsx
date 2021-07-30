import { FaReceipt, FaHome, FaBuilding, FaGift, FaGavel } from "react-icons/fa";

interface MenuItem {
  title: string;
  icon: React.ReactElement;
}
const menuItems: MenuItem[] = [
  { title: "Home", icon: <FaHome /> },
  { title: "Company", icon: <FaBuilding /> },
  { title: "Perks", icon: <FaGift /> },
  { title: "Legal", icon: <FaGavel /> },
  { title: "Payments", icon: <FaReceipt /> },
];

function MenuItem(props: any) {
  const item: MenuItem = props.item;
  return (
    <a
      href="#"
      className="w-full text-gray-800 dark:text-white flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start"
    >
      <span className="text-left">{item.icon}</span>
      <span className="mx-2 text-sm font-normal">{item.title}</span>
    </a>
  );
}

export default function Sidebar() {
  return (
    <div className="bg-white h-full dark:bg-gray-700">
      <div className="flex items-center justify-center pt-6">Logo</div>
      <nav className="mt-6">
        <div>
          {menuItems.map((item: MenuItem) => (
            <MenuItem item={item} />
          ))}
        </div>
      </nav>
    </div>
  );
}
