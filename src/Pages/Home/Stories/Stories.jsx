import React from 'react'
import { Link } from 'react-router-dom'
import TextEllipse from './TextEllipse/TextEllipse';
const Stories = () => {
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
    return (
        <div className='lg:max-w-[70vw] sm:max-w-full md:max-w-[70vw] max-w-full h-auto flex items-center gap-x-3.5 overflow-x-scroll '>
            <Link to={'/'} key={1} className='flex items-center justify-center flex-col flex-shrink-0'>
                <div className='w-16 h-16 rounded-full object-cover p-[2px] bg-green-600'>
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="" className='rounded-full w-full h-full object-cover bg-black p-[2.5px]' />
                </div>
                <TextEllipse username="sumit yadav" />
            </Link>
            {storiesData.map((story) => (
                <Link to={'/'} key={story.id} className='flex items-center justify-center flex-col flex-shrink-0'>
                    <div className='w-16 h-16 rounded-full object-cover p-[2px] bg-gradient-to-r from-[#ffd89b] to-[#19547b]'>
                        <img src={story.imageUrl} alt="" className='rounded-full w-full h-full object-cover bg-black p-[2.5px]' />
                    </div>
                    <TextEllipse username={story.username} />
                </Link>
            ))}
        </div>
    )
}

export default Stories
