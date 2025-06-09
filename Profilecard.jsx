const Profilecard = ({ image, jobTitle, quote, name }) => {
    return (
        <div className='flex flex-col justify-between items-center m-4 p-4 bg-white shadow-lg hover:shadow-cyan-500 rounded-lg h-full'>
            <div className='flex flex-col items-center'>
                <img className='w-[150px] h-[150px] rounded-full object-cover' src={image} alt={name} />
            </div>
            <div className='text-center'>
                <h1 className='text-xl font-semibold'>{name}</h1>
                <p className='text-gray-500 font-medium'>{jobTitle}</p>
            </div>
            <div className='mt-3 text-center'>
                <p className='text-sm text-gray-600 h-[96px] overflow-hidden'>
                    {quote}
                </p>
            </div>
        </div>
    );
};

export default Profilecard
