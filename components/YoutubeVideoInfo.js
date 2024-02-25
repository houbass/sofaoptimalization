import Image from 'next/image';

//pic
import PlaySvg from "components/pic/icons/play.svg";

const YouTubeVideo = ({ videoId, youtubeData }) => {


//src={youtubeData[0].thumbnails.medium.url}
//items[0].snippet.thumbnails.medium
//youtubeData[0].items[0].snippet.thumbnails.medium.url
//https://i.ytimg.com/vi/MnbliXIqIrc/mqdefault.jpg


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
                        {videoId
                        ? <img src={`https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`} width={200} height="auto" alt="Video Thumbnail"/> 
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
