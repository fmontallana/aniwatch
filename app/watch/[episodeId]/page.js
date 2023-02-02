
import { PlayerSection } from '@/components';
import { getAnimeStreamingLinks } from '@/functions/getAnimeFn'

export default async function Watch({ params }) {

    const ep = await getAnimeStreamingLinks(params.episodeId)


    return (
        <div className='h-screen w-full'>
            <PlayerSection sources={ep.sources} />
        </div>
    )
}
