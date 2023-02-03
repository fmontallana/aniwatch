
import { PlayerSection } from '@/components';
import { getAnimeStreamingLinks } from '@/functions/getAnimeFn'
import { notFound } from 'next/navigation'

export default async function Watch({ params }) {


    const ep = await getAnimeStreamingLinks(params.episodeId)

    if (ep.message) return notFound()


    const url = await ep?.sources?.filter((src, index) => {
        return index === 0
    })

    return (
        <div className='h-screen w-full'>
            <PlayerSection src={url[0].url} />
        </div>
    )
}
