import React from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

function Header() {
    const { t } = useTranslation('global');
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [selectedLanguage, setSelectedLanguage] = React.useState('es');

    const menuItems = [
        { name: t('header.experience'), href: "#experiencia" },
        { name: t('header.projects'), href: "#proyectos" },
        { name: t('header.aboutMe'), href: "#sobre-mi" },
        { name: t('header.skills'), href: "#tecnologias" },
    ];

    const changeLanguage = (lng) => {
        i18next.changeLanguage(lng);
        setSelectedLanguage(lng);
        document.getElementById('language-flag').src = getFlag(lng);
    };

    const getFlag = (lng) => {
        return lng === 'es' ? 'https://hatscripts.github.io/circle-flags/flags/es.svg' : 'https://hatscripts.github.io/circle-flags/flags/gb.svg';
    };

    React.useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isMenuOpen]);

    return (
        <>
            <Navbar onMenuOpenChange={setIsMenuOpen} className='backdrop-blur-lg  bg-gray-50 text-black dark:bg-gray-950/70 dark:text-white'>
                <div className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-600 to-transparent" />
                <NavbarContent>
                    <NavbarBrand>
                        <a href='/' className='font-bold text-xl'>hMonroy.dev</a>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent justify="end">
                    {menuItems.map((item, index) => (
                        <NavbarItem key={index} className="hidden md:block">
                            <Link color="foreground" className="outline-none group relative flex items-center rounded py-2 pl-5 pr-2 text-sm transition-colors hover:bg-gray-200 dark:hover:bg-gray-900" href={item.href}>
                                <span className="absolute duration-150 left-2 transition-all flex-none rounded-full bg-secondary group-hover:size-1.5 size-0"></span>
                                {item.name}
                            </Link>
                        </NavbarItem>
                    ))}
                    <Dropdown>
                        <DropdownTrigger>
                            <button className="mx-2 outline-none group relative flex items-center rounded py-2 px-2 text-sm transition-colors hover:bg-gray-200 dark:hover:bg-gray-900">
                                <span className="mx-1">
                                    <img
                                        id="language-flag"
                                        src={getFlag(selectedLanguage)}
                                        alt={`${selectedLanguage} flag`}
                                        className='inline-block max-w-none w-5 h-5'
                                    />
                                </span>
                            </button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Language selection">
                            <DropdownItem key="es" onClick={() => changeLanguage('es')}>
                                <span className="mr-2 inline-block">
                                    <img src="https://hatscripts.github.io/circle-flags/flags/es.svg" alt="ES flag" className='w-5 h-5 inline-block' />
                                </span>
                                <span className="inline-block">ES</span>
                            </DropdownItem>
                            <DropdownItem key="en" onClick={() => changeLanguage('en')}>
                                <span className="mr-2 inline-block">
                                    <img src="https://hatscripts.github.io/circle-flags/flags/gb.svg" alt="EN flag" className='w-5 h-5 inline-block' />
                                </span>
                                <span className="inline-block">EN</span>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Cerrar menu" : "Abrir menu"}
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu open state
                    />
                </NavbarContent>
                <NavbarMenu className='bg-gray-900'>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={index}>
                            <Link className="w-full text-gray-50 my-4" href={item.href} size="lg">
                                {item.name}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
        </>
    )
}

export default Header