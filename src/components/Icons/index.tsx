import styled from "styled-components";


export interface ISVG {
    width?: string,
    height?: string,
    color?: string,
}

export const SVG = styled.svg`
    &:hover {
        fill: var(--yellow);
    }
`;