export default function Tag({name}) {
    return (
        <div className="inline-block rounded-md bg-blue-600/15 px-2 py-0.5 text-blue-600 text-sm truncate max-w-[150px] whitespace-nowrap cursor-pointer group relative"
            title={name}
        >
            {name}
            <span className="invisible group-hover:visible absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap">
                {name}
            </span>
        </div>
    );
}