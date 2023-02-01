import Card from "./Card"

function AnimeSection({ anime: animeList, section }) {

    return (
        <section className=" w-full">
            <div className="flex justify-between text-white py-2 mr-2">
                <p className="flex-1 text-xl font-bold fs-125">{section}</p>
                <button className="text-sm  sm:w-1/12 bg-gray-800 mx-1 py-1 px-2 rounded ">View All</button>
            </div>
            <div className="flex  sm:flex-wrap gap-3 overflow-x-scroll sm:overflow-x-hidden">
                {animeList?.map((anime) => {
                    return (
                        <Card key={anime.id} id={anime.id} title={anime.title.userPreferred} image={anime.image} />
                    )
                })}
            </div>
        </section>
    )
}

export default AnimeSection