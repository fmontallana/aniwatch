
import HLSPlayer from "./HLSPlayer"



export default function PlayerSection({ src }) {

    return (
        <div className="sm:absolute top-0 h-52 sm:h-full w-full z-0 bg-black  lg:h-[100dvh]  ">
            <HLSPlayer src={src} />
        </div>

    )
}
