
const Card = ({ title, children, isExpirience = false }) => {
    return (
        <div className={`bg-[#190b2e] p-6 rounded-2xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105 ${isExpirience && "col-span-1 md:col-span-2"}`}>
            <div className="flex flex-col items-center justify-center h-full text-start">
                <h2 className="text-lg font-semibold text-start w-full">{title}</h2>
                {children}
            </div>
        </div>
    )
}

export default Card