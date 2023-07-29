import React, { useEffect, useState } from "react";


export default function useProgressiveImg(lowQualitySrc, highQualitySrc) {
    const [src, setSrc] = useState();

    useEffect(() => {
        setSrc(lowQualitySrc);

        const img = new Image();
        img.src = highQualitySrc;

        img.onload = () => {
            setSrc(highQualitySrc);
        };
    }, [lowQualitySrc, highQualitySrc]);

    return [src];
}