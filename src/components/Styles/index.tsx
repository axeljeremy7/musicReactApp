import styled from "styled-components";

// export const GridArea = styled.div`
//     display: grid;
//     grid-template-areas: ${props=>props.templateAreas ? props.templateAreas : 'unset'};
//     grid-gap: ${props=>props.gap ? props.gap : '0'};
//     padding: ${props=>props.padding ? props.padding : '0'};
//     margin: ${props=>props.margin ? props.margin : '0'};
//     border: ${props=>props.border ? props.border : 'unset'};
//     border-radius: ${props=>props.borderRadius ? props.borderRadius : 'unset'};
//     font-family: ${props=>props.fontFamily ? props.fontFamily : 'inherit'};
//     font-size: ${props=>props.fontSize ? props.fontSize : '12px'};
//     font-weight: ${props=>props.fontWeight ? props.fontWeight : 'normal'};
//     color: ${props=>props.color ? props.color : 'inherit'};
//     width: ${props=>props.width ? props.width : '100%'};
//     height: ${props=>props.height ? props.height : 'auto'};
//     background-color: ${props=>props.backgroundColor ? props.backgroundColor : 'inherit'};
// `;

interface GridProps {
  readonly display?: string;
  readonly templateColumns?: string;
  readonly columnGap?: string;
  readonly templateRows?: string;
  readonly rowGap?: string;
  readonly justifyContent?: string;
  readonly alignItems?: string;
  readonly padding?: string;
  readonly margin?: string;
  readonly border?: string;
  readonly borderRadius?: string;
  readonly fontFamily?: string;
  readonly fontSize?: string;
  readonly fontWeight?: string;
  readonly backgroundColor?: string;
  readonly textDecoration?: string;
  readonly textAlign?: string;
  readonly justifySelf?: string;
  readonly width?: string;
  readonly height?: string;
  readonly cursor?: string;
  readonly lineHeight?: string;
  readonly backgroundImage?: string;
  readonly position?: string;
  readonly top?: string;
  readonly bottom?: string;
  readonly left?: string;
  readonly right?: string;
  readonly zIndex?: string;
}

export const Grid = styled.div<GridProps>`
  display: ${props => (props.display ? props.display : "Grid")};
  grid-template-columns: ${props =>
    props.templateColumns ? props.templateColumns : "auto"};
  grid-column-gap: ${props => (props.columnGap ? props.columnGap : "0")};
  grid-template-rows: ${props =>
    props.templateRows ? props.templateRows : "auto"};
  grid-row-gap: ${props => (props.rowGap ? props.rowGap : "0")};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : "normal"};
  align-items: ${props => (props.alignItems ? props.alignItems : "center")};
  justify-self: ${props => (props.justifySelf ? props.justifySelf : "normal")};
  width: ${props => (props.width ? props.width : "auto")};
  height: ${props => (props.height ? props.height : "auto")};
  line-height: ${props => (props.lineHeight ? props.lineHeight : "normal")};
  padding: ${props => (props.padding ? props.padding : "0")};
  margin: ${props => (props.margin ? props.margin : "0")};
  border: ${props => (props.border ? props.border : "unset")};
  border-radius: ${props =>
    props.borderRadius ? props.borderRadius : "unset"};
  font-family: ${props => (props.fontFamily ? props.fontFamily : "inherit")};
  font-size: ${props => (props.fontSize ? props.fontSize : "12px")};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : "normal")};
  color: ${props => (props.color ? props.color : "inherit")};
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : "inherit"};
  text-decoration: ${props =>
    props.textDecoration ? props.textDecoration : "unset"};
  text-align: ${props => (props.textAlign ? props.textAlign : "unset")};
  cursor: ${props => (props.cursor ? props.cursor : "auto")};
  background-image: ${props => (props.backgroundImage ? props.backgroundImage : "unset")};
  
  &.position {
    position: ${props => (props.position ? props.position : "unset")};
    top: ${props => (props.top ? props.top : "unset")};
    bottom: ${props => (props.bottom ? props.bottom : "unset")};
    left: ${props => (props.left ? props.left : "unset")};
    right: ${props => (props.right ? props.right : "unset")};
    z-index: ${props => (props.zIndex ? props.zIndex : "unset")};;
  }
`;

interface ImageProps {
  readonly display?: string;
  readonly padding?: string;
  readonly margin?: string;
  readonly border?: string;
  readonly borderRadius?: string;
  readonly backgroundColor?: string;
  readonly justifySelf?: string;
  readonly width?: string;
  readonly height?: string;
  readonly cursor?: string;
}

export const Image = styled.img<ImageProps>`
  display: ${props => (props.display ? props.display : "Grid")};
  justify-self: ${props => (props.justifySelf ? props.justifySelf : "normal")};
  width: ${props => (props.width ? props.width : "auto")};
  height: ${props => (props.height ? props.height : "auto")};
  padding: ${props => (props.padding ? props.padding : "0")};
  margin: ${props => (props.margin ? props.margin : "0")};
  border: ${props => (props.border ? props.border : "unset")};
  border-radius: ${props =>
    props.borderRadius ? props.borderRadius : "unset"};
  color: ${props => (props.color ? props.color : "inherit")};
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : "inherit"};
  cursor: ${props => (props.cursor ? props.cursor : "auto")};
`;

export const Flex = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;
