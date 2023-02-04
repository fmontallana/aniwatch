export async function useGetAnimeList(title, query) {
    const search = await fetch(`${process.env.API_BASE_URL}/meta/anilist/${title}?${query?.length > 0 ? query : ''}`)
    const data = await search.json()
    // console.log(data)
    return data
}