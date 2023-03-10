
import Background from '@/app/info/[id]/Background';
import Section from '@/app/info/[id]/Section';
import { Card } from '@/components';
import StoreInitializer from '@/components/StoreInitializer';
import { useAnimeStore } from '@/store/animeStore';
import VideoContainer from './VideoContainer';
import { notFound } from 'next/navigation';

async function sliceIntoChunks(arr, chunkSize) {
    if (!arr) return []
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        const chunk = arr?.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
}

export default async function Watch({ params }) {

    if (!params.id) return <div className="h-96 grid place-items-center text-xl font-black fs-125  text-white ">Oops. Something went wrong. Refresh the page.</div>

    const animeInfo = await useAnimeStore.getState().fetchAnimeInfo(params.id)
    useAnimeStore.setState({ animeInfo })

    if (animeInfo.message) return <div className="h-96 grid place-items-center text-xl font-black fs-125  text-white ">Oops. Something went wrong. Refresh the page.</div>

    const { episodes, cover, image, color, id, relations, recommendations } = animeInfo

    const chunkedEpisodes = await sliceIntoChunks(episodes, 10)

    if (chunkedEpisodes.length === 0) return <div className="h-96 grid place-items-center text-xl font-black fs-125  text-white ">Oops. Something went wrong. Refresh the page.</div>

    return (
        <>
            <div className='container mx-auto h-full w-full'>
                {/* <PlayerSection src={url?.url} /> */}
                <StoreInitializer animeInfo={animeInfo} currentEp={episodes[0]} />
                <VideoContainer chunks={chunkedEpisodes} />
                <br />
                <div className='lg:w-10/12 px-2 lg:px-0 mx-auto text-slate-100'>
                    <Section color={color} title="Relations" >
                        {relations?.map(x => <Card key={x.id} data={x} color={color} />)}
                    </Section>
                    <br />
                    <Section color={color} title="Recommendations" >
                        {recommendations?.map(x => <Card key={x.id} data={x} color={color} />)}
                    </Section>

                </div>

            </div>
            <Background cover={cover} image={image} />
        </>
    )
}
