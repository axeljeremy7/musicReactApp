import React, { useContext, useState } from "react";
import { Grid } from "../Styles";
import styled from "styled-components";
import { ToggleSidebarContext } from "../../context/toggleSidebar";
import Prev from "../Icons/prev";
import Next from "../Icons/next";
import { Link } from "react-router-dom";
import { IArtist } from "../../pages/Artist";
import { ISong, IAlbum } from "../../pages/Album";
import Heart from "../Icons/Heart";
import Play from "../Icons/Play";
import Plus from "../Icons/Plus";
import Star from "../Icons/Star";
import Explicit from "../Icons/Explicit";

interface ImageProps {
  readonly display?: string;
  readonly padding?: string;
  readonly margin?: string;
  readonly border?: string;
  readonly borderRadius?: string;
  readonly backgroundColor?: string;
  readonly width?: string;
  readonly height?: string;
  readonly cursor?: string;
}

const Image = styled.img<ImageProps>`
  padding: ${props => (props.padding ? props.padding : "0")};
  margin: ${props => (props.margin ? props.margin : "0")};
  border: ${props => (props.border ? props.border : "unset")};
  border-radius: ${props =>
    props.borderRadius ? props.borderRadius : "unset"};
  width: ${props => (props.width ? props.width : "100%")};
  height: ${props => (props.height ? props.height : "auto")};
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : "inherit"};
  cursor: ${props => (props.cursor ? props.cursor : "pointer")};

  &.show {
    animation: fadeIn ease-in-out 1s;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

interface ISlider {
  array: Array<any>;
  title: string;
  borderRadius?: string;
  type?: string;
  numOfElements: number;
}

const Slider: React.FC<ISlider> = ({
  array,
  title,
  borderRadius = "unset",
  type = "SONG",
  numOfElements = 9
}) => {
  // const toggleSidebar = useContext(ToggleSidebarContext);
  // const [slides, ] = useState(Math.round(array.length / numOfElements));
  const [state, setState] = useState({
    slideIndex: 1,
    prevIndex: 0,
    nextIndex: 1 * numOfElements - 1
  });
  // const numOfSlides = Math.round(array.length / numOfElements);
  // console.log({slides});
  // console.log({len: array.length})
  return (
    <Grid padding="16px 0 16px 0">
      <Grid
        fontSize="16px"
        color="var(--platinum)"
        fontWeight="700"
        padding="0 0 16px 0"
      >
        {title}
      </Grid>
      <Grid width="100%" templateColumns="16px auto 16px" columnGap="4px">
        <Grid
          width="16px"
          height="16px"
          onClick={() => {
            if (state.prevIndex - numOfElements > 0) {
              setState({
                ...state,
                slideIndex: state.slideIndex - 1,
                prevIndex: (state.slideIndex - 2) * numOfElements,
                nextIndex: (state.slideIndex - 1) * numOfElements - 1
              });
            } else {
              setState({
                ...state,
                slideIndex: 1,
                prevIndex: 0,
                nextIndex: numOfElements - 1
              });
            }
          }}
        >
          <Prev width="16px" height="16px" color="var(--platinum)"></Prev>
        </Grid>
        {type === "SONG" && (
          <Grid
            templateColumns="repeat(3, 1fr)"
            templateRows="50px 50px 50px"
            columnGap="32px"
            rowGap="16px"
          >
            {array.length > 0 &&
              array.map((item: ISong, index: number) => {
                return (
                  index >= state.prevIndex &&
                  index <= state.nextIndex && (
                    <Link
                      key={index}
                      to={{ pathname: `/Album/${item.id}` }}
                      replace={false}
                    >
                      <Grid
                        templateColumns="50px auto 24px 24px"
                        columnGap="8px"
                      >
                        <Image
                          width={"50px"}
                          height={"50px"}
                          src={item.img}
                          borderRadius={borderRadius}
                          className="show"
                        />
                        <Grid
                          cursor="pointer"
                          color="var(--platinum)"
                          justifyContent="flex-start"
                          templateRows='26px 20px'
                          rowGap='4px'
                        >
                          <Grid
                            templateColumns="auto auto auto"
                            justifyContent="flex-start"
                            columnGap="8px"
                          >
                            <Grid color="var(--platinum)" fontSize="14px" cursor='pointer'>
                              {item.name}
                            </Grid>
                            
                              {item.star && (
                                <Grid><Star
                                  color="#66717E"
                                  width="8px"
                                  height="8px"
                                /></Grid>
                              )}
                            
                            
                              {item.explicit && (
                                <Grid><Explicit
                                  color="#66717E"
                                  width="8px"
                                  height="8px"
                                /></Grid>
                              )}
                            
                          </Grid>
                          <Grid color='var(--aurora)' fontSize='12px'>
                            {item.album.name}
                          </Grid>
                        </Grid>
                        <Grid
                          justifyContent="center"
                          onClick={() => {
                            console.log("Play2");
                          }}
                        >
                          <Play
                            color="var(--aurora)"
                            width="20px"
                            height="20px"
                          />
                        </Grid>
                        <Grid
                          justifyContent="center"
                          onClick={() => {
                            console.log("Plus");
                          }}
                        >
                          <Plus
                            color="var(--aurora)"
                            width="20px"
                            height="20px"
                          />
                        </Grid>
                      </Grid>
                    </Link>
                  )
                );
              })}
          </Grid>
        )}
        <Grid
          width="16px"
          height="16px"
          onClick={() => {
            if (
              state.nextIndex + (array.length - numOfElements) <
              array.length
            ) {
              setState({
                ...state,
                slideIndex: state.slideIndex + 1,
                prevIndex: state.slideIndex * numOfElements,
                nextIndex: (state.slideIndex + 1) * numOfElements - 1
              });
            } else {
              setState({
                ...state,
                slideIndex: 1,
                prevIndex: 0,
                nextIndex: numOfElements - 1
              });
            }
          }}
        >
          <Next width="16px" height="16px" color="var(--platinum)"></Next>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default React.memo(Slider);
