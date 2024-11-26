import React, { useEffect, useRef } from 'react';
import { FiX } from 'react-icons/fi';

interface VideoModalProps {
    showModal: boolean;
    videoUrl: string;
    onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ showModal, videoUrl, onClose }) => {
    const iframeRef = useRef<HTMLIFrameElement | null>(null);

    const stopAllVideos = () => {
        const videos = document.querySelectorAll('iframe');
        videos.forEach((video: any) => {
            const src = video.src
            video.src = '';
            video.src = src;
        });
    };

    const handleClose = (e: React.MouseEvent) => {
        e.stopPropagation();
        onClose();
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1024 && showModal) {
                onClose();
            }
        };

        window.addEventListener('resize', handleResize);
        
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [showModal, onClose]);

    useEffect(() => {
        if (showModal) {
            stopAllVideos();
        }
    }, [showModal])

    useEffect(() => {
        if (iframeRef.current) {
            iframeRef.current.src = iframeRef.current.src;
        }
    }, [videoUrl]);

    if(!showModal) return null

    return(
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4' onClick={handleClose}>
            <div className='relative bg-black rounded-lg border-[2px] border-white shadow-lg w-full max-w-4xl h-[60%] md:h-[60%] lg:h-[60%] xl:h-[60%] 2xl:h-[60%] monitor:h-[40%] 2xl:scale-125 monitor:scale-150' onClick={(e) => e.stopPropagation()}>
                <button
                    onClick={handleClose}
                    aria-label='Zavřít video'
                    className='absolute top-1 right-1 h-auto w-auto p-1 bg-black border-[2px] opacity-75 hover:opacity-100 monitor:scale-90 rounded-md text-white'
                >
                    <FiX size={24} color='white' />
                </button>
                <iframe
                    src={videoUrl}
                    title='Video'
                    className='w-full h-full rounded-b-lg md:rounded-md object-cover'                    
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}
  
export default VideoModal;