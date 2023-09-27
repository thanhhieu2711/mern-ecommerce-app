import Image from 'next/image';

type Props = {};

export const NotFoundCtn = (props: Props) => {
    return (
        <div className="w-full min-h-[70vh] grid place-items-center">
            <Image
                alt=""
                src={'/assets/images/not-found.jpeg'}
                width={400}
                height={400}
                loading="lazy"
                objectFit="cover"
            />
        </div>
    );
};

export default NotFoundCtn;
