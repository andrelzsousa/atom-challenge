import Link from 'next/link';
import Separator from './Separator';

export default function NavItems() {
    return (
        <>
            <li className="font-bold flex items-center">
                <span className="flex-grow bg-primary-green w-[2px] h-5 mr-1 mb-[2px]"></span>
                <Link
                    href="#"
                    className="text-white hover:text-hover transition-colors"
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    href="#"
                    className="text-white hover:text-hover transition-colors"
                >
                    Sobre
                </Link>
            </li>
            <li>
                <Link
                    href="#"
                    className="text-white hover:text-hover transition-colors"
                >
                    Categorias
                </Link>
            </li>
            <li>
                <Link
                    href="#"
                    className="text-white hover:text-hover transition-colors"
                >
                    Contato
                </Link>
            </li>
        </>
    );
}
