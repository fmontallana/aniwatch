import EpisodeThumb from "./EpisodeThumb"

async function sliceIntoChunks(arr, chunkSize) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr?.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
}

export default async function EpisodeSection({ data: episodes, color }) {

    const chunks = await sliceIntoChunks(episodes, 10)


    return (
        <>
            {
                chunks.map((chunk, index) => {
                    const start = ((index) * 10) + 1
                    return (
                        <>
                            <p className="font-bold fs-125">Episodes {start} - {((index) * 10) + chunk.length}</p>
                            <div className="flex gap-3 h-32 w-full overflow-x-scroll sm:overflow-x-hidden">
                                {chunk?.map((ep, index) => {

                                    if (index > 9) return
                                    return (
                                        <EpisodeThumb key={ep.id} data={ep} color={color} />
                                    )
                                })}
                            </div>
                        </>
                    )
                })
            }

        </>

    )
}
