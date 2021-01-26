// next js related
import Head from 'next/head';
import Image from 'next/image';
// Material UI related
import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Button,
    Container,
    Grid,
    Toolbar,
    Typography,
} from '@material-ui/core';
// Custon styles
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';
import ProjectModal from '../components/ProjectModal';

const useStyles = makeStyles((theme) => ({
    rootAppBar: {
        height: '0rem',
        transition: 'height 0.5s ease-out',
        overflow: 'hidden',
    },
    appBar: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100%',
    },
    appBarText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: '0.95rem',
        marginRight: '2.5rem',
        cursor: 'pointer',
    },
    topSectionContainer: {
        width: '100vw',
        height: '50vh',
    },
    topSectionImgGrid1: {
        position: 'relative',
        height: '33.3333%',
        zIndex: 1,
    },
    topSectionImgGrid2: {
        position: 'relative',
        top: '-4.1rem',
        height: '33.3333%',
        zIndex: 0,
        [theme.breakpoints.down('sm')]: {
            top: '-5rem',
        },
        [theme.breakpoints.down('xs')]: {
            top: '-6rem',
        },
    },
    topSectionImgGrid3: {
        position: 'relative',
        top: '-7rem',
        height: '33.3333%',
        zIndex: -1,
        [theme.breakpoints.down('sm')]: {
            top: '-9.5rem',
        },
        [theme.breakpoints.down('xs')]: {
            top: '-11.5rem',
        },
    },
    img1: {},
    img2: {},
    topSectionContainerSprinkle: {
        width: '100vw',
        height: '65vh',
        position: 'absolute',
        top: 0,
        [theme.breakpoints.down('sm')]: {
            height: '45vh',
        },
        [theme.breakpoints.down('xs')]: {
            height: '35vh',
        },
        zIndex: -2,
    },
    topSectionContainerSprinkle1: {
        height: '100%',
    },
    topSectionContainerSprinkle2: {
        height: '100%',
    },
    dpTop: {
        position: 'absolute',
        top: '4rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 2,
        width: '33rem',
        height: '33rem',
        [theme.breakpoints.down('md')]: {
            top: '3rem',
            width: '30rem',
            height: '30rem',
        },
        [theme.breakpoints.down('sm')]: {
            top: '1.5rem',
            width: '25rem',
            height: '25rem',
        },
        [theme.breakpoints.down('xs')]: {
            top: '1.25rem',
            width: '15rem',
            height: '15rem',
        },
    },
    aboutMeContainer: {
        width: '80vw',
        marginTop: '7rem',
        color: '#ffffff',
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            marginTop: '3.5rem',
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: '-2.5rem',
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '-9.25rem',
        },
    },
    aboutMeName: {
        fontWeight: 'bold',
        [theme.breakpoints.down('md')]: {
            fontSize: '2rem',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.75rem',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.25rem',
        },
    },
    aboutMeRole: {
        marginTop: '1rem',
        letterSpacing: '0.25rem',
        fontWeight: 'normal',
        color: '#8a8d90',
        fontSize: '1.5rem',
        [theme.breakpoints.down('md')]: {
            marginTop: '1rem',
            fontSize: '1.5rem',
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: '1rem',
            fontSize: '1.25rem',
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '0.5rem',
            fontSize: '1rem',
        },
    },
    aboutMeDesc: {
        marginTop: '1rem',
        fontWeight: 'normal',
        color: '#ffffff',
        fontSize: '1.25rem',
        [theme.breakpoints.down('md')]: {
            marginTop: '1rem',
            fontSize: '1.25rem',
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: '1rem',
            fontSize: '1.1rem',
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '0.5rem',
            fontSize: '0.9rem',
        },
    },
    contentSections: {
        position: 'relative',
        width: '80vw',
        margin: '5rem auto',
        textAlign: 'center',
    },
    sectionTitle: {
        fontWeight: 'bold',
        letterSpacing: '0.25rem',
        color: '#ffffff',
        fontSize: '1.23rem',
        [theme.breakpoints.down('md')]: {
            fontSize: '1.23rem',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.85rem',
        },
    },
    project1: {
        marginTop: '2rem',
        marginLeft: '30%',
        width: '70rem',
    },
    project2: {
        marginTop: '2rem',
        marginLeft: '-30%',
        width: '70rem',
    },
    projectBottomLeftText: {
        position: 'absolute',
        top: '60%',
        left: '30%',
        width: '17%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
    },
    projectBottomRightText: {
        position: 'absolute',
        top: '60%',
        left: '55%',
        width: '17%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    projectTopLeftText: {
        position: 'absolute',
        top: '-3%',
        left: '30%',
        width: '17%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
    },
    projectTitle: {
        fontWeight: 'bold',
        letterSpacing: '0.25rem',
        color: '#ffffff',
        fontSize: '1.23rem',
        [theme.breakpoints.down('md')]: {
            fontSize: '1.23rem',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.85rem',
        },
    },
    projectDesc: {
        margin: '1rem 0',
        letterSpacing: '0.15rem',
        color: '#8a8d90',
        fontSize: '1.23rem',
        fontStyle: 'italic',
        width: '17rem',
        [theme.breakpoints.down('md')]: {
            fontSize: '1.23rem',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.85rem',
        },
    },
    projectImg: {
        borderRadius: '1.5rem',
        width: '27%',
        height: '20rem',
        overflow: 'hidden',
        padding: '0 !important',
        position: 'relative',
        [theme.breakpoints.down('md')]: {
            height: '17rem',
        },
        [theme.breakpoints.down('sm')]: {
            height: '15rem',
        },
        [theme.breakpoints.down('xs')]: {
            height: '11rem',
        },
    },
    overlayBottomRight: {
        position: 'absolute',
        top: '0rem',
        left: '0rem',
        borderRadius: '1.5rem',
        height: '20rem',
        width: '100%',
        background:
            'linear-gradient(140.8deg, #1E2228 14.54%, rgba(30, 34, 40, 0.822333) 41.36%, rgba(30, 34, 40, 0) 89.34%)',
        [theme.breakpoints.down('md')]: {
            height: '17rem',
        },
        [theme.breakpoints.down('sm')]: {
            height: '15rem',
        },
        [theme.breakpoints.down('xs')]: {
            height: '11rem',
        },
    },
    overlayTopLeft: {
        position: 'absolute',
        top: '0rem',
        left: '0rem',
        borderRadius: '1.5rem',
        height: '20rem',
        width: '100%',
        background:
            'linear-gradient(321.57deg, #1E2228 20.94%, rgba(30, 34, 40, 0) 100%)',
        [theme.breakpoints.down('md')]: {
            height: '17rem',
        },
        [theme.breakpoints.down('sm')]: {
            height: '15rem',
        },
        [theme.breakpoints.down('xs')]: {
            height: '11rem',
        },
    },
    overlayTopRight: {
        position: 'absolute',
        top: '0rem',
        left: '0rem',
        borderRadius: '1.5rem',
        height: '20rem',
        width: '100%',
        background:
            'linear-gradient(33.66deg, #1E2228 16.41%, rgba(30, 34, 40, 0) 97.9%)',
        [theme.breakpoints.down('md')]: {
            height: '17rem',
        },
        [theme.breakpoints.down('sm')]: {
            height: '15rem',
        },
        [theme.breakpoints.down('xs')]: {
            height: '11rem',
        },
    },
    basicButton: {
        color: '#8a8d90',
        fontStyle: 'italic',
        textTransform: 'capitalize',
        borderRadius: '0.25rem',
    },
}));

export default function Home() {
    const classes = useStyles();

    const [showProject, setshowProject] = useState(false);
    const [currentProject, setcurrentProject] = useState(1);

    const handleProjectChange = (num) => {
        setcurrentProject(num);
    };

    const handleModalCLose = () => {
        setTimeout(() => {
            setshowProject(false);
        }, 1000);
    };

    useEffect(() => {
        function handleScroll(event) {
            const body = document.querySelector('body');
            console.log(document.scrollingElement.scrollTop);
            const appBar = document.querySelector('.MuiAppBar-root');
            if (document.scrollingElement.scrollTop > 55) {
                appBar.style.height = '3.5rem';
            } else {
                appBar.style.height = '0rem';
            }
        }
        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <Head>
                <title>Rakhy's Portfolio</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* <header> */}
            <AppBar position="fixed" className={classes.rootAppBar}>
                <Toolbar className={classes.appBar}>
                    <Typography className={classes.appBarText} variant="h5">
                        My Skills
                    </Typography>
                    <Typography className={classes.appBarText} variant="h5">
                        Aspirational Skills
                    </Typography>
                    <Typography className={classes.appBarText} variant="h5">
                        Projects
                    </Typography>
                    <Typography className={classes.appBarText} variant="h5">
                        Work Experience
                    </Typography>
                </Toolbar>
            </AppBar>
            {/* </header> */}

            <main>
                <Grid
                    container
                    direction="column"
                    spacing={0}
                    className={classes.topSectionContainer}
                >
                    <Grid item className={classes.topSectionImgGrid1}>
                        <Image
                            className={classes.img1}
                            src="/img/topSectionImages/Mask Group-2.png"
                            alt="design scrapper"
                            layout="responsive"
                            width={500}
                            height={75}
                            priority
                        />
                    </Grid>
                    <Grid item className={`${classes.topSectionImgGrid2}`}>
                        <Image
                            className={classes.img2}
                            src="/img/topSectionImages/Mask Group-1.png"
                            alt="design scrapper"
                            layout="responsive"
                            width={500}
                            height={100}
                            priority
                        />
                    </Grid>
                    <Grid item className={`${classes.topSectionImgGrid3}`}>
                        <Image
                            className={classes.img2}
                            src="/img/topSectionImages/Mask Group.png"
                            alt="design scrapper"
                            layout="responsive"
                            width={500}
                            height={125}
                            priority
                        />
                    </Grid>
                </Grid>
                <Grid
                    container
                    direction="row"
                    spacing={0}
                    className={classes.topSectionContainerSprinkle}
                >
                    <Grid
                        item
                        xs={6}
                        className={classes.topSectionContainerSprinkle1}
                    >
                        <Image
                            // className={classes.img2}
                            src="/img/topSectionImages/Layer 1 1.png"
                            alt="design scrapper"
                            layout="responsive"
                            width={500}
                            height={400}
                            priority
                        />
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        className={classes.topSectionContainerSprinkle1}
                    >
                        <Image
                            // className={classes.img2}
                            src="/img/topSectionImages/Layer 1 2.png"
                            alt="design scrapper"
                            layout="responsive"
                            width={500}
                            height={400}
                            priority
                        />
                    </Grid>
                </Grid>
                <Container className={classes.dpTop}>
                    <Image
                        src="/img/topSectionImages/Ellipse 21.png"
                        alt="design scrapper"
                        layout="responsive"
                        width={10}
                        height={10}
                        priority
                    />
                </Container>
                <Container className={classes.aboutMeContainer}>
                    <Typography variant="h2" className={classes.aboutMeName}>
                        Rakhsanth Rammohan
                    </Typography>
                    <Typography variant="h6" className={classes.aboutMeRole}>
                        Web Developer
                    </Typography>
                    <Typography variant="body1" className={classes.aboutMeDesc}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Vestibulum at lobortis magna. Sed interdum metus et eros
                        consequat, a molestie sem egestas. In suscipit justo sit
                        amet ullamcorper molestie. Nulla facilisi. Pellentesque
                        bibendum accumsan risus, eget venenatis magna faucibus
                        eget. Nam et vulputate erat.
                    </Typography>
                </Container>
                <Grid
                    container
                    spacing={3}
                    direction="column"
                    className={classes.contentSections}
                >
                    <Typography variant="h3" className={classes.sectionTitle}>
                        Projects
                    </Typography>
                    <Grid item xs={12} className={classes.project1}>
                        <div style={{ position: 'relative' }}>
                            <Container className={classes.projectImg}>
                                <Image
                                    src="/img/projects/natours.png"
                                    alt="tourist guide landing page"
                                    // width={3}
                                    // height={3}
                                    layout="fill"
                                    objectFit="fill"
                                    priority
                                />

                                <div className={classes.overlayTopRight}></div>
                            </Container>
                            <div className={classes.projectBottomLeftText}>
                                <Typography
                                    variant="h3"
                                    className={classes.projectTitle}
                                >
                                    Natours
                                </Typography>
                                <Typography
                                    variant="h3"
                                    className={classes.projectDesc}
                                >
                                    A responsive landing page for a tour
                                    discovery app
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={classes.basicButton}
                                    onClick={() => {
                                        setshowProject(true);
                                    }}
                                >
                                    Learn more
                                </Button>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} className={classes.project2}>
                        <div style={{ position: 'relative' }}>
                            <Container className={classes.projectImg}>
                                <Image
                                    src="/img/projects/techNetwork.png"
                                    alt="tourist guide landing page"
                                    // width={3}
                                    // height={3}
                                    layout="fill"
                                    objectFit="fill"
                                    priority
                                />

                                <div className={classes.overlayTopLeft}></div>
                            </Container>
                            <div className={classes.projectBottomRightText}>
                                <Typography
                                    variant="h3"
                                    className={classes.projectTitle}
                                >
                                    Natours
                                </Typography>
                                <Typography
                                    variant="h3"
                                    className={classes.projectDesc}
                                >
                                    A responsive landing page for a tour
                                    discovery app
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={classes.basicButton}
                                    onClick={() => {
                                        setshowProject(true);
                                    }}
                                >
                                    Learn more
                                </Button>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} className={classes.project1}>
                        <div style={{ position: 'relative' }}>
                            <Container className={classes.projectImg}>
                                <Image
                                    src="/img/projects/homeRental.png"
                                    alt="tourist guide landing page"
                                    // width={3}
                                    // height={3}
                                    layout="fill"
                                    objectFit="fill"
                                    priority
                                />

                                <div
                                    className={classes.overlayBottomRight}
                                ></div>
                            </Container>
                            <div className={classes.projectTopLeftText}>
                                <Typography
                                    variant="h3"
                                    className={classes.projectTitle}
                                >
                                    Natours
                                </Typography>
                                <Typography
                                    variant="h3"
                                    className={classes.projectDesc}
                                >
                                    A responsive landing page for a tour
                                    discovery app
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={classes.basicButton}
                                    onClick={() => {
                                        setshowProject(true);
                                    }}
                                >
                                    Learn more
                                </Button>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} className={classes.project2}>
                        <div style={{ position: 'relative' }}>
                            <Container className={classes.projectImg}>
                                <Image
                                    src="/img/projects/mockdemy.png"
                                    alt="tourist guide landing page"
                                    // width={3}
                                    // height={3}
                                    layout="fill"
                                    objectFit="fill"
                                    priority
                                />

                                <div className={classes.overlayTopLeft}></div>
                            </Container>
                            <div className={classes.projectBottomRightText}>
                                <Typography
                                    variant="h3"
                                    className={classes.projectTitle}
                                >
                                    Natours
                                </Typography>
                                <Typography
                                    variant="h3"
                                    className={classes.projectDesc}
                                >
                                    A responsive landing page for a tour
                                    discovery app
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={classes.basicButton}
                                    onClick={() => {
                                        setshowProject(true);
                                    }}
                                >
                                    Learn more
                                </Button>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} className={classes.project1}>
                        <div style={{ position: 'relative' }}>
                            <Container className={classes.projectImg}>
                                <Image
                                    src="/img/projects/tetrisClone.png"
                                    alt="tourist guide landing page"
                                    // width={3}
                                    // height={3}
                                    layout="fill"
                                    objectFit="fill"
                                    priority
                                />

                                <div
                                    className={classes.overlayBottomRight}
                                ></div>
                            </Container>
                            <div className={classes.projectTopLeftText}>
                                <Typography
                                    variant="h3"
                                    className={classes.projectTitle}
                                >
                                    Natours
                                </Typography>
                                <Typography
                                    variant="h3"
                                    className={classes.projectDesc}
                                >
                                    A responsive landing page for a tour
                                    discovery app
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={classes.basicButton}
                                    onClick={() => {
                                        setshowProject(true);
                                    }}
                                >
                                    Learn more
                                </Button>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} className={classes.project2}>
                        <div style={{ position: 'relative' }}>
                            <Container className={classes.projectImg}>
                                <Image
                                    src="/img/projects/notesPro.png"
                                    alt="tourist guide landing page"
                                    // width={3}
                                    // height={3}
                                    layout="fill"
                                    objectFit="fill"
                                    priority
                                />

                                <div className={classes.overlayTopLeft}></div>
                            </Container>
                            <div className={classes.projectBottomRightText}>
                                <Typography
                                    variant="h3"
                                    className={classes.projectTitle}
                                >
                                    Natours
                                </Typography>
                                <Typography
                                    variant="h3"
                                    className={classes.projectDesc}
                                >
                                    A responsive landing page for a tour
                                    discovery app
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={classes.basicButton}
                                    onClick={() => {
                                        setshowProject(true);
                                    }}
                                >
                                    Learn more
                                </Button>
                            </div>
                        </div>
                    </Grid>
                </Grid>
                {showProject ? (
                    <ProjectModal
                        currentProject={currentProject}
                        handleModalCLose={handleModalCLose}
                        handleProjectChange={handleProjectChange}
                    />
                ) : null}
            </main>

            <footer style={{ height: '110vh' }}></footer>
        </div>
    );
}
