import React, { useState, useEffect, useRef } from 'react';
import reel1 from './virat.mp4';
import reel2 from './virat2.mp4';
import reel3 from './virat3.mp4';
import reel4 from './virat4.mp4';
import reel5 from './virat5.mp4';

import liked from '../../Icons/Like/liked.png';
import commented from '../../Icons/Comment/commented.png';
import share from '../../Icons/Share/Share.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import Share from '../../Icons/Share/Share.jsx';

const ReelsCard = () => {
    const reelsData = [
        { id: 1, video: reel1, likeCount: "10k", commentCount: "3k" },
        { id: 2, video: reel2, likeCount: "10k", commentCount: "3k" },
        { id: 3, video: reel3, likeCount: "10k", commentCount: "3k" },
        { id: 4, video: reel4, likeCount: "10k", commentCount: "3k" },
        { id: 5, video: reel5, likeCount: "10k", commentCount: "3k" },
    ];
    const [playingReelIndex, setPlayingReelIndex] = useState(0);
    const playingReel = reelsData[playingReelIndex];
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.src = playingReel?.video;

            // Add event listener for when the video is loaded
            const handleLoadedMetadata = () => {
                videoRef.current.play().catch((error) => {
                    console.error('Play error:', error);
                });

                // Remove the event listener once the video starts playing
                videoRef.current.removeEventListener('loadedmetadata', handleLoadedMetadata);
            };

            videoRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);
        }
    }, [playingReelIndex, playingReel]);



    useEffect(() => {
        const handleScroll = () => {

            if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
                // User scrolled to the bottom, play next reel
                console.log('scrolled')
                setPlayingReelIndex((prevIndex) => (prevIndex + 1) % reelsData.length);
            }
        };
        window.addEventListener('keydown', handleScroll);
        return () => {
            window.removeEventListener('keydown', handleScroll);
        };
    }, [reelsData.length]);

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    };

    const handleMuteUnmute = () => {
        setIsMuted(!isMuted);
        videoRef.current.muted = !isMuted;
        console.log("muted", isMuted);
    };


    return (
        <div className='flex flex-row justify-center items-center'>
            <div
                key={playingReel?.id}
                className='lg:w-[95%] flex flex-row md:w-[70.675%] sm:w-[32.5%] lg:h-[85vh] md:h-[80vh] sm:h-[35vh] h-[30vh]'
                style={{
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    borderRadius: '10px',
                    position: 'relative',
                }}
            >
                <video
                    ref={videoRef}
                    src={playingReel?.video}
                    autoPlay
                    loop
                    muted={isMuted}
                    title='reel video'
                    className='cursor-pointer h-[95%] w-[95%] rounded-lg object-contain'
                    onClick={handlePlayPause}
                />

                <div className='flex flex-col items-center justify-center m-4 gap-8 cursor-pointer'>
                    <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} onClick={handleMuteUnmute} />
                    <div>
                        <img src={commented} alt="commented" className='w-6 h-6' />
                        <p className='text-base text-white font-medium'>{playingReel?.commentCount}</p>
                    </div>
                    <div>
                        <img src={liked} alt="liked" className='w-6 h-6' />
                        <p className='text-base text-white font-medium'>{playingReel?.likeCount}</p>
                    </div>
                    <Share />
                </div>
            </div>
        </div>
    );
};

export default ReelsCard;
