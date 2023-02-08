import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { mountStoreDevtool } from 'simple-zustand-devtools';

export const useGlobalStore = create(
    (set, get) => ({
        searchTerm: '',
        searchResults: [],
        debouncedSearchTerm: '',
        titleLanguage: 'en',
        selectedAnimeId: '',
        watch_url: '',
        watch_src: '',
        isMobile: false,
        setSearchTerm: (searchTerm) => set({ searchTerm }),
        setSearchResults: (searchResults) => set({ searchResults }),
        setDebouncedSearchTerm: (debouncedSearchTerm) => set({ debouncedSearchTerm }),
        setTitleLanguage: (titleLanguage) => set({ titleLanguage }),
        filterTitleLanguage: (title) => {
            if (get().titleLanguage === 'en') return title.english || title.userPreferred;
            if (get().titleLanguage === 'jp') return title.romaji;
        }
    })

);

if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('GlobalStore', useGlobalStore);
}