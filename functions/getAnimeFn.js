// Description: This file contains all the functions that are used to fetch data from the API
//File is not used anymore, but is kept for reference

// const JIKAN_BASE_URL = 'https://api.jikan.moe/v4'
// const CONSUMET_BASE_URL = 'https://api.consumet.org'



// export async function getAnimeList(title, query) {
//     const search = await fetch(`${CONSUMET_BASE_URL}/meta/anilist/${title}?${query}`, { next: { revalidate: 60 } })
//     const data = await search.json()
//     // console.log(data)
//     return data
// }

// export async function getAnimeInfo(id) {
//     const search = await fetch(`${CONSUMET_BASE_URL}/meta/anilist/info/${id}`)
//     const data = await search.json()
//     return data
// }

// export async function getAnimeStreamingLinks(episodeId) {
//     const search = await fetch(`${CONSUMET_BASE_URL}/meta/anilist/watch/${episodeId}`)
//     const data = await search.json()
//     return data
// }

// export async function getAnimeInfo_MAL(id) {
//     const search = await fetch(`${JIKAN_BASE_URL}/anime/${id}`)
//     const data = await search.json()
//     return data.data
// }