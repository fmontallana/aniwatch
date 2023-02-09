
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
        currentEp: '',
        episodeUrl: '',
        isMobile: false,
        setCurrentEp: (currentEp) => set({ currentEp }),
        setEpisodeUrl: (episodeUrl) => set({ episodeUrl }),
        setSearchTerm: (searchTerm) => set({ searchTerm }),
        setSearchResults: (searchResults) => set({ searchResults }),
        setDebouncedSearchTerm: (debouncedSearchTerm) => set({ debouncedSearchTerm }),
        setTitleLanguage: (titleLanguage) => set({ titleLanguage }),
        filterTitleLanguage: (title) => {
            if (get().titleLanguage === 'en') return title?.english || title?.userPreferred || null;
            if (get().titleLanguage === 'jp') return title?.romaji || null;
        },
        formatDate: (date) => {
            if (!date) return "?";
            const start = new Date(date.year, date.month, date.day);
            return start.toLocaleDateString('en-US', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            });
        },
        formatNumber: (num) => {
            const formatter = new Intl.NumberFormat('en-US', {
                notation: 'compact',
                compactDisplay: 'short'
            });
            return formatter.format(num);
        },
    })

);

if (process.env.NODE_ENV === 'development') {
    mountStoreDevtool('GlobalStore', useGlobalStore);
}