
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });


export default function HLSPlayer({ src, poster }) {

    return (
        <ReactPlayer
            className="absolute bg-gray-900"
            url={src}
            width="100%"
            height="100%"
            controls={true} />
    )
}
