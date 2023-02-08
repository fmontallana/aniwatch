
export default function Background({ cover, image, trailer }) {


    return (
        <div className={`absolute -z-10 top-0 left-0 sm:h-[70vh] h-[90vh] w-full overflow-hidden`}>
            <div style={{
                backgroundImage: `url("${image}")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }} className="sm:hidden absolute h-5/6 w-full" />
            <div style={{
                backgroundImage: `url("${cover}")`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }} className="hidden sm:block absolute h-5/6 w-full" />
            <div className=" absolute top-0 left-0 h-5/6 w-full bg-gradient-to-t from-gray-900 " />
        </div>
    )
}
