import Image from 'next/image';

export default function Hero() {
    return (
        <section className="max-w-[1168px] w-full mx-auto px-10 grid md:grid-cols-2 gap-8 pb-[68px] text-center md:text-left">
            <div>
                <h1 className="mb-4 lg:text-4xl text-3xl text-secondary-purple font-bold lg:leading-[54px] leading-10">
                    Veja o guia definitivo para conquistar seus objetivos como
                    DEV em 2022
                </h1>
                <div>
                    <p className="text-primary-white leading-6 max-w-[419px] w-full mx-auto md:mb-6 md:mx-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nibh nibh eu in aliquet ut adipiscing neque. Sed
                        volutpat aenean sit vitae, sed tristique placerat hac.
                    </p>
                    <a
                        href="#"
                        className="md:flex items-center gap-2 text-secondary-purple font-bold cursor-pointer hidden hover:text-hover"
                    >
                        Veja Mais
                        <Image
                            src="./arrow-right.svg"
                            alt="Right arrow"
                            width={24}
                            height={24}
                        />
                    </a>
                </div>
            </div>
            <div className=" mx-auto md:mx-0">
                <Image
                    src="/featured-image.png"
                    alt="Computer screen"
                    width={570}
                    height={346}
                />
                <a
                    href="#"
                    className="flex items-center gap-2 text-secondary-purple font-bold cursor-pointer md:hidden my-4 hover:text-hover"
                >
                    Veja Mais
                    <Image
                        src="./arrow-right.svg"
                        alt="Right arrow"
                        width={24}
                        height={24}
                    />
                </a>
            </div>
        </section>
    );
}
