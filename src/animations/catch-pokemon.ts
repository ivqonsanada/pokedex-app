import { keyframes } from "@emotion/react";

export const catchPokemon = keyframes`
    from {
        transform: translate3d(0,0,0);
    }

    to {
        transform: translate3d(0,-100%,0);
    }
`;
