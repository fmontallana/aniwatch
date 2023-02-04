import { create } from 'zustand';

const JIKAN_BASE_URL = 'https://api.jikan.moe/v4'
const CONSUMET_BASE_URL = 'https://api.consumet.org'



export const useAnimeStore = create((set) => ({
    animeList: [],
    setAnimeList: (animeList) => set({ animeList }),
    animeInfo: {},
    setAnimeInfo: (animeInfo) => set({ animeInfo }),
    animeId: '',
    setAnimeId: (animeId) => set({ animeId }),
    malId: '',
    setMalId: (malId) => set({ malId }),
    fetchAnimeInfo: async (id) => {
        const search = await fetch(`${CONSUMET_BASE_URL}/meta/anilist/info/${id}`)
        const data = await search.json()
        return data
    },
    fetchAnimeList: async (title, query) => {
        const search = await fetch(`${CONSUMET_BASE_URL}/meta/anilist/${title}?${query}`, { next: { revalidate: 60 } })
        const data = await search.json()
        return data
    },
    fetchAnimeStreamingLinks: async (episodeId) => {
        const search = await fetch(`${CONSUMET_BASE_URL}/meta/anilist/watch/${episodeId}`)
        const data = await search.json()
        return data
    },
    fetchAnimeInfo_MAL: async (id) => {
        const search = await fetch(`${JIKAN_BASE_URL}/anime/${id}`)
        const data = await search.json()
        return data.data
    }
}));
