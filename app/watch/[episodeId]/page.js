
import { PlayerSection } from '@/components';
import StoreInitializer from '@/components/StoreInitializer';
import { useAnimeStore } from '@/store/animeStore';
import { useGlobalStore } from '@/store/globalStore';
import { notFound } from 'next/navigation'

export default async function Watch({ params }) {

    //refactored to use zustand
    // const ep = await getAnimeStreamingLinks(params.episodeId)
    const ep = await useAnimeStore.getState().fetchAnimeStreamingLinks(params.episodeId)

    if (ep.message) return notFound()

    const src = await ep?.sources?.filter((src, index) => {

        return index === 3 || index === 4
    })

    // check if there is 1080p
    const url = src.length === 1 ? src[0] : src[1]

    return (
        <div className='h-screen w-full'>
            <PlayerSection src={url?.url} />
        </div>
    )
}
