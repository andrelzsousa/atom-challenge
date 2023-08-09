interface MainPostProps {
    title: string;
    children: React.ReactNode;
}

export default function MainPost({ title, children }: MainPostProps) {
    return (
        <>
            <p>Janeiro 04, 2022</p>
            <h2 className="text-primary-purple text-2xl font-bold my-2 hover:text-secondary-purple transition-colors">
                <a href="#">{title}</a>
            </h2>
            <p>{children}</p>
        </>
    );
}
