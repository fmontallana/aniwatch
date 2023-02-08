
import { PlayerSection } from '@/components';
import StoreInitializer from '@/components/StoreInitializer';
import { useAnimeStore } from '@/store/animeStore';
import { useGlobalStore } from '@/store/globalStore';
import { notFound } from 'next/navigation'

export default async function Watch({ params }) {


    // const ep = await useAnimeStore.getState().fetchAnimeStreamingLinks(params.episodeId)

    // if (ep.message) return notFound()

    // const src = await ep?.sources?.filter((src, index) => {

    //     return index === 3 || index === 4
    // })


    // const url = src.length === 1 ? src[0] : src[1]

    return (
        <div className='h-full w-full'>
            {/* <PlayerSection src={url?.url} /> */}

            <p className='grid place-content-center p-2 text-slate-200'>
                This page is under maintenance. Please check back later.
            </p>
        </div>
    )
}
