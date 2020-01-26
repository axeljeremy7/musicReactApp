import styled from 'styled-components';

export const GridArea = styled.div`
    display: grid;
    grid-template-areas: ${props=>props.templateAreas ? props.templateAreas : 'unset'};
    grid-gap: ${props=>props.gap ? props.gap : '0'};
    padding: ${props=>props.padding ? props.padding : '0'};
    margin: ${props=>props.margin ? props.margin : '0'};
    border: ${props=>props.border ? props.border : 'unset'};
    border-radius: ${props=>props.borderRadius ? props.borderRadius : 'unset'};
    font-family: circe-rounded;
    font-size: ${props=>props.fontSize ? props.fontSize : '14px'};
    font-weight: ${props=>props.fontWeight ? props.fontWeight : 'normal'};
    color: ${props=>props.color ? props.color : 'inherit'};
    width: ${props=>props.width ? props.width : 'auto'};
    height: ${props=>props.height ? props.height : 'auto'};
    background-color: ${props=>props.backgroundColor ? props.backgroundColor : 'inherit'};
`;

export const Grid = styled.div`
    box-sizing: border-box;
    display: grid;
    grid-template-columns: ${props=>props.templateColumns ? props.templateColumns : 'auto'};
    grid-column-gap: ${props=>props.columnGap ? props.columnGap : '0'};
    grid-template-rows: ${props=>props.templateRows ? props.templateRows : 'auto'};
    grid-row-gap: ${props=>props.rowGap ? props.rowGap : '0'};
    justify-content: ${props=>props.justifyContent ? props.justifyContent : 'normal'};
    align-items: ${props=>props.alignItems ? props.alignItems : 'center'};
    padding: ${props=>props.padding ? props.padding : '0'};
    margin: ${props=>props.margin ? props.margin : '0'};
    border: ${props=>props.border ? props.border : 'unset'};
    border-radius: ${props=>props.borderRadius ? props.borderRadius : 'unset'};
    font-family: ${props=>props.fontFamily ? props.fontFamily : 'inherit'};
    font-size: ${props=>props.fontSize ? props.fontSize : '14px'};
    font-weight: ${props=>props.fontWeight ? props.fontWeight : 'normal'};
    color: ${props=>props.color ? props.color : 'inherit'};
    background-color: ${props=>props.backgroundColor ? props.backgroundColor : 'inherit'};
    text-decoration: ${props=>props.textDecoration ? props.textDecoration : 'unset'};
    text-align: ${props=>props.textAlign ? props.textAlign : 'unset'};
    width: ${props=>props.width ? props.width : 'auto'};
    height: ${props=>props.height ? props.height : 'auto'};
    cursor: ${props=>props.cursor ? props.cursor : 'auto'};

    > a.activeLink {
        background-color: yellow;
    }
`;

export const Flex = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
`;