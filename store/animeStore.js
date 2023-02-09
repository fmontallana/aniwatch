
import { create } from 'zustand';
import { mountStoreDevtool } from 'simple-zustand-devtools';

const JIKAN_BASE_URL = 'https://api.jikan.moe/v4'
const CONSUMET_BASE_URL = 'https://api.consumet.org'



export const useAnimeStore = create((set) => ({
    popular: [],
    trending: [],
    recent: [],
    animeList: [],
    animeInfo: [],
    animeId: '',
    malId: '',
    selectedAnimeId: '',
    setPopular: (popular) => set({ popular }),
    setTrending: (trending) => set({ trending }),
    setRecent: (recent) => set({ recent }),
    setSelectedAnimeId: (selectedAnimeId) => set({ selectedAnimeId }),
    setAnimeList: (animeList) => set({ animeList }),
    setAnimeInfo: (animeInfo) => set({ animeInfo }),
    setAnimeId: (animeId) => set({ animeId }),
    setMalId: (malId) => set({ malId }),
    fetchAnimeInfo: async (id) => {
        if (!id) return { message: "no id" }
        const search = await fetch(`${CONSUMET_BASE_URL}/meta/anilist/info/${id}`)
        if (!search.ok) return [{ message: "error fetching anime info" }]
        const data = await search.json()
        return data
    },
    fetchAnimeList: async (title, query) => {
        if (!query) query = ''
        const search = await fetch(`${CONSUMET_BASE_URL}/meta/anilist/${title}?${query}`, { next: { revalidate: 60 } })
        // console.log("fetch anime list status: " + search.ok)
        if (!search.ok) return [{ message: "error fetching anime list" }]
        const data = await search.json()
        return data
    },
    fetchAnimeStreamingLinks: async (episodeId) => {
        const search = await fetch(`${CONSUMET_BASE_URL}/meta/anilist/watch/${episodeId}`)
        if (!search.ok) return [{ message: "error fetching anime streaming links" }]
        const data = await search.json()
        return data
    },
    fetchAnimeInfo_MAL: async (id) => {
        const search = await fetch(`${JIKAN_BASE_URL}/anime/${id}`)
        const data = await search.json()
        return data.data
    }
}));

if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('AnimeStore', useAnimeStore);
}