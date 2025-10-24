import { WhatsappIcon } from "../../assets/icons";
import { LogoIcon, LogoText, } from "../../assets/logo";

const menuItems = [
  { title: "Home", link: "/" },
  { title: "Mission & Vision", link: "/about" },
  { title: "Services", link: "/services" },
  { title: "Sector", link: "/sector" },
  { title: "Solutions", link: "/solutions" },
  {title : "Download", link: "/download"}
];

const Navbar = () => {
  return (
    <div className="absolute left-0 top-2 w-full z-40 flex items-center justify-center bg-transparent">
      <div className="w-[90%] flex justify-between items-center">
        <div className="flex items-center gap-10">
          <div className="flex items-end">
            <img src={LogoIcon} alt="Logo" width={50} height={50} />
            <img src={LogoText} alt="Logo" width={120} height={50} />
          </div>
          <div className="flex gap-10 text-white text-base">
            {
              menuItems.map(menu => <p>{menu.title}</p>)
            }
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 rounded-full bg-green px-4 py-2">
            <img src={WhatsappIcon} alt="Logo" width={20} height={20} />
            <p className="text-white text-base">WhatsApp</p>
          </div>

          <p className="text-white">English</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;