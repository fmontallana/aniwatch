import Image from "next/image"
import { rgbDataURL } from "@/functions/dynamicPlaceholder"

export default function Actor({ data, color }) {
    const { role, name, image, voiceActors } = data

    return (
        <div className="h-auto w-[6.25rem] gap-2 flex-shrink-0 flex flex-col justify-start items-start">
            <div className=" flex justify-start items-end -gap-5 h-full w-auto">
                <div className="relative h-20 w-20 rounded-full overflow-hidden">
                    <Image
                        src={image}
                        alt={name?.full}
                        placeholder="blur"
                        blurDataURL={rgbDataURL(color)}
                        sizes="10rem"
                        fill
                        style={{ objectFit: "cover" }}

                    />

                </div>
                <div className="relative h-10 w-10 rounded-full overflow-hidden -ml-5 border-4 border-gray-900">
                    <Image
                        src={voiceActors[0]?.image || rgbDataURL(color)}
                        alt={voiceActors[0]?.name.full || "No voice actor"}
                        sizes="10rem"
                        placeholder="blur"
                        blurDataURL={rgbDataURL(color)}
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>

            </div>
            <div className="w-full flex flex-col text-xs text-slate-200 pr-4 overflow-x-hidden">
                <p style={{ color }} className="font-bold">{role}</p>
                <p className="max-w-32 ">{name?.full}</p>
                <p className="max-w-32  italic">{voiceActors[0]?.name?.full}</p>
            </div>

        </div>
    )
}
