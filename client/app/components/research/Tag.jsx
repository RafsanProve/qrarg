export default function Tag({name}) {
    return (
        <div className="inline rounded-md bg-blue-600/15 px-2 py-0.5 text-blue-600 text-sm line-clamp-1">
        {name}
        </div>
    );
}