import Image from 'next/image';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import NavItems from './NavItems';
import Search from './Search';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <header className="bg-primary-purple max-w-[1168px] w-full mx-auto px-10 md:py-[68px] py-12 flex items-center justify-between">
            <Image
                src="./logo.svg"
                alt="the Blog logo"
                width={161}
                height={36}
            />

            <Search className="hidden md:flex lg:hidden" />

            <nav className="hidden lg:block">
                <ul className="flex gap-8 text-[18px] ">
                    <NavItems />
                </ul>
            </nav>

            <button
                className="block lg:hidden text-white"
                onClick={() => setIsMobileMenuOpen(true)}
            >
                <MenuIcon fontSize="large" />
            </button>

            {isMobileMenuOpen && (
                <div className="fixed lg:hidden bg-[#35155D] inset-0 w-screen h-[40%] flex flex-col items-center justify-center gap-5 transition-all">
                    <nav>
                        <ul className="flex flex-col items-center gap-5 md:gap-8 text-[18px] ">
                            <NavItems />
                        </ul>
                    </nav>

                    <Search className="flex md:hidden" />
                    <button
                        className="absolute top-4 right-4 text-3xl text-secondary-purple"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <CloseIcon fontSize='large' />
                    </button>
                </div>
            )}

            <Search className="hidden lg:flex" />
        </header>
    );
}
