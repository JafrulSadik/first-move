import { AnimatePresence, motion } from 'framer-motion'
import { ChevronRight, X } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router'
import { useWindowSize } from 'usehooks-ts'
import { HamburgerMenuIcon, WhatsappIcon } from '../../assets/icons'
import { LogoIcon, LogoText } from '../../assets/logo'

const menuItems = [
  { title: 'Mission & Vision', link: '/about' },
  {
    title: 'Services',
    link: '#',
    submenus: [
      { title: 'Hospitality Management', link: '/hospitality-management' },
      { title: 'Cleaning Services', link: '/cleaning-services' },
      { title: 'Security Solutions', link: '/security-solutions' },
    ],
  },
  {
    title: 'Sectors',
    link: '#',
    submenus: [
      { title: 'Government', link: '/sectors/government' },
      { title: 'Education', link: '/sectors/education' },
      { title: 'Healthcare', link: '/sectors/healthcare' },
      { title: 'Hospitality', link: '/sectors/hospitality' },
      { title: 'Residential', link: '/sectors/residential' },
      { title: 'Entertainment', link: '/sectors/entertainment' },
      { title: 'Transportation', link: '/sectors/transportation' },
      { title: 'Malls and Supermarkets', link: '/sectors/malls-and-supermarkets' },
      { title: 'Security', link: '/sectors/security' },
    ],
  },
  {
    title: 'Solutions',
    link: '#',
    submenus: [
      { title: 'Complete Hospitality Solution', link: '/solutions' },
      { title: 'Event Management Solutions', link: '/solutions' },
      { title: 'Security Solutions', link: '/solutions' },
      { title: 'Mall & Supermarket Solutions', link: '/solutions' },
      { title: 'Healthcare Facility Solutions', link: '/solutions' },
      { title: 'Education Premises Solutions', link: '/solutions' },
      { title: 'Integrated Building Management', link: '/solutions' },
    ],
  },
  { title: 'Download', link: '/download' },
]

const Navbar = () => {
  const { width } = useWindowSize()
  const [openMenu, setOpenMenu] = useState(null)
  const [openSubMenu, setOpenSubMenu] = useState(null)
  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = () => setDrawerOpen(!drawerOpen)

  return (
    <div className="flex absolute left-0 top-2 z-50 justify-center items-center w-full">
      <div className="flex w-[95%] max-w-7xl items-center justify-between">
        {/* Logo */}
        <div className="flex gap-10 items-center">
          <Link to="/">
            <div className="flex items-end">
              <img src={LogoIcon} alt="Logo" className="size-10 md:size-14" />
              <img src={LogoText} alt="Logo Text" className="w-18 md:w-32" />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className={`relative gap-8 text-white md:text-sm lg:text-base ${width < 990 ? 'hidden' : 'flex'}`}>
            {menuItems.map((menu) => (
              <div
                key={menu.title}
                className="flex relative group"
                onMouseEnter={() => setOpenMenu(menu.title)}
                onMouseLeave={() => {
                  setOpenMenu(null)
                  setOpenSubMenu(null)
                }}
              >
                <Link to={menu.link} className="flex items-center hover:text-primary-400">
                  {menu.title}
                </Link>

                {/* 2nd Level Dropdown */}
                {menu.submenus && openMenu === menu.title && (
                  <div className="absolute left-0 top-7 w-60 text-white rounded-md border shadow-lg border-white/10 bg-black/80">
                    {menu.submenus.map((submenu, index) => {
                      const isFirst = index === 0
                      const isLast = index === menu.submenus.length - 1
                      return (
                        <div
                          key={submenu.title}
                          className="relative group/sub"
                          onMouseEnter={() => setOpenSubMenu(submenu.title)}
                          onMouseLeave={() => setOpenSubMenu(null)}
                        >
                          <Link
                            to={submenu.link}
                            className={`hover:bg-primary-400/70 block px-4 py-2 hover:text-white ${
                              isFirst ? 'rounded-t-md' : ''
                            } ${isLast ? 'rounded-b-md' : ''}`}
                          >
                            {submenu.title}
                          </Link>

                          {/* 3rd Level Dropdown */}
                          {submenu.submenus && openSubMenu === submenu.title && (
                            <div className="absolute top-0 left-full ml-1 w-48 rounded-md border shadow-lg border-white/10 bg-black/80">
                              {submenu.submenus.map((sub, subIndex) => {
                                const isFirstSub = subIndex === 0
                                const isLastSub = subIndex === submenu.submenus.length - 1
                                return (
                                  <Link
                                    key={sub.title}
                                    to={sub.link}
                                    className={`block px-4 py-2 hover:bg-gray-100 hover:text-black ${
                                      isFirstSub ? 'rounded-t-md' : ''
                                    } ${isLastSub ? 'rounded-b-md' : ''}`}
                                  >
                                    {sub.title}
                                  </Link>
                                )
                              })}
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex gap-4 items-center">
          <p className="text-sm text-white md:hidden">Eng</p>
          <div className="flex gap-2 items-center p-1 rounded-full bg-green md:px-4 md:py-2">
            <img src={WhatsappIcon} alt="whatsapp" className="size-4" />
            <p className="hidden text-base text-white md:block">WhatsApp</p>
          </div>
          <p className="hidden text-white md:block">English</p>

          {/* Hamburger Icon */}
          <button onClick={toggleDrawer} className="md:hidden">
            <img src={HamburgerMenuIcon} alt="menu" className="size-5" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={toggleDrawer}
              className="fixed inset-0 z-40 bg-black"
            />

            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                type: 'tween',
                ease: 'easeOut',
                duration: 0.3,
              }}
              className="overflow-y-auto fixed top-0 right-0 z-50 p-5 w-3/4 h-screen text-white shadow-xl backdrop-blur-xs bg-black/90"
            >
              <button onClick={toggleDrawer} className="absolute top-4 right-4 text-xl text-gray-300">
                <X />
              </button>

              <div className="flex flex-col gap-2 mt-10">
                {menuItems.map((menu) => (
                  <div key={menu.title}>
                    <button
                      onClick={() => setOpenMenu(openMenu === menu.title ? null : menu.title)}
                      className="flex justify-between items-center px-4 py-3 w-full text-left rounded-lg hover:bg-white/10"
                    >
                      <Link to={menu.link}>{menu.title}</Link>
                      {menu.submenus && (
                        <motion.span
                          animate={{ rotate: openMenu === menu.title ? 90 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronRight size={18} />
                        </motion.span>
                      )}
                    </button>

                    {/* Submenus */}
                    <AnimatePresence>
                      {menu.submenus && openMenu === menu.title && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="ml-4 border-l border-white/20"
                        >
                          {menu.submenus.map((submenu) => (
                            <Link to={submenu.link} key={submenu.title}>
                              <button
                                onClick={() => setOpenSubMenu(openSubMenu === submenu.title ? null : submenu.title)}
                                className="flex justify-between items-center px-3 py-2 w-full text-sm hover:bg-white/10"
                              >
                                {submenu.title}
                                {submenu.submenus && (
                                  <motion.span
                                    animate={{
                                      rotate: openSubMenu === submenu.title ? 90 : 0,
                                    }}
                                    transition={{ duration: 0.2 }}
                                  >
                                    <ChevronRight size={16} />
                                  </motion.span>
                                )}
                              </button>

                              <AnimatePresence>
                                {submenu.submenus && openSubMenu === submenu.title && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="ml-4 border-l border-white/10"
                                  >
                                    {submenu.submenus.map((sub) => (
                                      <Link
                                        key={sub.title}
                                        to={sub.link}
                                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white"
                                      >
                                        {sub.title}
                                      </Link>
                                    ))}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navbar
