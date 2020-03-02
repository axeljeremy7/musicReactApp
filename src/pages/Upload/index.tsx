import React from "react";
import {IPage} from "../index";
import {Grid} from "../../components/Styles";
import {Link} from "react-router-dom";
import soundtrackImg from "../../assets/upload-image-one.png";
import videoImg from "../../assets/video-bg-upload.jpeg";
import albumImg from "../../assets/album-bg-upload.jpeg";


const Upload: React.FC = () => {
    return (
        <Grid padding={'20px 32px 0 32px'} color={'var(--platinum)'}>
            <Grid fontSize={'24px'}>Choose One...</Grid>
            <Grid templateColumns={'2fr 1fr'} columnGap={'20px'} fontSize={'32px'} color={'var(--platinum)'}
                  alignItems={'normal'}
                  height={'512px'}>
                <Grid justifyContent={'center'} backgroundImage={'url(' + soundtrackImg + ')'}>
                    <Link
                        to={{pathname: `/upload/soundtrack`}}
                        style={{color: 'var(--platinum)', fontSize: '32px'}} className={'hover-color'}
                    >
                        Soundtrack
                    </Link>
                </Grid>
                <Grid alignItems={'normal'} rowGap={'20px'} justifyContent={'center'} templateRows={'auto auto'}>
                    <Grid justifyContent={'center'} backgroundImage={'url(' + videoImg + ')'}
                          className={'background-fit'} templateRows={'auto auto'} alignItems={'center'}>
                        <Grid justifyContent={'center'} backgroundColor={'transparent'}>
                            <Link
                                to={{pathname: `/upload/soundtrack`}}
                                style={{color: 'var(--platinum)', fontSize: '32px'}} className={'hover-color'}
                            >
                                Music Video
                            </Link>
                        </Grid>
                        <Grid backgroundColor={'transparent'} fontWeight={'bold'} textAlign={'center'}>
                            Upload your own music videos! (Must have at least 1000 followers to use)
                        </Grid>
                    </Grid>
                    <Grid justifyContent={'center'} backgroundImage={'url(' + albumImg + ')'}
                          className={'background-fit'}>

                        <Grid justifyContent={'center'} backgroundColor={'transparent'}>
                            <Link
                                to={{pathname: `/upload/soundtrack`}}
                                style={{color: 'var(--platinum)', fontSize: '32px'}} className={'hover-color'}
                            >
                                Album
                            </Link>
                        </Grid>

                        <Grid backgroundColor={'transparent'} fontWeight={'bold'} textAlign={'center'}>
                            Upload your own albums! (Maximum of one album upload per two weeks)
                        </Grid>
                    </Grid>

                </Grid>

            </Grid>
            <Grid fontSize={'24px'}>Terms of Agreement:</Grid>
            <div>
                By uploading your soundtracks, albums, and/or music videos onto MusicU Studios, you acknowledge and
                agree to
                <a
                    href="#" style={{color: 'var(--dazzle-blue)'}} className={'hover-color'}> MusicU Studios
                    Terms</a> and
                <a href="#"
                   style={{color: 'var(--dazzle-blue)'}} className={'hover-color'}> Conditions
                    and
                    Community Guidelines</a>
            </div>

        </Grid>);
};


const Page: IPage = {
    routeProps: {
        path: "/Upload",
        component: Upload,
        exact: true
    },
    name: "Upload"
};

export default Page;