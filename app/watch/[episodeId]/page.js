
import { PlayerSection } from '@/components';
import { getAnimeStreamingLinks } from '@/functions/getAnimeFn'

export default async function Watch({ params }) {

    const ep = await getAnimeStreamingLinks(params.episodeId)

    const url = ep.sources.filter((src, index) => {
        return index === 0
    })

    return (
        <div className='h-screen w-full'>
            <PlayerSection src={url[0].url} />
        </div>
    )
}
