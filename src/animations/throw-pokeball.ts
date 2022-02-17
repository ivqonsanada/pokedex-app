import { keyframes } from "@emotion/react";

export const throwPokeBall = (height: number) => keyframes`
    from {
       
        transform: translate3d(0,0,0), rotate(0);
    }

    10% {
        transform: translate3d(-20%,-${height / 4}px,0) rotate(360deg) scale(0.8);
    }
    
    50% {
        transform: translate3d(0,-${height}px,0) rotate(1080deg) scale(0.4);
    }

    77%, 90% {
        transform: translate3d(0,-${height}px,0) rotate(1440deg) scale(0.4);
    }

    70%, 72% {
        transform: translate3d(0,-${height - 16}px,0) rotate(1440deg) scale(0.4);
    }

    85% {
        transform: translate3d(0,-${height - 12}px,0) rotate(1440deg) scale(0.4);
    }

    95% {
        transform: translate3d(0,-${height - 4}px,0) rotate(1440deg) scale(0.4);
    }

    to {
        transform: translate3d(4px,-${height - 4}px,0) rotate(1480deg) scale(0.4);
    }
  `;
