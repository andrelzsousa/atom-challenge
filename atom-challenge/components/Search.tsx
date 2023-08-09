import Image from 'next/image';

interface SearchProps {
    className: string;
}

export default function Search({ className }: SearchProps) {
    return (
        <form
            className={`${className} items-center rounded overflow-hidden`}
            onSubmit={(e) => e.preventDefault()}
        >
            <input
                className="bg-input py-3 px-6 text-white"
                placeholder="Buscar"
            />
            <button className="bg-secondary-purple px-6 py-3 hover:bg-hover transition-colors">
                <Image
                    src="./search.svg"
                    alt="Search logo"
                    width={24}
                    height={24}
                />
            </button>
        </form>
    );
}
