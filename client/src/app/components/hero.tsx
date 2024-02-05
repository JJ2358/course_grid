import type { StaticImageData } from "next/image";
import Image from "next/image";

interface HeroProps {
    imgData: StaticImageData;
    imgAlt: string;
    title: string;
}

export default function Hero(props: HeroProps) {
    return (
        <div className="relative h-[85vh]">
            <div className="absolute -z-10 inset-0">
                <Image
                    src={props.imgData}
                    alt={props.imgAlt}
                    layout="fill"
                    style={{ objectFit: "cover", filter: "brightness(.3)" }}
                />
            </div>

            <div className="absolute -z-9 flex flex-col h-[85vh]">
                <div className="px-10 grow flex justify-center items-center">
                    <h1 className="text-white text-6xl leading-snug">{props.title}</h1>
                </div>

                <div style={{ textAlign: 'right' }} className="text-white px-10 pb-10 self-end grow-0">
                    Photo by <a href="...">Jo Szczepanska</a> on <a href="...">Unsplash</a>
                </div>
            </div>
        </div>
    );
}
