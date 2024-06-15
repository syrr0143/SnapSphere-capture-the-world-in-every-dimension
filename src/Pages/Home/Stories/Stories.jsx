import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import TextEllipse from './TextEllipse/TextEllipse';
import { UserContext } from '../../../Context/UserContext.jsx'
const Stories = () => {
    const [selectedStory, setSelectedStory] = useState(null);
    const { userDetails } = useContext(UserContext);

    const storiesData = [
        {
            id: 1,
            username: "adventure.lover",
            imageUrl: "https://source.unsplash.com/random/?adventure",
        },
        {
            id: 2,
            username: "nature.lover",
            imageUrl: "https://source.unsplash.com/random/?nature",
        },
        {
            id: 3,
            username: "reelsofworld",
            imageUrl: "https://source.unsplash.com/random/?videography",
        },
        {
            id: 4,
            username: "food.explorer",
            imageUrl: "https://source.unsplash.com/random/?food",
        },
        {
            id: 5,
            username: "comedy.video",
            imageUrl: "https://source.unsplash.com/random/?comedy",
        },
        {
            id: 6,
            username: "sports.lover",
            imageUrl: "https://source.unsplash.com/random/?sports",
        },
        {
            id: 7,
            username: "hiphop_dancer",
            imageUrl: "https://source.unsplash.com/random/?dancer",
        },
        {
            id: 8,
            username: "animals.lover",
            imageUrl: "https://source.unsplash.com/random/?animal",
        },
        {
            id: 9,
            username: "beautyofnature",
            imageUrl: "https://source.unsplash.com/random/?beauty",
        },
        {
            id: 10,
            username: "photographer",
            imageUrl: "https://source.unsplash.com/random/?photographer",
        },
        {
            id: 11,
            username: "mountains.men",
            imageUrl: "https://source.unsplash.com/random/?mountain,climber",
        },
        {
            id: 12,
            username: "motivation_quotes",
            imageUrl: "https://source.unsplash.com/random/?motivation",
        },
    ];
    const openStory = (storyId) => {
        setSelectedStory(storyId);
    };

    const closeStory = () => {
        setSelectedStory(null);
    };
    return (
        <>
            <div className='lg:max-w-[70vw] sm:max-w-full md:max-w-[70vw] max-w-full h-auto flex items-center gap-x-3.5 overflow-x-scroll '>
                <Link to={'/'} key={1} className='flex items-center justify-center flex-col flex-shrink-0' onClick={() => openStory(1)}>
                    <div className='w-16 h-16 rounded-full object-cover p-[2px] bg-green-600'>
                        <img src={userDetails?.avatar} alt="" className='rounded-full w-full h-full object-cover bg-black p-[2.5px]' />
                    </div>
                    <TextEllipse username={userDetails?.name} />
                </Link>
                {storiesData.map((story) => (
                    <button to={'/'} key={story.id} className='flex items-center justify-center flex-col flex-shrink-0' onClick={() => openStory(story.id)}>
                        <div className='w-16 h-16 rounded-full object-cover p-[2px] bg-gradient-to-r from-[#ffd89b] to-[#19547b]'>
                            <img src={story.imageUrl} alt="" className='rounded-full w-full h-full object-cover bg-black p-[2.5px]' />
                        </div>
                        <TextEllipse username={story.username} />
                    </button>
                ))}
            </div>
            {selectedStory && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex items-center justify-center z-50">
                    {/* Display the selected story here */}
                    <div className="w-full h-screen z-50 max-w-[90%] max-h-[90%]">
                        <img src="https://html.com/wp-content/uploads/flamingo-fallback.jpg" alt="" className="w-full h-full object-contain" />
                        <button onClick={closeStory} className="absolute top-2 right-2 bg-white rounded-full p-2 z-50">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}

        </>
    )
}

export default Stories
