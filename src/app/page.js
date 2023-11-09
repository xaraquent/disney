export default function Home() {
    return (
        <div className='bg-cover bg-no-repeat bg-center w-full h-full grid grid-cols-2 gap-4 gradient-overlay'>
            <div className='pl-16 pb-5 flex flex-col justify-between '>
                <div></div>
                <div className='grid gap-7'>
                    <img src='/pics/Disney_Plus_logo.svg.png' alt='Your Image Description' class='w-auto h-20' />
                    <h1 className='text-white text-5xl font-semibold'>
                        The best stories in the world, all in one place.
                    </h1>
                    <div className='grid grid-cols-2 gap-10'>
                        <div className='grid gap-4'>
                            <div className='flex items-end'>
                                <h1 className='text-white text-4xl font-semibold'>$89.99</h1>
                                <p className='text-gray-400'>/year</p>
                            </div>
                            <p className='text-gray-400'>Save with an annual subscription. T&Cs apply.</p>
                            <button class='bg-blue-500 hover:bg-blue-700 text-white py-3 px-10 rounded-sm'>
                                WATCH 7-DAYS FOR FREE
                            </button>
                        </div>
                        <div className='grid gap-4'>
                            <div className='flex items-end'>
                                <h1 className='text-white text-4xl font-semibold'>$8.99</h1>
                                <p className='text-gray-400'>/month</p>
                            </div>
                            <p className='text-gray-400'>Start streaming Disney+. No ads, no up-charges.</p>
                            <button class='bg-blue-500 hover:bg-blue-700 text-white py-3 px-10 rounded-sm'>
                                WATCH 7-DAYS FOR FREE
                            </button>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-start'>
                    <img src='/pics/disney-white.png' alt='Your Image Description' className='mx-1 w-auto h-7' />
                    <img src='/pics/plus-icon.png' alt='Your Image Description' class='mx-1 w-auto h-7' />
                    <img src='/pics/pixar.png' alt='Your Image Description' class='mx-1 w-auto h-7' />
                    <img src='/pics/plus-icon.png' alt='Your Image Description' class='mx-1 w-auto h-7' />
                    <img
                        src='/pics/marvel-logo-png-transparent.png'
                        alt='Your Image Description'
                        class='mx-1 w-auto h-7'
                    />
                    <img src='/pics/plus-icon.png' alt='Your Image Description' class='mx-1 w-auto h-7' />
                    <img src='/pics/star-wars.png' alt='Your Image Description' class='mx-1 w-auto h-7' />
                    <img src='/pics/plus-icon.png' alt='Your Image Description' class='mx-1 w-auto h-7' />
                    <img src='/pics/national-geo.png' alt='Your Image Description' class='mx-1 w-auto h-7' />
                </div>
            </div>
            <div></div>
        </div>
    );
}
