import React from 'react'
import { Link } from 'react-router-dom'
import liked from '../../../../../Icons/Like/liked.png'
import commented from '../../../../../Icons/Comment/commented.png'
const Postacrd = () => {
    const data = [
        { link: "https://pbs.twimg.com/media/GHHSNruXEAAwjfs?format=jpg&name=large", likeCount: "25k", commentCount: "300k" },
        { link: "https://i.pinimg.com/236x/f7/b3/e7/f7b3e78e13dd398e7081182d219181c9.jpg", likeCount: "25k", commentCount: "300k" },
        { link: "https://i.pinimg.com/236x/86/af/07/86af079c368ea546a36d44980eaaaaa3.jpg", likeCount: "25k", commentCount: "300k" },
        { link: "https://i.pinimg.com/236x/d8/20/95/d8209588924377a85965e305401e924d.jpg", likeCount: "25k", commentCount: "300k" },
        { link: "https://i.pinimg.com/236x/6c/c5/43/6cc543c7501f95370c6dc5bbbe963ba2.jpg", likeCount: "25k", commentCount: "300k" },
        { link: "https://i.pinimg.com/236x/f7/b3/e7/f7b3e78e13dd398e7081182d219181c9.jpg", likeCount: "25k", commentCount: "300k" },
        { link: "https://i.pinimg.com/236x/13/67/d5/1367d5c6652026128500ae7c1b9ffd5e.jpg", likeCount: "25k", commentCount: "300k" },
        { link: "https://i.pinimg.com/236x/be/c4/7f/bec47f41385522288ed63b6b6e6d1561.jpg", likeCount: "25k", commentCount: "300k" },
        { link: "https://i.pinimg.com/236x/d0/1e/92/d01e92da2b3fa813a422c972725ed97a.jpg", likeCount: "25k", commentCount: "300k" },

    ]
    return (
        <>
            {data.map((reel, index) => (
                <Link to={'/'} key={index} className='lg:w-[32.675%] md:w-[24.675%] sm:w-[32.5%] lg:h-[48vh] md:h-[40vh] sm:h-[35vh] h-[30vh]   relative group '
                >
                    <img src={reel.link} alt="" className='w-full h-full object-cover' style={{
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: '10px'
                    }} />
                    <div className="hidden group-hover:flex items-center justify-center gap-x-3 absolute top-[50%] translate-x-[50%]">
                        <div className='flex items-center gap-x-1 '>
                            <img src={commented} alt="commented" className='w-6 h-6' />
                            <p className='text-base text-white font-medium'>{reel.commentCount}</p>
                            <img src={liked} alt="commented" className='w-6 h-6' />
                            <p className='text-base text-white font-medium'>{reel.likeCount}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </>
    )
}

export default Postacrd
