import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import Image from 'next/image';
import { apiKeys } from '@/config/apiKeys';

//pic
import PlaySvg from "components/pic/icons/play.svg";

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
                <div 
                style={{
                    width: "200px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "130px"
                }}>
                        {videoInfo 
                        ? <img width={200} height="auto" src={videoInfo?.thumbnails.medium.url} alt="Video Thumbnail"/> 
                        : <div 
                            style={{
                                width: "100%",
                                height: "100%",
                                //background: "orange"
                            }}></div>}
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

            </div>
        </a>
    );
};

export default YouTubeVideo;
