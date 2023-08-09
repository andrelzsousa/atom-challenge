import Image from 'next/image';
import Separator from './Separator';

export default function MainSection() {
    return (
        <main className="max-w-[1168px] w-full mx-auto px-10 py-[60px] flex flex-col items-center lg:items-start lg:flex-row lg:gap-[100px]">
            <div className="flex flex-col">
                <Image
                    src="/post-1.png"
                    width={529}
                    height={342}
                    alt="Computer standing on a table"
                    className="mb-4 self-center"
                />
                <p>Janeiro 04, 2022</p>
                <h2 className="text-primary-purple text-2xl font-bold my-4 hover:text-secondary-purple transition-colors">
                    <a href="#">Começando no ReactJS em 2022</a>
                </h2>
                <p className="lg:w-[529px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat
                    aenean sit vitae, sed tristique nibh nibh eu in aliquet ut
                    adipiscing neque. Sed volutpat aenean sit vitae, sed
                    tristique. Sed volutpat aenean.
                </p>
                <Separator
                    size={1}
                    hex="#F2E7FA"
                    className="my-6 lg:hidden block"
                />
            </div>

            <div>
                <p>Janeiro 04, 2022</p>
                <h2 className="text-primary-purple text-2xl font-bold my-2 hover:text-secondary-purple transition-colors">
                    <a href="#">
                        Conheça as principais técnicas para conseguir uma vaga
                        internacional em programação
                    </a>
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nibh nibh eu in aliquet ut adipiscing neque. Sed volutpat
                    aenean sit vitae, sed tristique.
                </p>
                <Separator size={1} hex="#F2E7FA" className="my-6" />

                <p>Janeiro 04, 2022</p>
                <h2 className="text-primary-purple text-2xl font-bold my-2 hover:text-secondary-purple transition-colors">
                    <a href="#">Veja a evolução do Front-end na prática</a>
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nibh nibh eu in aliquet ut adipiscing neque.
                </p>
                <Separator
                    size={1}
                    hex="#F2E7FA"
                    className="mt-6 lg:hidden block"
                />
            </div>
        </main>
    );
}
