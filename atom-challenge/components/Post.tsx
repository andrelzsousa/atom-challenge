import Image from 'next/image';

interface PostProps {
    img: string;
    alt: string;
    title: string;
    children: React.ReactNode;
}

export default function Post({ img, alt, title, children }: PostProps) {
    return (
        <li className="block md:flex lg:block gap-8">
            <div className="">
                <Image
                    src={img}
                    alt={alt}
                    width={370}
                    height={259}
                    className="mx-auto"
                />
                <p className="mt-4">Janeiro 04, 2022</p>
            </div>
            <div>
                <h2 className="text-primary-purple text-2xl font-bold mb-4 hover:text-secondary-purple transition-colors">
                    <a href="#">{title}</a>
                </h2>
                <p>{children}</p>
            </div>
        </li>
    );
}
