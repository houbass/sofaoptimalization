import React, { useEffect, useState } from 'react';
import axios from 'axios'; // You can use any HTTP library for making requests
import Image from 'next/image';

import { apiKeys } from '@/config/apiKeys';

//pic
import PlaySvg from "@/pictures/play.svg";

const YouTubeVideo = ({ videoId }) => {

    const [videoInfo, setVideoInfo] = useState(null);

    useEffect(() => {
        const fetchVideoInfo = async () => {
        try {
            const response = await axios.get(
            `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKeys.google}`
            );

            if (response.data.items.length > 0) {
            setVideoInfo(response.data.items[0].snippet);
            }
        } catch (error) {
            console.error('Error fetching video info:', error);
        }
        };

        fetchVideoInfo();
    }, [videoId]);

    return (

        <a 
        href={`https://www.youtube.com/watch?v=${videoId}`}
        target="_blank"
        rel="noopener noreferrer" 
        style={{
            cursor: "pointer"
        }}
        >
            <div>
            {videoInfo && (
                <div 
                style={{
                    width: "200px",
                    //height: "150px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                        <img width={200} height="auto" src={videoInfo.thumbnails.medium.url} alt="Video Thumbnail"/>

                        <div 
                        style={{
                            position: "absolute"
                        }}
                        >
                            <Image 
                            src={PlaySvg}
                            alt='play on youtube'
                            width={80} 
                            style={{
                                opacity: "0.9"
                            }}></Image>
                        </div>
                </div>
            )}
            </div>
        </a>
    );
};

export default YouTubeVideo;
