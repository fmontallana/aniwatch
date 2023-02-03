
import { PlayerSection } from '@/components';
import { getAnimeStreamingLinks } from '@/functions/getAnimeFn'
import { notFound } from 'next/navigation'

export default async function Watch({ params }) {


    const ep = await getAnimeStreamingLinks(params.episodeId)

    if (ep.message) return notFound()


    const src = await ep?.sources?.filter((src, index) => {

        return index === 3 || index === 4
    })

    // check if there is 1080p
    const url = src.length === 1 ? src[1] : src[0]

    return (
        <div className='h-screen w-full'>
            <PlayerSection src={url.url} />
        </div>
    )
}
