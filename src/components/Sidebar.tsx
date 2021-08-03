import {
  FaGift,
  FaHome,
  FaGavel,
  FaReceipt,
  FaBuilding,
  FaComments,
  FaLayerGroup,
  FaQuestionCircle,
} from "react-icons/fa";

type MenuItem = {
  title: string;
  icon: React.ReactNode;
};

const menuItems: MenuItem[] = [
  { title: "Home", icon: <FaHome /> },
  { title: "Company", icon: <FaBuilding /> },
  { title: "Perks", icon: <FaGift /> },
  { title: "Legal", icon: <FaGavel /> },
  { title: "Payments", icon: <FaReceipt /> },
];

const optionItems: MenuItem[] = [
  { title: "Get Help", icon: <FaQuestionCircle /> },
  { title: "Chat with Us", icon: <FaComments /> },
];

function MenuLink({ item }: { item: MenuItem }) {
  const isActiveClass =
    item.title === "Payments"
      ? "text-blue-500"
      : "text-gray-800 hover:text-blue-800";
  return (
    <a
      href="/"
      className={`w-full dark:text-white flex items-center pl-6 p-4 my-2 ${isActiveClass}`}
    >
      <span className="text-lg">{item.icon}</span>
      <span className="mx-2 text-sm font-normal">{item.title}</span>
    </a>
  );
}

export default function Sidebar() {
  return (
    <div className="bg-white h-full dark:bg-gray-700 flex flex-col">
      <div className="flex items-center justify-center pt-10">
        <FaLayerGroup size={64} />
      </div>
      <nav className="mt-20 flex-1">
        <div>
          {menuItems.map((item: MenuItem, idx: number) => (
            <MenuLink item={item} key={idx} />
          ))}
        </div>
      </nav>
      <nav className="mb-6">
        <div>
          {optionItems.map((item: MenuItem, idx: number) => (
            <MenuLink item={item} key={idx} />
          ))}
        </div>
      </nav>
    </div>
  );
}
