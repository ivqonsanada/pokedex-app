import { keyframes } from "@emotion/react";

export const pokeballCatch = keyframes`
    from {
        transform: translate3d(0,0,0), rotate(0);
    }

    50% {
        transform: translate3d(4px,-4px,0) rotate(30deg)
    }

    to {
        transform: translate3d(0,0,0) rotate(0);
    }
  `;
