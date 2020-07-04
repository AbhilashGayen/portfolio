import { createGlobalStyle } from "styled-components";
import Muli from "./Muli.ttf";
import Katwijk from "./Katwijk.ttf";
import Graph from "./Graph.ttf";
import Klima from "./Klima.ttf";
import HindSiliguri from "./HindSiliguri.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'Muli';
        src: url(${Muli}) format('truetype');
    }
    @font-face {
        font-family: 'Katwijk';
        src: url(${Katwijk}) format('truetype');
    }
    @font-face {
        font-family: 'Graph';
        src: url(${Graph}) format('truetype');
    }
    @font-face {
        font-family: 'Klima';
        src: url(${Klima}) format('truetype');
    }
    @font-face {
        font-family: 'HindSiliguri';
        src: url(${HindSiliguri}) format('truetype');
    }
`;
