
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/file"), { ssr: false });


export default function HLSPlayer({ src, poster }) {

    return (
        <ReactPlayer
            config={{
                file: {
                    forceHLS: true,
                }
            }}
            url={src}
            width="100%"
            height="100%"
            controls={true} />
    )
}
