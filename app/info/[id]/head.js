import { useAnimeStore } from "@/store/animeStore";
import { useGlobalStore } from "@/store/globalStore";

export default async function Head({ params }) {

    const { title, description, cover, image } = await useAnimeStore.getState().fetchAnimeInfo(params.id);
    const filteredTitle = useGlobalStore.getState().filterTitleLanguage(title)

    return (
        <>
            <title>{filteredTitle}</title>
            <meta name="description" content={description.substring(0, 199)} />
            <meta property="og:title" content={filteredTitle} />
            <meta property="og:description" content={description.substring(0, 199)} />
            <meta property="og:image" content={image || "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx156067-Jovklss4VWIx.jpg"} />
            <meta property="og:type" content="website" />
        </>
    );
}