import Link from 'next/link';

const Button = (link) => {
return (
    <button className="relative flex items-center px-6 py-3 overflow-hidden font-medium transition-all bg-indigo-500 rounded-md group">
        <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
        </span>
        <span className="absolute bottom-0 rotate-180 left-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-indigo-700 rounded group-hover:-ml-4 group-hover:-mb-4">
            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white" />
        </span>
        <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full bg-indigo-600 rounded-md group-hover:translate-x-0" />
        <span className="relative w-1/5 text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
            <Link href={link} target="_blank" className="text-white font-bold w-32 h-10 transition duration-700 ease-in-out hover:scale-105 hover:drop-shadow-xl flex items-center justify-center rounded-[4px] mt-auto mx-4 self-start">
                Visit
            </Link>
        </span>
    </button>
    );
}

export default Button;
