
import HLSPlayer from "./HLSPlayer"



export default function PlayerSection({ src }) {

    return (
        <div className=" h-full w-full z-0 bg-black   ">
            <HLSPlayer src={src} />
        </div>
    )
}
