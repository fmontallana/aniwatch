import { create } from 'zustand';

export const useGlobalStore = create((set, get) => ({
    searchTerm: '',
    searchResults: [],
    debouncedSearchTerm: '',
    titleLanguage: 'en',
    setSearchTerm: (searchTerm) => set({ searchTerm }),
    setSearchResults: (searchResults) => set({ searchResults }),
    setDebouncedSearchTerm: (debouncedSearchTerm) => set({ debouncedSearchTerm }),
    setTitleLanguage: (titleLanguage) => set({ titleLanguage }),
    filterTitleLanguage: (title) => {
        if (get().titleLanguage === 'en') return title.english || title.userPreferred;
        if (get().titleLanguage === 'jp') return title.romaji;
    }
}));