export async function getAnimeCoverImage(title) {
    const search = await fetch(`${process.env.API_BASE_URL}/anime/animepahe/${title}`)
    const data = await search.json()
    const id = await data?.results[0]?.id

    const info = await fetch(`${process.env.API_BASE_URL}/anime/animepahe/info/${id}`)
    const infoData = await info.json()

    // console.log(infoData)
    // console.log('from get cover image ' + data.results[0].id)
    return infoData.image
}

export async function getAnimeList(title) {
    const search = await fetch(`${process.env.API_BASE_URL}/meta/anilist/${title}`, { cache: "no-cache" })
    const data = await search.json()
    // console.log(data)
    return data.results
}