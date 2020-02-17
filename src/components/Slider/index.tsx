import React, { useContext, useState } from 'react'
import { Grid } from '../Styles'
import styled from 'styled-components';
import {ToggleSidebarContext} from "../../context/toggleSidebar";
import Prev from '../Icons/prev';
import Next from '../Icons/next';
import { Link } from 'react-router-dom';
import { IArtist } from '../../pages/Artist';

interface ImageProps {
    readonly display?: string;
    readonly padding?: string;
    readonly margin?: string;
    readonly border?: string;
    readonly borderRadius?: string;
    readonly backgroundColor?: string;
    readonly width?: string;
    readonly height?: string;

  };

const Image = styled.img<ImageProps>`
    padding: ${props=>props.padding ? props.padding : '0'};
    margin: ${props=>props.margin ? props.margin : '0'};
    border: ${props=>props.border ? props.border : 'unset'};
    border-radius: ${props=>props.borderRadius ? props.borderRadius : 'unset'};
    width: ${props => props.width ? props.width : '100%'};
    height: ${props=>props.height ? props.height : 'auto'};
    background-color: ${props=>props.backgroundColor ? props.backgroundColor : 'inherit'}; 
    
    &.show {
        animation: fadeIn ease-in-out 1s;
    }

    @keyframes fadeIn {
        0% {
            opacity:0;
        }
        100% {
            opacity:1;
        }
    }
`;

interface ISlider {
    array: Array<any>
    title: string
    borderRadius?: string
    type?: string
}

const Slider: React.FC<ISlider> = ({array , title, borderRadius = 'unset', type = 'artist'}) => {
    const toggleSidebar = useContext(ToggleSidebarContext);
    const [state, setState] = useState({prevIndex: 0, nextIndex: 7})
    return (
        <Grid padding='16px 0 16px 0'>
        <Grid fontSize='16px' color='var(--platinum)' fontWeight='700' padding='0 0 16px 0'>{title}</Grid>
        <Grid width='100%' templateColumns='16px auto 16px' columnGap='4px'>
            <Grid width='16px' height='16px' margin='-16px 0 0 0'
                onClick={() => 
                    {
                        if(state.prevIndex - 8 > 0){
                            setState({prevIndex: state.prevIndex - 8, nextIndex: state.nextIndex - 8})
                        }else{
                            setState({prevIndex: 0, nextIndex: 7})
                        }
                    }
                }
            >
                <Prev width='16px' height='16px' color='var(--platinum)'></Prev>
            </Grid>
            {type === 'artist' && <Grid templateColumns='repeat(8, 1fr)' columnGap='16px' justifyContent='center'>
                {array.length > 0 &&  array.map((item : IArtist, index: number) => 
                    {
                        return index >= state.prevIndex && index <= state.nextIndex && 
                        <Link key={index} to={`Artists/${item.id}`}>
                        <Grid cursor='pointer'>
                            <Image 
                                width={toggleSidebar.state.show ? 'calc(calc(100vw - 150px - 40px - 40px - 112px) / 8)' : 'calc(calc(100vw - 40px - 40px - 112px) / 8)'}
                                height={toggleSidebar.state.show ? 'calc(calc(100vw - 150px - 40px - 40px  - 112px) / 8)' : 'calc(calc(100vw - 40px - 40px - 112px) / 8)'}
                                src={item.img} 
                                borderRadius={borderRadius}
                                className='show'/>
                            <Grid cursor='pointer' height='16px' fontSize='10px' lineHeight='16px' textAlign='center' color='var(--platinum)'>{item.name}</Grid>
                        </Grid>
                        </Link>
                    })
                }
            </Grid>}
            {type === 'music' && <Grid templateColumns='repeat(8, 1fr)' columnGap='16px' justifyContent='center'>
                {array.length > 0 &&  array.map((item : IArtist, index: number) => 
                    {
                        return index >= state.prevIndex && index <= state.nextIndex && 
                        <Link key={index} to={`Album/${item.id}`}>
                        <Grid cursor='pointer'>
                            <Image 
                                width={toggleSidebar.state.show ? 'calc(calc(100vw - 150px - 40px - 40px - 112px) / 8)' : 'calc(calc(100vw - 40px - 40px - 112px) / 8)'}
                                height={toggleSidebar.state.show ? 'calc(calc(100vw - 150px - 40px - 40px  - 112px) / 8)' : 'calc(calc(100vw - 40px - 40px - 112px) / 8)'}
                                src={item.img} 
                                borderRadius={borderRadius}
                                className='show'/>
                            <Grid cursor='pointer' height='16px' fontSize='10px' lineHeight='16px' textAlign='center' color='var(--platinum)'>{item.name}</Grid>
                        </Grid>
                        </Link>
                    })
                }
            </Grid>}
            <Grid width='16px' height='16px' margin='-16px 0 0 0'
                onClick={() => 
                    {
                        if(state.nextIndex + 8 < array.length){
                            setState({prevIndex: state.prevIndex + 8, nextIndex: state.nextIndex + 8})
                        }else{
                            setState({prevIndex: 0, nextIndex: 7})
                        }
                    }
                }
            >
                <Next width='16px' height='16px' color='var(--platinum)'></Next>
            </Grid>
        </Grid>
        </Grid>
    )
}

export default React.memo(Slider)


// calc(calc(100vw - 150px - 40px - 40px - 112px)
// 100vw - sidebar - padding - arrows - columnGap
