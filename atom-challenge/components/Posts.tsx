import Post from './Post';
import { data } from '@/utils/posts';

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
