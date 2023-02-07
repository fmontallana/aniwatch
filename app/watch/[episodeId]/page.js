
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
        <div className='h-full w-full'>
            <PlayerSection src={url?.url} />

            <p className='p-2 text-slate-200'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus numquam officia voluptatibus placeat quasi minima hic libero culpa fugit! Magni inventore beatae corrupti maiores at sequi dolorum aliquam. Ad consectetur cum dolores molestias, perferendis a commodi amet necessitatibus quo, repellendus, porro eveniet quis sed itaque ducimus possimus esse consequuntur. Deserunt, quos iure sunt aut.
            </p>
        </div>
    )
}
