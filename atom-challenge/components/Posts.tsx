import Image from 'next/image';
import Post from './Post';

const data = [
    {
        id: 0,
        title: '10 dicas para conseguir a vaga desejada',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibhnibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sitvitae, sed tristique.',
        image: '/post-2.png',
        alt: 'technology festival',
    },
    {
        id: 1,
        title: 'Deixe seu código mais semântico com essas dicas',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibhnibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sitvitae, sed tristique.',
        image: '/post-3.png',
        alt: 'Computer screen showing a HTML code',
    },
    {
        id: 2,
        title: 'Use essas dicas nas suas aplicações mobile',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibhnibh eu in aliquet ut adipiscing neque. Sed volutpat aenean sitvitae, sed tristique.',
        image: '/post-4.png',
        alt: 'Hand holding a smartphone',
    },
];

export default function Posts() {
    return (
        <ul className="grid lg:grid-cols-3 text-center md:text-left lg:text-left max-w-[1168px] w-full mx-auto px-10 gap-8 pb-[68px]">
            {data.map((post) => (
                <Post
                    img={post.image}
                    alt={post.alt}
                    title={post.title}
                    key={post.id}
                >
                    {post.description}
                </Post>
            ))}
        </ul>
    );
}
