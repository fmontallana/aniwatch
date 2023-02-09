import { useAnimeStore } from "@/store/animeStore";
import { useGlobalStore } from "@/store/globalStore";

export default async function Head({ params }) {

    const animeInfo = await useAnimeStore.getState().fetchAnimeInfo(params.id);
    if (animeInfo.message) return null
    const { title, description, cover, image } = animeInfo
    const filteredTitle = useGlobalStore.getState().filterTitleLanguage(title)

    return (
        <>
            <title>{filteredTitle}</title>
            <meta name="description" content={description?.substring(0, 199) || "Watch anime without disturbing ads."} />
            <meta property="og:title" content={filteredTitle} />
            <meta property="og:description" content={description?.substring(0, 199) || "Watch anime without disturbing ads."} />
            <meta property="og:image" content={image || "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx156067-Jovklss4VWIx.jpg"} />
            <meta property="og:type" content="website" />
        </>
    );
}