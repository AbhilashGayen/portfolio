import { createGlobalStyle } from "styled-components"
import Katwijk from "./Katwijk.ttf"
import Graph from "./Graph.ttf"
import Klima from "./Klima.ttf"
import HindSiliguri from "./HindSiliguri.ttf"
import WorkSans from "./WorkSans.ttf"

export default createGlobalStyle`
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
    @font-face {
        font-family: 'WorkSans';
        src: url(${WorkSans}) format('truetype');
    }
`
