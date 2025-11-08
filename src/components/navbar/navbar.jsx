import { Link } from 'react-router'
import { useWindowSize } from 'usehooks-ts'
import { HamburgerMenuIcon, WhatsappIcon } from '../../assets/icons'
import { LogoIcon, LogoText } from '../../assets/logo'

const menuItems = [
  { title: 'Home', link: '/' },
  { title: 'Mission & Vision', link: '/about' },
  { title: 'Services', link: '/services' },
  { title: 'Sector', link: '/sector' },
  { title: 'Solutions', link: '/solutions' },
  { title: 'Download', link: '/download' },
]

const Navbar = () => {
  const { width } = useWindowSize()

  return (
    <div className="absolute left-0 top-2 z-40 flex w-full items-center justify-center">
      <div className="flex w-[95%] max-w-7xl items-center justify-between">
        <div className="flex items-center gap-10">
          <div className="flex items-end">
            <img src={LogoIcon} alt="Logo" className="size-10 md:size-14" />
            <img src={LogoText} alt="Logo" className="w-18 md:w-32" />
          </div>
          <div className={`flex gap-8 text-white md:text-sm lg:text-base ${width < 990 ? 'hidden' : 'flex'}`}>
            {menuItems.map((menu) => (
              <Link to={menu.link}>{menu.title}</Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <p className="text-sm text-white md:hidden">Eng</p>
          <div className="bg-green flex items-center gap-2 rounded-full p-1 md:px-4 md:py-2">
            <img src={WhatsappIcon} alt="Logo" className="size-4" />
            <p className="hidden text-base text-white md:block">WhatsApp</p>
          </div>

          <p className="hidden text-white md:block">English</p>
          <img src={HamburgerMenuIcon} alt="Logo" className="size-5 md:hidden" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
