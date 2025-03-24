import { useRef } from "react";
import useGestureRecognition from "../components/hands-capture/hooks";

export default function Home() {
    const videoElement = useRef<HTMLVideoElement | null>(null);
    const canvasEl = useRef<HTMLCanvasElement | null>(null);
    const { maxVideoWidth, maxVideoHeight } = useGestureRecognition({
        videoElement,
        canvasEl
    });
    return (
        <div className='flex items-center justify-center'>
            <video
                style={{ display: 'none' }}
                className='video'
                playsInline
                ref={videoElement}
            />
            <canvas 
                ref={canvasEl} 
                width={maxVideoWidth} 
                height={maxVideoHeight} 
                />
        </div>
    );
}