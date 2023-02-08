import Link from "next/link";

export default function LinkButton({ href, prefetch, color = "#1e40af", children, icon: Icon }) {

    return (
        <Link href={href} prefetch={prefetch} >
            <button style={{ backgroundColor: color }} className=" group flex justify-center items-center gap-1 w-26 text-xs bg-blue-800 ring ring-blue-100 m-1 py-2 px-4 font-semibold fs-100 rounded z-[14] transition ease-in">
                <div className="group-hover:rotate-[360deg] transition-transform ease-in-out duration-500">
                    <Icon sizes="2em" />
                </div>
                <span>{children}</span>
            </button>
        </Link>
    )
}
