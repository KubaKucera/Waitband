
export default function LoadingCircle(){
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="relative">
                <div className="absolute inset-0 rounded-full w-24 h-24 bg-gray-200 shadow-xl"></div>
                <div className="loader border-8 border-gray-300 border-t-blue-500 rounded-full w-24 h-24 animate-spin"></div>
            </div>
            <p className="mt-6 text-2xl text-gray-800 font-bold">Načítání...</p>
            <p className="mt-2 text-sm text-gray-600">Prosím, počkejte.</p>
        </div>
    );
}