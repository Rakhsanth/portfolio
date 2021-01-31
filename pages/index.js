// next js related
import Head from 'next/head';
import Image from 'next/image';
// Material UI related
import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Container,
    Grid,
    Link,
    SvgIcon,
    Toolbar,
    Typography,
} from '@material-ui/core';
import clsx from 'clsx';
// Custon styles
import styles from '../styles/Home.module.css';
import { useState, useEffect, useRef } from 'react';
import ProjectModal from '../components/ProjectModal';
import {
    primaryColor,
    secondaryColor,
    emptySTarColor,
    fullStarColor,
    lightTextColor,
} from '../utils/constatnts';
// anime js
import anime from 'animejs';
// const anime = require('animejs');

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
        textAlign: 'start',
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
    contactContainer: {
        marginTop: '2rem',
        backgroundColor: secondaryColor,
        borderRadius: '1rem',
        color: '#fff',
        height: '20rem',
    },
    contactItem: {
        width: '75%',
    },
    contactItemText: {
        width: '50%',
        margin: '0 auto',
    },
    contactItemTextDetailContainer: {
        alignSelf: 'center',
    },
    contactItemTextDetail: {
        textAlign: 'start',
        display: 'block',
        color: '#fff',
    },
    contentSections: {
        position: 'relative',
        width: '80vw',
        minHeight: '30rem',
        margin: '5rem auto',
        textAlign: 'center',
        overflow: 'hidden',
    },
    skillContentSections: {
        position: 'relative',
        width: '80vw',
        minHeight: '30rem',
        margin: '5rem auto',
        textAlign: 'center',
        overflow: 'visible',
    },
    aspiantionalSkillContentSections: {
        position: 'relative',
        width: '80vw',
        minHeight: '15rem',
        margin: '5rem auto',
        textAlign: 'center',
        overflow: 'visible',
    },
    sectionTitle: {
        position: 'absolute',
        top: '0',
        left: '50%',
        transform: 'translateX(-50%)',
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
    skillsContainer: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute',
        width: '80%',
        height: '50%',
        overflow: 'visible',
    },
    skillCard: {
        width: '5rem',
        height: '5.5rem',
        backgroundColor: primaryColor,
        padding: '0.5rem',
        position: 'relative',
        overflow: 'visible',
        '&:hover > $cardTitleDesc': {
            width: '25rem',
            height: '10rem',
            opacity: 1,
            pointerEvents: 'fill',
        },
    },
    html: {
        zIndex: 0,
        '&:hover': {
            zIndex: 50,
        },
    },
    css3: {
        position: 'absolute',
        top: '0',
        left: '30%',
        zIndex: 9,
        '&:hover': {
            zIndex: 50,
        },
    },
    javascript: {
        position: 'absolute',
        top: '0',
        left: '60%',
        zIndex: 19,
        '&:hover': {
            zIndex: 50,
        },
    },
    reactJs: {
        position: 'absolute',
        top: '0',
        left: '90%',
        zIndex: 29,
        '&:hover': {
            zIndex: 50,
        },
    },
    redux: {
        position: 'absolute',
        top: '25%',
        left: '15%',
        zIndex: 5,
        '&:hover': {
            zIndex: 50,
        },
    },
    nodeJs: {
        position: 'absolute',
        top: '25%',
        left: '35%',
        zIndex: 14,
        '&:hover': {
            zIndex: 50,
        },
    },
    sass: {
        position: 'absolute',
        top: '25%',
        left: '55%',
        zIndex: 24,
        '&:hover': {
            zIndex: 50,
        },
    },
    python: {
        position: 'absolute',
        top: '25%',
        left: '75%',
        zIndex: 34,
        '&:hover': {
            zIndex: 50,
        },
    },
    java: {
        position: 'absolute',
        top: '45%',
        left: '0%',
        zIndex: 3,
        '&:hover': {
            zIndex: 50,
        },
    },
    cpp: {
        position: 'absolute',
        top: '45%',
        left: '30%',
        zIndex: 10,
        '&:hover': {
            zIndex: 50,
        },
    },
    mongodb: {
        position: 'absolute',
        top: '45%',
        left: '60%',
        zIndex: 20,
        '&:hover': {
            zIndex: 50,
        },
    },
    nextJs: {
        position: 'absolute',
        top: '45%',
        left: '85%',
        zIndex: 30,
        '&:hover': {
            zIndex: 50,
        },
    },
    git: {
        position: 'absolute',
        top: '65%',
        left: '20%',
        zIndex: 2,
        '&:hover': {
            zIndex: 50,
        },
    },
    animeJs: {
        position: 'absolute',
        top: '65%',
        left: '50%',
        zIndex: 7,
        '&:hover': {
            zIndex: 50,
        },
    },
    d3Js: {
        position: 'absolute',
        top: '65%',
        left: '70%',
        zIndex: 12,
        '&:hover': {
            zIndex: 50,
        },
    },
    reactNative: {
        position: 'absolute',
        top: '0%',
        left: '0%',
        zIndex: 1,
        '&:hover': {
            zIndex: 50,
        },
    },
    tensorflowJs: {
        position: 'absolute',
        top: '0%',
        left: '45%',
        zIndex: 10,
        '&:hover': {
            zIndex: 50,
        },
    },
    tensorflowPy: {
        position: 'absolute',
        top: '0%',
        left: '90%',
        zIndex: 20,
        '&:hover': {
            zIndex: 50,
        },
    },
    cardTitle: {},
    cardTitleDesc: {
        position: 'absolute',
        left: '50%',
        bottom: '50%',
        transform: 'translateX(-50%)',
        width: 0.1,
        height: 0.1,
        overflow: 'visible',
        pointerEvents: 'none',
        opacity: 0,
        padding: '0.15rem',
        backgroundColor: primaryColor,
        borderRadius: '1rem',
        zIndex: 1,
    },
    popUpContainer: {
        width: '100%',
        height: '100%',
        padding: '0.25rem',
    },
    popUpLogo: {
        height: '100%',
    },
    popUpTitleSection: {
        height: '40%',
        width: '90%',
        padding: 0,
    },
    popUpTitle: {
        // position: 'absolute',
        // top: '0',
        // left: '0%',
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
    popUpDescription: {
        // position: 'absolute',
        // top: '35%',
        // left: '0%',
        padding: 0,
        width: '100%',
        height: '30%',
    },
    popUpDescText: {
        margin: '0.25rem 0',
        padding: 0,
        // letterSpacing: '0.1rem',
        color: '#8a8d90',
        fontSize: '1.23rem',
        fontStyle: 'italic',
        width: '100%',
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
    cardMedia: {
        width: '90%',
        height: '90%',
        margin: ' 50% auto',
        transform: 'translateY(-50%)',
    },
    cardLogo: { position: 'relative', width: '90%', height: '90%' },
    'MuiCardActions-root': {
        position: 'absolute',
        left: '-0.25rem',
        top: '2.25rem',
        width: '5.5rem',
        height: '5rem',
        pointerEvents: 'none',
    },
    fillStar: {
        width: '1.5rem',
        height: '1.5rem',
        fill: fullStarColor,
        marginLeft: '0.1rem',
    },
    emptyStar: {
        width: '1.5rem',
        height: '1.5rem',
        fill: emptySTarColor,
        marginLeft: '0.1rem',
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
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
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
    workExpContainer: {
        marginTop: '2rem',
        marginLeft: '5%',
        width: '100%',
        height: '11rem',
    },
    expLogo: {
        position: 'relative',
        width: '100%',
        height: '90%',
    },
    expNum: {
        color: '#fff',
        fontWeight: 'bold',
        fontStyle: 'italic',
        fontSize: '1.2rem',
    },
    expYears: {
        color: lightTextColor,
        fontStyle: 'italic',
        fontSize: '1.2rem',
    },
    expText: {
        color: '#fff',
        fontSize: '1rem',
    },
}));

export default function Home() {
    const classes = useStyles();

    const [showProject, setshowProject] = useState(false);
    const [currentProject, setcurrentProject] = useState(1);

    // skills hover index
    const [skillIndex, setskillIndex] = useState(0);
    const [skillHovered, setskillHovered] = useState(false);

    const handleProjectChange = (num) => {
        setcurrentProject(num);
    };

    const handleModalCLose = () => {
        console.log('click event triggered');
        if (showProject) {
            setTimeout(() => {
                setshowProject(false);
            }, 1000);
            document.querySelector('.projectModal').style.height = '0.1%';
        }
    };

    const renderStars = (num) => {
        const starSvgs = [];
        for (let index = 0; index < num; index++) {
            starSvgs.push(
                <svg key={index} className={classes.fillStar}>
                    <use xlinkHref="img/starSvgs/sprite.svg#icon-star-full"></use>
                </svg>
            );
        }
        for (let index = num; index < 5; index++) {
            starSvgs.push(
                <svg key={index} className={classes.emptyStar}>
                    <use xlinkHref="img/starSvgs/sprite.svg#icon-star-full"></use>
                </svg>
            );
        }
        return starSvgs;
    };

    const renderPopUpStars = (num) => {
        const starSvgs = [];
        for (let index = 0; index < num; index++) {
            starSvgs.push(
                <svg
                    key={index}
                    className={classes.fillStar}
                    style={{ width: '1.25rem', height: '1.25rem' }}
                >
                    <use xlinkHref="img/starSvgs/sprite.svg#icon-star-full"></use>
                </svg>
            );
        }
        for (let index = num; index < 5; index++) {
            starSvgs.push(
                <svg
                    key={index}
                    className={classes.emptyStar}
                    style={{ width: '1.25rem', height: '1.25rem' }}
                >
                    <use xlinkHref="img/starSvgs/sprite.svg#icon-star-full"></use>
                </svg>
            );
        }
        return starSvgs;
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

    // Anime js related useEffect
    // let skillAnimation = null;
    const skillAnimationFrontRef = useRef(null);
    const skillAnimationCenterRef = useRef(null);
    const skillAnimationLastRef = useRef(null);
    let timeoutPtr;
    useEffect(() => {
        skillAnimationFrontRef.current = anime({
            targets: '.skillCardAnime',
            translateX: anime.stagger(10, {
                grid: [8, 4],
                from: 'first',
                axis: 'x',
            }),
            translateY: anime.stagger(10, {
                grid: [8, 4],
                from: 'first',
                axis: 'y',
            }),
            // rotateZ: anime.stagger([0, 90], {
            //     grid: [7, 3],
            //     from: 'first',
            //     axis: 'x',
            // }),
            delay: anime.stagger(100, { grid: [8, 4], from: 'first' }),
            duration: 500,
            easing: 'easeInOutQuad',
            // direction: 'alternate',
            autoplay: false,
        });
        skillAnimationCenterRef.current = anime({
            targets: '.skillCardAnime',
            translateX: anime.stagger(10, {
                grid: [8, 4],
                from: 'center',
                axis: 'x',
            }),
            translateY: anime.stagger(10, {
                grid: [8, 4],
                from: 'center',
                axis: 'y',
            }),
            // rotateZ: anime.stagger([0, 90], {
            //     grid: [7, 3],
            //     from: 'center',
            //     axis: 'x',
            // }),
            delay: anime.stagger(100, { grid: [8, 4], from: 'center' }),
            duration: 500,
            easing: 'easeInOutQuad',
            // direction: 'alternate',
            autoplay: false,
        });
        skillAnimationLastRef.current = anime({
            targets: '.skillCardAnime',
            translateX: anime.stagger(10, {
                grid: [8, 4],
                from: 'last',
                axis: 'x',
            }),
            translateY: anime.stagger(10, {
                grid: [8, 4],
                from: 'last',
                axis: 'y',
            }),
            // rotateZ: anime.stagger([0, 90], {
            //     grid: [7, 3],
            //     from: 'last',
            //     axis: 'x',
            // }),
            delay: anime.stagger(100, { grid: [8, 4], from: 'last' }),
            duration: 500,
            easing: 'easeInOutQuad',
            // direction: 'alternate',
            autoplay: false,
        });

        // return () => {
        //     // cleanups;
        // };
    }, []);

    const toggleSkillAnimeFront = () => {
        if (skillAnimationFrontRef.current.began) {
            skillAnimationFrontRef.current.reverse();

            if (
                skillAnimationFrontRef.current.progress === 100 &&
                skillAnimationFrontRef.current.direction === 'reverse'
            ) {
                skillAnimationFrontRef.current.completed = false;
            }
        }

        if (skillAnimationFrontRef.current.paused) {
            skillAnimationFrontRef.current.play();
        }
    };
    const toggleSkillAnimeCenter = () => {
        if (skillAnimationCenterRef.current.began) {
            skillAnimationCenterRef.current.reverse();

            if (
                skillAnimationCenterRef.current.progress === 100 &&
                skillAnimationCenterRef.current.direction === 'reverse'
            ) {
                skillAnimationCenterRef.current.completed = false;
            }
        }

        if (skillAnimationCenterRef.current.paused) {
            skillAnimationCenterRef.current.play();
        }
    };
    const toggleSkillAnimeLast = () => {
        if (skillAnimationLastRef.current.began) {
            skillAnimationLastRef.current.reverse();

            if (
                skillAnimationLastRef.current.progress === 100 &&
                skillAnimationLastRef.current.direction === 'reverse'
            ) {
                skillAnimationLastRef.current.completed = false;
            }
        }

        if (skillAnimationLastRef.current.paused) {
            skillAnimationLastRef.current.play();
        }
    };

    return (
        <div>
            <Head>
                <title>Rakhy's Portfolio</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* <header> */}
            <AppBar position="fixed" className={classes.rootAppBar}>
                <Toolbar className={classes.appBar}>
                    <Link href="#skillSection" className={classes.appBarText}>
                        My Skills
                    </Link>
                    <Link
                        href="#aspirationalskillSection"
                        className={classes.appBarText}
                    >
                        Aspirational Skills
                    </Link>
                    <Link href="#projectSection" className={classes.appBarText}>
                        Projects
                    </Link>
                    <Link
                        href="#experienceSection"
                        className={classes.appBarText}
                    >
                        Work Experience
                    </Link>
                </Toolbar>
            </AppBar>
            {/* </header> */}

            <main onClick={handleModalCLose}>
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
                        An optimistic, cool and an endless learner who has an
                        eye on technology(profession) and an eye on
                        gaming(hobby).
                    </Typography>
                    <Typography variant="body1" className={classes.aboutMeDesc}>
                        Recently attracted by web and mobile application
                        development and looking for an opportunity to switch my
                        career towards it.
                    </Typography>
                    <Typography variant="body1" className={classes.aboutMeDesc}>
                        As almost anything and everything needs to be on the web
                        for users, I think my career switch is a perfect
                        decision.
                    </Typography>
                    <Grid
                        container
                        xs={12}
                        spacing={2}
                        direction="column"
                        alignItems="center"
                        className={classes.contactContainer}
                    >
                        <Grid item style={{ textAlign: 'center' }}>
                            <Typography
                                variant="h6"
                                className={classes.aboutMeRole}
                            >
                                Contact Info
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            container
                            // xs={11}
                            direction="row"
                            justifyContent="center"
                            className={classes.contactItem}
                        >
                            <Grid item xs={3}>
                                <div
                                    style={{
                                        height: '2rem',
                                        position: 'relative',
                                    }}
                                    variant="body1"
                                    className={classes.contactItemText}
                                >
                                    <Image
                                        src="/img/starSvgs/viber.svg"
                                        alt="logo"
                                        layout="fill"
                                    />
                                </div>
                            </Grid>
                            <Grid
                                item
                                xs={8}
                                className={
                                    classes.contactItemTextDetailContainer
                                }
                            >
                                <Typography
                                    variant="body1"
                                    className={classes.contactItemTextDetail}
                                >
                                    9159559972
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            container
                            // xs={11}
                            direction="row"
                            justifyContent="center"
                            className={classes.contactItem}
                        >
                            <Grid item xs={3}>
                                <div
                                    style={{
                                        height: '2rem',
                                        position: 'relative',
                                    }}
                                    variant="body1"
                                    className={classes.contactItemText}
                                >
                                    <Image
                                        src="/img/starSvgs/official-gmail-icon-2020-.svg"
                                        alt="logo"
                                        layout="fill"
                                    />
                                </div>
                            </Grid>
                            <Grid
                                item
                                xs={8}
                                className={
                                    classes.contactItemTextDetailContainer
                                }
                            >
                                <Typography
                                    variant="body1"
                                    className={classes.contactItemTextDetail}
                                >
                                    rakhsanthmessi@gmail.com
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            container
                            // xs={11}
                            direction="row"
                            justifyContent="center"
                            className={classes.contactItem}
                        >
                            <Grid item xs={3}>
                                <div
                                    style={{
                                        height: '2rem',
                                        position: 'relative',
                                    }}
                                    variant="body1"
                                    className={classes.contactItemText}
                                >
                                    <Image
                                        src="/img/starSvgs/linkedin-icon-2.svg"
                                        alt="logo"
                                        layout="fill"
                                    />
                                </div>
                            </Grid>
                            <Grid
                                item
                                xs={8}
                                className={
                                    classes.contactItemTextDetailContainer
                                }
                            >
                                <Link
                                    href="https://github.com/Rakhsanth"
                                    className={classes.contactItemTextDetail}
                                >
                                    https://www.linkedin.com/in/rakhsanth-rammohan-768b3611b
                                </Link>
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            container
                            // xs={11}
                            direction="row"
                            justifyContent="center"
                            className={classes.contactItem}
                        >
                            <Grid item xs={3}>
                                <div
                                    style={{
                                        height: '2rem',
                                        position: 'relative',
                                    }}
                                    variant="body1"
                                    className={classes.contactItemText}
                                >
                                    <Image
                                        src="/img/starSvgs/github-icon.svg"
                                        alt="logo"
                                        layout="fill"
                                    />
                                </div>
                            </Grid>
                            <Grid
                                item
                                xs={8}
                                className={
                                    classes.contactItemTextDetailContainer
                                }
                            >
                                <Link
                                    href="https://www.linkedin.com/in/rakhsanth-rammohan-768b3611b/"
                                    className={classes.contactItemTextDetail}
                                >
                                    https://github.com/Rakhsanth
                                </Link>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Link href="https://www.figma.com/file/PZxkzoh5Y43AMvBNKFbHdb/raks-resume?node-id=0%3A1">
                                <Button variant="contained" color="primary">
                                    See Resume
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Container>
                <Container
                    id="skillSection"
                    className={classes.skillContentSections}
                >
                    <Typography variant="h3" className={classes.sectionTitle}>
                        My Skills
                    </Typography>
                    <Container className={classes.skillsContainer}>
                        <Card
                            className={clsx(
                                classes.skillCard,
                                classes.html,
                                'skillCardAnime'
                            )}
                            onMouseEnter={toggleSkillAnimeFront}
                            onMouseLeave={toggleSkillAnimeFront}
                        >
                            <CardContent className={classes.cardTitleDesc}>
                                <Grid
                                    container
                                    spacing={0}
                                    className={classes.popUpContainer}
                                    direction="column"
                                    justify="flex-start"
                                >
                                    <Grid
                                        item
                                        container
                                        direction="row"
                                        justify="flex-start"
                                        className={classes.popUpTitleSection}
                                    >
                                        <Grid
                                            item
                                            className={classes.popUpLogo}
                                            xs={2}
                                        >
                                            <svg
                                                className={classes.cardLogo}
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="1771"
                                                height="2500"
                                                viewBox="221.807 89.47 440 621.061"
                                                enable-background="new 221.807 89.47 440 621.061"
                                            >
                                                <filter
                                                    id="a"
                                                    width="150%"
                                                    height="150%"
                                                    x="-5%"
                                                    y="-5%"
                                                >
                                                    <feFlood
                                                        flood-color="#000"
                                                        result="floodFill"
                                                        flood-opacity=".5"
                                                    />
                                                    <feComposite
                                                        in="floodFill"
                                                        in2="SourceAlpha"
                                                        operator="in"
                                                        result="coloredAlpha"
                                                    />
                                                    <feGaussianBlur
                                                        in="coloredAlpha"
                                                        result="blur"
                                                        stdDeviation="8"
                                                    />
                                                    <feComposite
                                                        in="blur"
                                                        in2="SourceGraphic"
                                                        operator="out"
                                                        result="maskedOffsetBlur"
                                                    />
                                                    <feMerge>
                                                        <feMergeNode in="maskedOffsetBlur" />
                                                        <feMergeNode in="SourceGraphic" />
                                                    </feMerge>
                                                </filter>
                                                <g filter="url(#a)">
                                                    <path
                                                        fill="#e44d26"
                                                        d="M261.849 660.647l-40.042-449.125h440l-40.086 449.054-180.184 49.954z"
                                                    />
                                                    <path
                                                        fill="#f16529"
                                                        d="M441.807 672.348l145.596-40.367 34.258-383.735H441.807z"
                                                    />
                                                    <path
                                                        fill="#ebebeb"
                                                        d="M441.807 414.82h-72.888l-5.035-56.406h77.923V303.33H303.683l1.32 14.778 13.538 151.794h123.266zM441.807 557.876l-.242.066-61.346-16.566-3.922-43.93h-55.294l7.718 86.489 112.834 31.323.252-.071z"
                                                    />
                                                    <path
                                                        fill="#fff"
                                                        d="M262.745 89.47h27.992v27.656h25.606V89.47h27.993v83.75h-27.993v-28.044h-25.606v28.044h-27.99l-.002-83.75zM381.149 117.244h-24.642V89.47H433.8v27.774h-24.654v55.976H381.15v-55.976h-.001zM446.065 89.47h29.19l17.955 29.428 17.938-29.428h29.2v83.75h-27.882v-41.512l-19.259 29.778h-.481l-19.272-29.778v41.512h-27.39V89.47zM554.277 89.47h28v56.068h39.368v27.682h-67.368V89.47z"
                                                    />
                                                    <path
                                                        fill="#fff"
                                                        d="M441.617 414.82v55.082h67.83l-6.395 71.44-61.435 16.58v57.307l112.924-31.294.826-9.309 12.946-145.014 1.344-14.792h-14.842zM441.617 303.33v55.084H574.67l1.103-12.382 2.51-27.924 1.318-14.778z"
                                                    />
                                                </g>
                                            </svg>
                                        </Grid>
                                        <Grid
                                            item
                                            container
                                            direction="column"
                                            justify="flex-start"
                                            alignItems="flex-start"
                                            spacing={0}
                                            xs={9}
                                            style={{
                                                // width: '50%',
                                                height: '100%',
                                                position: 'relative',
                                                marginLeft: '1rem',
                                                // marginTop: '-1rem',
                                            }}
                                        >
                                            <Grid
                                                item
                                                container
                                                xs={6}
                                                style={{ flexBasis: 'auto' }}
                                            >
                                                <Typography
                                                    variant="h6"
                                                    className={
                                                        classes.popUpTitle
                                                    }
                                                >
                                                    HTML 5
                                                </Typography>
                                            </Grid>
                                            <Grid
                                                item
                                                container
                                                xs={6}
                                                style={{
                                                    // marginTop: '2rem',
                                                    // marginLeft: '-1rem',
                                                    // width: '8rem',
                                                    // height: '3rem',
                                                    flexBasis: 'auto',
                                                }}
                                            >
                                                {renderPopUpStars(4)}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        item
                                        className={classes.popUpDescription}
                                    >
                                        <Typography
                                            variant="body"
                                            className={classes.popUpDescText}
                                        >
                                            ksdjfshdlkjfh lkasjdfhisaudhfoihe
                                            wlfihwe lfh wef qwehfor
                                            wrferwgvrsbvb ver wer gerwg erf qwef
                                            wef wef wef qwef wef qwef we fwef
                                            wef{' '}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <CardMedia className={classes.cardMedia}>
                                <svg
                                    className={classes.cardLogo}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1771"
                                    height="2500"
                                    viewBox="221.807 89.47 440 621.061"
                                    enable-background="new 221.807 89.47 440 621.061"
                                >
                                    <filter
                                        id="a"
                                        width="150%"
                                        height="150%"
                                        x="-5%"
                                        y="-5%"
                                    >
                                        <feFlood
                                            flood-color="#000"
                                            result="floodFill"
                                            flood-opacity=".5"
                                        />
                                        <feComposite
                                            in="floodFill"
                                            in2="SourceAlpha"
                                            operator="in"
                                            result="coloredAlpha"
                                        />
                                        <feGaussianBlur
                                            in="coloredAlpha"
                                            result="blur"
                                            stdDeviation="8"
                                        />
                                        <feComposite
                                            in="blur"
                                            in2="SourceGraphic"
                                            operator="out"
                                            result="maskedOffsetBlur"
                                        />
                                        <feMerge>
                                            <feMergeNode in="maskedOffsetBlur" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                    <g filter="url(#a)">
                                        <path
                                            fill="#e44d26"
                                            d="M261.849 660.647l-40.042-449.125h440l-40.086 449.054-180.184 49.954z"
                                        />
                                        <path
                                            fill="#f16529"
                                            d="M441.807 672.348l145.596-40.367 34.258-383.735H441.807z"
                                        />
                                        <path
                                            fill="#ebebeb"
                                            d="M441.807 414.82h-72.888l-5.035-56.406h77.923V303.33H303.683l1.32 14.778 13.538 151.794h123.266zM441.807 557.876l-.242.066-61.346-16.566-3.922-43.93h-55.294l7.718 86.489 112.834 31.323.252-.071z"
                                        />
                                        <path
                                            fill="#fff"
                                            d="M262.745 89.47h27.992v27.656h25.606V89.47h27.993v83.75h-27.993v-28.044h-25.606v28.044h-27.99l-.002-83.75zM381.149 117.244h-24.642V89.47H433.8v27.774h-24.654v55.976H381.15v-55.976h-.001zM446.065 89.47h29.19l17.955 29.428 17.938-29.428h29.2v83.75h-27.882v-41.512l-19.259 29.778h-.481l-19.272-29.778v41.512h-27.39V89.47zM554.277 89.47h28v56.068h39.368v27.682h-67.368V89.47z"
                                        />
                                        <path
                                            fill="#fff"
                                            d="M441.617 414.82v55.082h67.83l-6.395 71.44-61.435 16.58v57.307l112.924-31.294.826-9.309 12.946-145.014 1.344-14.792h-14.842zM441.617 303.33v55.084H574.67l1.103-12.382 2.51-27.924 1.318-14.778z"
                                        />
                                    </g>
                                </svg>
                            </CardMedia>
                            <CardActions
                                className={`${classes.starts} ${classes['MuiCardActions-root']}`}
                            >
                                {renderStars(4)}
                            </CardActions>
                        </Card>
                        <Card
                            className={clsx(
                                classes.skillCard,
                                classes.css3,
                                'skillCardAnime'
                            )}
                            onMouseEnter={toggleSkillAnimeCenter}
                            onMouseLeave={toggleSkillAnimeCenter}
                        >
                            <CardContent className={classes.cardTitleDesc}>
                                <Grid
                                    container
                                    spacing={0}
                                    className={classes.popUpContainer}
                                    direction="column"
                                    justify="flex-start"
                                >
                                    <Grid
                                        item
                                        container
                                        direction="row"
                                        justify="flex-start"
                                        className={classes.popUpTitleSection}
                                    >
                                        <Grid
                                            item
                                            className={classes.popUpLogo}
                                            xs={2}
                                        >
                                            <svg
                                                className={classes.cardLogo}
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="2500"
                                                height="2500"
                                                viewBox="0 0 538.584 538.583"
                                            >
                                                <path
                                                    d="M0 0h538.584v538.583H0V0z"
                                                    fill="none"
                                                />
                                                <path
                                                    d="M405.5 467.454L269.29 504.13l-136.212-36.676-31.432-340.525h335.29L405.5 467.454z"
                                                    fill="#2062af"
                                                />
                                                <path
                                                    d="M269.289 154.511v320.367l.308.084 110.229-29.682 25.443-290.769h-135.98z"
                                                    fill="#3c9cd7"
                                                />
                                                <path
                                                    fill="#fff"
                                                    d="M191.985 76.899V56.631h29.571V34.453h-51.749v62.684h51.749V76.899h-29.571zm82.766-20.268h20.674V34.453h-51.754v22.178c6.924 6.924 10.535 10.238 20.549 20.252-5.854 0-20.549.021-20.549.02v20.234h51.754V76.899l-20.674-20.268zm73.352 0h20.673V34.453H317.02v22.178c6.924 6.924 10.537 10.238 20.551 20.252-5.852 0-20.551.021-20.551.02v20.234h51.757V76.899l-20.674-20.268z"
                                                />
                                                <path
                                                    d="M269.168 239.656l-97.49 40.602 3.233 40.199 94.257-40.301 100.265-42.868 4.157-41.122-104.422 43.49z"
                                                    fill="#fff"
                                                />
                                                <linearGradient
                                                    id="a"
                                                    gradientUnits="userSpaceOnUse"
                                                    x1="-825.508"
                                                    y1="1338.301"
                                                    x2="-825.508"
                                                    y2="1419.102"
                                                    gradientTransform="matrix(1 0 0 -1 1045.93 1658.759)"
                                                >
                                                    <stop
                                                        offset=".387"
                                                        stop-color="#d1d3d4"
                                                        stop-opacity="0"
                                                    />
                                                    <stop
                                                        offset="1"
                                                        stop-color="#d1d3d4"
                                                    />
                                                </linearGradient>
                                                <path
                                                    d="M171.677 280.258l3.233 40.199 94.257-40.301v-40.5l-97.49 40.602z"
                                                    fill="url(#a)"
                                                />
                                                <linearGradient
                                                    id="b"
                                                    gradientUnits="userSpaceOnUse"
                                                    x1="-724.552"
                                                    y1="1378.602"
                                                    x2="-724.552"
                                                    y2="1462.591"
                                                    gradientTransform="matrix(1 0 0 -1 1045.93 1658.759)"
                                                >
                                                    <stop
                                                        offset=".387"
                                                        stop-color="#d1d3d4"
                                                        stop-opacity="0"
                                                    />
                                                    <stop
                                                        offset="1"
                                                        stop-color="#d1d3d4"
                                                    />
                                                </linearGradient>
                                                <path
                                                    d="M373.59 196.167l-104.422 43.489v40.5l100.265-42.868 4.157-41.121z"
                                                    fill="url(#b)"
                                                />
                                                <linearGradient
                                                    id="c"
                                                    gradientUnits="userSpaceOnUse"
                                                    x1="-874.103"
                                                    y1="1302.263"
                                                    x2="-680.039"
                                                    y2="1302.263"
                                                    gradientTransform="matrix(1 0 0 -1 1045.93 1658.759)"
                                                >
                                                    <stop
                                                        offset="0"
                                                        stop-color="#e8e7e5"
                                                    />
                                                    <stop
                                                        offset="1"
                                                        stop-color="#fff"
                                                    />
                                                </linearGradient>
                                                <path
                                                    d="M171.827 280.258l3.234 40.199 144.625.461-3.235 53.598-47.59 13.398-45.748-11.551-2.772-33.268h-42.508l5.545 64.225 85.945 25.412 85.479-24.951 11.09-127.523H171.827z"
                                                    fill="url(#c)"
                                                />
                                                <path
                                                    d="M269.168 280.258h-97.49l3.233 40.199 94.257.301v-40.5zm0 107.528l-.462.129-45.742-11.551-2.772-33.268h-42.507l5.544 64.225 85.939 25.412v-44.947z"
                                                    opacity=".05"
                                                />
                                                <linearGradient
                                                    id="d"
                                                    gradientUnits="userSpaceOnUse"
                                                    x1="-883.032"
                                                    y1="1442.031"
                                                    x2="-672.341"
                                                    y2="1442.031"
                                                    gradientTransform="matrix(1 0 0 -1 1045.93 1658.759)"
                                                >
                                                    <stop
                                                        offset="0"
                                                        stop-color="#e8e7e5"
                                                    />
                                                    <stop
                                                        offset="1"
                                                        stop-color="#fff"
                                                    />
                                                </linearGradient>
                                                <path
                                                    d="M162.898 196.167H373.59l-4.157 41.122H167.98l-5.082-41.122z"
                                                    fill="url(#d)"
                                                />
                                                <path
                                                    d="M269.168 196.167h-106.27l5.082 41.122h101.188v-41.122z"
                                                    opacity=".05"
                                                />
                                            </svg>
                                        </Grid>
                                        <Grid
                                            item
                                            container
                                            direction="column"
                                            justify="flex-start"
                                            alignItems="flex-start"
                                            spacing={0}
                                            xs={9}
                                            style={{
                                                // width: '50%',
                                                height: '100%',
                                                position: 'relative',
                                                marginLeft: '1rem',
                                                // marginTop: '-1rem',
                                            }}
                                        >
                                            <Grid
                                                item
                                                container
                                                xs={6}
                                                style={{ flexBasis: 'auto' }}
                                            >
                                                <Typography
                                                    variant="h6"
                                                    className={
                                                        classes.popUpTitle
                                                    }
                                                >
                                                    CSS 3
                                                </Typography>
                                            </Grid>
                                            <Grid
                                                item
                                                container
                                                xs={6}
                                                style={{
                                                    // marginTop: '2rem',
                                                    // marginLeft: '-1rem',
                                                    // width: '8rem',
                                                    // height: '3rem',
                                                    flexBasis: 'auto',
                                                }}
                                            >
                                                {renderPopUpStars(4)}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        item
                                        className={classes.popUpDescription}
                                    >
                                        <Typography
                                            variant="body"
                                            className={classes.popUpDescText}
                                        >
                                            ksdjfshdlkjfh lkasjdfhisaudhfoihe
                                            wlfihwe lfh wef qwehfor
                                            wrferwgvrsbvb ver wer gerwg erf qwef
                                            wef wef wef qwef wef qwef we fwef
                                            wef{' '}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <CardMedia className={classes.cardMedia}>
                                <svg
                                    className={classes.cardLogo}
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="2500"
                                    height="2500"
                                    viewBox="0 0 538.584 538.583"
                                >
                                    <path
                                        d="M0 0h538.584v538.583H0V0z"
                                        fill="none"
                                    />
                                    <path
                                        d="M405.5 467.454L269.29 504.13l-136.212-36.676-31.432-340.525h335.29L405.5 467.454z"
                                        fill="#2062af"
                                    />
                                    <path
                                        d="M269.289 154.511v320.367l.308.084 110.229-29.682 25.443-290.769h-135.98z"
                                        fill="#3c9cd7"
                                    />
                                    <path
                                        fill="#fff"
                                        d="M191.985 76.899V56.631h29.571V34.453h-51.749v62.684h51.749V76.899h-29.571zm82.766-20.268h20.674V34.453h-51.754v22.178c6.924 6.924 10.535 10.238 20.549 20.252-5.854 0-20.549.021-20.549.02v20.234h51.754V76.899l-20.674-20.268zm73.352 0h20.673V34.453H317.02v22.178c6.924 6.924 10.537 10.238 20.551 20.252-5.852 0-20.551.021-20.551.02v20.234h51.757V76.899l-20.674-20.268z"
                                    />
                                    <path
                                        d="M269.168 239.656l-97.49 40.602 3.233 40.199 94.257-40.301 100.265-42.868 4.157-41.122-104.422 43.49z"
                                        fill="#fff"
                                    />
                                    <linearGradient
                                        id="a"
                                        gradientUnits="userSpaceOnUse"
                                        x1="-825.508"
                                        y1="1338.301"
                                        x2="-825.508"
                                        y2="1419.102"
                                        gradientTransform="matrix(1 0 0 -1 1045.93 1658.759)"
                                    >
                                        <stop
                                            offset=".387"
                                            stop-color="#d1d3d4"
                                            stop-opacity="0"
                                        />
                                        <stop offset="1" stop-color="#d1d3d4" />
                                    </linearGradient>
                                    <path
                                        d="M171.677 280.258l3.233 40.199 94.257-40.301v-40.5l-97.49 40.602z"
                                        fill="url(#a)"
                                    />
                                    <linearGradient
                                        id="b"
                                        gradientUnits="userSpaceOnUse"
                                        x1="-724.552"
                                        y1="1378.602"
                                        x2="-724.552"
                                        y2="1462.591"
                                        gradientTransform="matrix(1 0 0 -1 1045.93 1658.759)"
                                    >
                                        <stop
                                            offset=".387"
                                            stop-color="#d1d3d4"
                                            stop-opacity="0"
                                        />
                                        <stop offset="1" stop-color="#d1d3d4" />
                                    </linearGradient>
                                    <path
                                        d="M373.59 196.167l-104.422 43.489v40.5l100.265-42.868 4.157-41.121z"
                                        fill="url(#b)"
                                    />
                                    <linearGradient
                                        id="c"
                                        gradientUnits="userSpaceOnUse"
                                        x1="-874.103"
                                        y1="1302.263"
                                        x2="-680.039"
                                        y2="1302.263"
                                        gradientTransform="matrix(1 0 0 -1 1045.93 1658.759)"
                                    >
                                        <stop offset="0" stop-color="#e8e7e5" />
                                        <stop offset="1" stop-color="#fff" />
                                    </linearGradient>
                                    <path
                                        d="M171.827 280.258l3.234 40.199 144.625.461-3.235 53.598-47.59 13.398-45.748-11.551-2.772-33.268h-42.508l5.545 64.225 85.945 25.412 85.479-24.951 11.09-127.523H171.827z"
                                        fill="url(#c)"
                                    />
                                    <path
                                        d="M269.168 280.258h-97.49l3.233 40.199 94.257.301v-40.5zm0 107.528l-.462.129-45.742-11.551-2.772-33.268h-42.507l5.544 64.225 85.939 25.412v-44.947z"
                                        opacity=".05"
                                    />
                                    <linearGradient
                                        id="d"
                                        gradientUnits="userSpaceOnUse"
                                        x1="-883.032"
                                        y1="1442.031"
                                        x2="-672.341"
                                        y2="1442.031"
                                        gradientTransform="matrix(1 0 0 -1 1045.93 1658.759)"
                                    >
                                        <stop offset="0" stop-color="#e8e7e5" />
                                        <stop offset="1" stop-color="#fff" />
                                    </linearGradient>
                                    <path
                                        d="M162.898 196.167H373.59l-4.157 41.122H167.98l-5.082-41.122z"
                                        fill="url(#d)"
                                    />
                                    <path
                                        d="M269.168 196.167h-106.27l5.082 41.122h101.188v-41.122z"
                                        opacity=".05"
                                    />
                                </svg>
                            </CardMedia>
                            <CardActions
                                className={`${classes.starts} ${classes['MuiCardActions-root']}`}
                            >
                                {renderStars(4)}
                            </CardActions>
                        </Card>
                        <Card
                            className={clsx(
                                classes.skillCard,
                                classes.javascript,
                                'skillCardAnime'
                            )}
                            onMouseEnter={toggleSkillAnimeCenter}
                            onMouseLeave={toggleSkillAnimeCenter}
                        >
                            <CardContent className={classes.cardTitleDesc}>
                                <Grid
                                    container
                                    spacing={0}
                                    className={classes.popUpContainer}
                                    direction="column"
                                    justify="flex-start"
                                >
                                    <Grid
                                        item
                                        container
                                        direction="row"
                                        justify="flex-start"
                                        className={classes.popUpTitleSection}
                                    >
                                        <Grid
                                            item
                                            className={classes.popUpLogo}
                                            xs={2}
                                        >
                                            <div className={classes.cardLogo}>
                                                <Image
                                                    src="/img/starSvgs/javascript-1.svg"
                                                    alt="js-logo"
                                                    layout="fill"
                                                    priority
                                                />
                                            </div>
                                        </Grid>
                                        <Grid
                                            item
                                            container
                                            direction="column"
                                            justify="flex-start"
                                            alignItems="flex-start"
                                            spacing={0}
                                            xs={9}
                                            style={{
                                                // width: '50%',
                                                height: '100%',
                                                position: 'relative',
                                                marginLeft: '1rem',
                                                // marginTop: '-1rem',
                                            }}
                                        >
                                            <Grid
                                                item
                                                container
                                                xs={6}
                                                style={{ flexBasis: 'auto' }}
                                            >
                                                <Typography
                                                    variant="h6"
                                                    className={
                                                        classes.popUpTitle
                                                    }
                                                >
                                                    Javascript
                                                </Typography>
                                            </Grid>
                                            <Grid
                                                item
                                                container
                                                xs={6}
                                                style={{
                                                    // marginTop: '2rem',
                                                    // marginLeft: '-1rem',
                                                    // width: '8rem',
                                                    // height: '3rem',
                                                    flexBasis: 'auto',
                                                }}
                                            >
                                                {renderPopUpStars(4)}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        item
                                        className={classes.popUpDescription}
                                    >
                                        <Typography
                                            variant="body"
                                            className={classes.popUpDescText}
                                        >
                                            ksdjfshdlkjfh lkasjdfhisaudhfoihe
                                            wlfihwe lfh wef qwehfor
                                            wrferwgvrsbvb ver wer gerwg erf qwef
                                            wef wef wef qwef wef qwef we fwef
                                            wef{' '}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <CardMedia className={classes.cardMedia}>
                                <div className={classes.cardLogo}>
                                    <Image
                                        src="/img/starSvgs/javascript-1.svg"
                                        alt="js-logo"
                                        layout="fill"
                                        priority
                                    />
                                </div>
                            </CardMedia>
                            <CardActions
                                className={`${classes.starts} ${classes['MuiCardActions-root']}`}
                            >
                                {renderStars(4)}
                            </CardActions>
                        </Card>
                        <Card
                            className={clsx(
                                classes.skillCard,
                                classes.reactJs,
                                'skillCardAnime'
                            )}
                            onMouseEnter={toggleSkillAnimeLast}
                            onMouseLeave={toggleSkillAnimeLast}
                        >
                            <CardContent className={classes.cardTitleDesc}>
                                <Grid
                                    container
                                    spacing={0}
                                    className={classes.popUpContainer}
                                    direction="column"
                                    justify="flex-start"
                                >
                                    <Grid
                                        item
                                        container
                                        direction="row"
                                        justify="flex-start"
                                        className={classes.popUpTitleSection}
                                    >
                                        <Grid
                                            item
                                            className={classes.popUpLogo}
                                            xs={2}
                                        >
                                            <div className={classes.cardLogo}>
                                                <Image
                                                    src="/img/starSvgs/react-2.svg"
                                                    alt="js-logo"
                                                    layout="fill"
                                                    priority
                                                />
                                            </div>
                                        </Grid>
                                        <Grid
                                            item
                                            container
                                            direction="column"
                                            justify="flex-start"
                                            alignItems="flex-start"
                                            spacing={0}
                                            xs={9}
                                            style={{
                                                // width: '50%',
                                                height: '100%',
                                                position: 'relative',
                                                marginLeft: '1rem',
                                                // marginTop: '-1rem',
                                            }}
                                        >
                                            <Grid
                                                item
                                                container
                                                xs={6}
                                                style={{ flexBasis: 'auto' }}
                                            >
                                                <Typography
                                                    variant="h6"
                                                    className={
                                                        classes.popUpTitle
                                                    }
                                                >
                                                    React JS
                                                </Typography>
                                            </Grid>
                                            <Grid
                                                item
                                                container
                                                xs={6}
                                                style={{
                                                    // marginTop: '2rem',
                                                    // marginLeft: '-1rem',
                                                    // width: '8rem',
                                                    // height: '3rem',
                                                    flexBasis: 'auto',
                                                }}
                                            >
                                                {renderPopUpStars(3)}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        item
                                        className={classes.popUpDescription}
                                    >
                                        <Typography
                                            variant="body"
                                            className={classes.popUpDescText}
                                        >
                                            ksdjfshdlkjfh lkasjdfhisaudhfoihe
                                            wlfihwe lfh wef qwehfor
                                            wrferwgvrsbvb ver wer gerwg erf qwef
                                            wef wef wef qwef wef qwef we fwef
                                            wef{' '}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <CardMedia className={classes.cardMedia}>
                                <div className={classes.cardLogo}>
                                    <Image
                                        src="/img/starSvgs/react-2.svg"
                                        alt="js-logo"
                                        layout="fill"
                                        priority
                                    />
                                </div>
                            </CardMedia>
                            <CardActions
                                className={`${classes.starts} ${classes['MuiCardActions-root']}`}
                            >
                                {renderStars(3)}
                            </CardActions>
                        </Card>
                        <Card
                            className={clsx(
                                classes.skillCard,
                                classes.redux,
                                'skillCardAnime'
                            )}
                            onMouseEnter={toggleSkillAnimeFront}
                            onMouseLeave={toggleSkillAnimeFront}
                        >
                            <CardContent className={classes.cardTitleDesc}>
                                <Grid
                                    container
                                    spacing={0}
                                    className={classes.popUpContainer}
                                    direction="column"
                                    justify="flex-start"
                                >
                                    <Grid
                                        item
                                        container
                                        direction="row"
                                        justify="flex-start"
                                        className={classes.popUpTitleSection}
                                    >
                                        <Grid
                                            item
                                            className={classes.popUpLogo}
                                            xs={2}
                                        >
                                            <div className={classes.cardLogo}>
                                                <Image
                                                    src="/img/starSvgs/redux.svg"
                                                    alt="js-logo"
                                                    layout="fill"
                                                    priority
                                                />
                                            </div>
                                        </Grid>
                                        <Grid
                                            item
                                            container
                                            direction="column"
                                            justify="flex-start"
                                            alignItems="flex-start"
                                            spacing={0}
                                            xs={9}
                                            style={{
                                                // width: '50%',
                                                height: '100%',
                                                position: 'relative',
                                                marginLeft: '1rem',
                                                // marginTop: '-1rem',
                                            }}
                                        >
                                            <Grid
                                                item
                                                container
                                                xs={6}
                                                style={{ flexBasis: 'auto' }}
                                            >
                                                <Typography
                                                    variant="h6"
                                                    className={
                                                        classes.popUpTitle
                                                    }
                                                >
                                                    Redux
                                                </Typography>
                                            </Grid>
                                            <Grid
                                                item
                                                container
                                                xs={6}
                                                style={{
                                                    // marginTop: '2rem',
                                                    // marginLeft: '-1rem',
                                                    // width: '8rem',
                                                    // height: '3rem',
                                                    flexBasis: 'auto',
                                                }}
                                            >
                                                {renderPopUpStars(4)}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        item
                                        className={classes.popUpDescription}
                                    >
                                        <Typography
                                            variant="body"
                                            className={classes.popUpDescText}
                                        >
                                            ksdjfshdlkjfh lkasjdfhisaudhfoihe
                                            wlfihwe lfh wef qwehfor
                                            wrferwgvrsbvb ver wer gerwg erf qwef
                                            wef wef wef qwef wef qwef we fwef
                                            wef{' '}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <CardMedia className={classes.cardMedia}>
                                <div className={classes.cardLogo}>
                                    <Image
                                        src="/img/starSvgs/redux.svg"
                                        alt="js-logo"
                                        layout="fill"
                                        priority
                                    />
                                </div>
                            </CardMedia>
                            <CardActions
                                className={`${classes.starts} ${classes['MuiCardActions-root']}`}
                            >
                                {renderStars(4)}
                            </CardActions>
                        </Card>
                        <Card
                            className={clsx(
                                classes.skillCard,
                                classes.nodeJs,
                                'skillCardAnime'
                            )}
                            onMouseEnter={toggleSkillAnimeCenter}
                            onMouseLeave={toggleSkillAnimeCenter}
                        >
                            <CardContent className={classes.cardTitleDesc}>
                                <Grid
                                    container
                                    spacing={0}
                                    className={classes.popUpContainer}
                                    direction="column"
                                    justify="flex-start"
                                >
                                    <Grid
                                        item
                                        container
                                        direction="row"
                                        justify="flex-start"
                                        className={classes.popUpTitleSection}
                                    >
                                        <Grid
                                            item
                                            className={classes.popUpLogo}
                                            xs={2}
                                        >
                                            <div className={classes.cardLogo}>
                                                <Image
                                                    src="/img/starSvgs/node-js-logo.svg"
                                                    alt="js-logo"
                                                    layout="fill"
                                                    priority
                                                />
                                            </div>
                                        </Grid>
                                        <Grid
                                            item
                                            container
                                            direction="column"
                                            justify="flex-start"
                                            alignItems="flex-start"
                                            spacing={0}
                                            xs={9}
                                            style={{
                                                // width: '50%',
                                                height: '100%',
                                                position: 'relative',
                                                marginLeft: '1rem',
                                                // marginTop: '-1rem',
                                            }}
                                        >
                                            <Grid
                                                item
                                                container
                                                xs={6}
                                                style={{ flexBasis: 'auto' }}
                                            >
                                                <Typography
                                                    variant="h6"
                                                    className={
                                                        classes.popUpTitle
                                                    }
                                                >
                                                    NodeJs
                                                </Typography>
                                            </Grid>
                                            <Grid
                                                item
                                                container
                                                xs={6}
                                                style={{
                                                    // marginTop: '2rem',
                                                    // marginLeft: '-1rem',
                                                    // width: '8rem',
                                                    // height: '3rem',
                                                    flexBasis: 'auto',
                                                }}
                                            >
                                                {renderPopUpStars(3)}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        item
                                        className={classes.popUpDescription}
                                    >
                                        <Typography
                                            variant="body"
                                            className={classes.popUpDescText}
                                        >
                                            ksdjfshdlkjfh lkasjdfhisaudhfoihe
                                            wlfihwe lfh wef qwehfor
                                            wrferwgvrsbvb ver wer gerwg erf qwef
                                            wef wef wef qwef wef qwef we fwef
                                            wef{' '}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <CardMedia className={classes.cardMedia}>
                                <div className={classes.cardLogo}>
                                    <Image
                                        src="/img/starSvgs/node-js-logo.svg"
                                        alt="js-logo"
                                        layout="fill"
                                        priority
                                    />
                                </div>
                            </CardMedia>
                            <CardActions
                                className={`${classes.starts} ${classes['MuiCardActions-root']}`}
                            >
                                {renderStars(3)}
                            </CardActions>
                        </Card>
                        <Card
                            className={clsx(
                                classes.skillCard,
                                classes.sass,
                                'skillCardAnime'
                            )}
                            onMouseEnter={toggleSkillAnimeCenter}
                            onMouseLeave={toggleSkillAnimeCenter}
                        >
                            <CardContent className={classes.cardTitleDesc}>
                                <Grid
                                    container
                                    spacing={0}
                                    className={classes.popUpContainer}
                                    direction="column"
                                    justify="flex-start"
                                >
                                    <Grid
                                        item
                                        container
                                        direction="row"
                                        justify="flex-start"
                                        className={classes.popUpTitleSection}
                                    >
                                        <Grid
                                            item
                                            className={classes.popUpLogo}
                                            xs={2}
                                        >
                                            <div className={classes.cardLogo}>
                                                <Image
                                                    src="/img/starSvgs/node-sass.svg"
                                                    alt="js-logo"
                                                    layout="fill"
                                                    priority
                                                />
                                            </div>
                                        </Grid>
                                        <Grid
                                            item
                                            container
                                            direction="column"
                                            justify="flex-start"
                                            alignItems="flex-start"
                                            spacing={0}
                                            xs={9}
                                            style={{
                                                // width: '50%',
                                                height: '100%',
                                                position: 'relative',
                                                marginLeft: '1rem',
                                                // marginTop: '-1rem',
                                            }}
                                        >
                                            <Grid
                                                item
                                                container
                                                xs={6}
                                                style={{ flexBasis: 'auto' }}
                                            >
                                                <Typography
                                                    variant="h6"
                                                    className={
                                                        classes.popUpTitle
                                                    }
                                                >
                                                    Sass / Scss
                                                </Typography>
                                            </Grid>
                                            <Grid
                                                item
                                                container
                                                xs={6}
                                                style={{
                                                    // marginTop: '2rem',
                                                    // marginLeft: '-1rem',
                                                    // width: '8rem',
                                                    // height: '3rem',
                                                    flexBasis: 'auto',
                                                }}
                                            >
                                                {renderPopUpStars(3)}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        item
                                        className={classes.popUpDescription}
                                    >
                                        <Typography
                                            variant="body"
                                            className={classes.popUpDescText}
                                        >
                                            ksdjfshdlkjfh lkasjdfhisaudhfoihe
                                            wlfihwe lfh wef qwehfor
                                            wrferwgvrsbvb ver wer gerwg erf qwef
                                            wef wef wef qwef wef qwef we fwef
                                            wef{' '}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <CardMedia className={classes.cardMedia}>
                                <div className={classes.cardLogo}>
                                    <Image
                                        src="/img/starSvgs/node-sass.svg"
                                        alt="js-logo"
                                        layout="fill"
                                        priority
                                    />
                                </div>
                            </CardMedia>
                            <CardActions
                                className={`${classes.starts} ${classes['MuiCardActions-root']}`}
                            >
                                {renderStars(3)}
                            </CardActions>
                        </Card>
                        <Card
                            className={clsx(
                                classes.skillCard,
                                classes.python,
                                'skillCardAnime'
                            )}
                            onMouseEnter={toggleSkillAnimeLast}
                            onMouseLeave={toggleSkillAnimeLast}
                        >
                            <CardContent className={classes.cardTitleDesc}>
                                <Grid
                                    container
                                    spacing={0}
                                    className={classes.popUpContainer}
                                    direction="column"
                                    justify="flex-start"
                                >
                                    <Grid
                                        item
                                        container
                                        direction="row"
                                        justify="flex-start"
                                        className={classes.popUpTitleSection}
                                    >
                                        <Grid
                                            item
                                            className={classes.popUpLogo}
                                            xs={2}
                                        >
                                            <div className={classes.cardLogo}>
                                                <Image
                                                    src="/img/starSvgs/python-5.svg"
                                                    alt="js-logo"
                                                    layout="fill"
                                                    priority
                                                />
                                            </div>
                                        </Grid>
                                        <Grid
                                            item
                                            container
                                            direction="column"
                                            justify="flex-start"
                                            alignItems="flex-start"
                                            spacing={0}
                                            xs={9}
                                            style={{
                                                // width: '50%',
                                                height: '100%',
                                                position: 'relative',
                                                marginLeft: '1rem',
                                                // marginTop: '-1rem',
                                            }}
                                        >
                                            <Grid
                                                item
                                                container
                                                xs={6}
                                                style={{ flexBasis: 'auto' }}
                                            >
                                                <Typography
                                                    variant="h6"
                                                    className={
                                                        classes.popUpTitle
                                                    }
                                                >
                                                    Python 3
                                                </Typography>
                                            </Grid>
                                            <Grid
                                                item
                                                container
                                                xs={6}
                                                style={{
                                                    // marginTop: '2rem',
                                                    // marginLeft: '-1rem',
                                                    // width: '8rem',
                                                    // height: '3rem',
                                                    flexBasis: 'auto',
                                                }}
                                            >
                                                {renderPopUpStars(3)}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        item
                                        className={classes.popUpDescription}
                                    >
                                        <Typography
                                            variant="body"
                                            className={classes.popUpDescText}
                                        >
                                            ksdjfshdlkjfh lkasjdfhisaudhfoihe
                                            wlfihwe lfh wef qwehfor
                                            wrferwgvrsbvb ver wer gerwg erf qwef
                                            wef wef wef qwef wef qwef we fwef
                                            wef{' '}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <CardMedia className={classes.cardMedia}>
                                <div className={classes.cardLogo}>
                                    <Image
                                        src="/img/starSvgs/python-5.svg"
                                        alt="js-logo"
                                        layout="fill"
                                        priority
                                    />
                                </div>
                            </CardMedia>
                            <CardActions
                                className={`${classes.starts} ${classes['MuiCardActions-root']}`}
                            >
                                {renderStars(3)}
                            </CardActions>
                        </Card>
                        <Card
                            className={clsx(
                                classes.skillCard,
                                classes.java,
                                'skillCardAnime'
                            )}
                            onMouseEnter={toggleSkillAnimeFront}
                            onMouseLeave={toggleSkillAnimeFront}
                        >
                            <CardContent className={classes.cardTitleDesc}>
                                <Grid
                                    container
                                    spacing={0}
                                    className={classes.popUpContainer}
                                    direction="column"
                                    justify="flex-start"
                                >
                                    <Grid
                                        item
                                        container
                                        direction="row"
                                        justify="flex-start"
                                        className={classes.popUpTitleSection}
                                    >
                                        <Grid
                                            item
                                            className={classes.popUpLogo}
                                            xs={2}
                                        >
                                            <div className={classes.cardLogo}>
                                                <Image
                                                    src="/img/starSvgs/java.svg"
                                                    alt="js-logo"
                                                    layout="fill"
                                                    priority
                                                />
                                            </div>
                                        </Grid>
                                        <Grid
                                            item
                                            container
                                            direction="column"
                                            justify="flex-start"
                                            alignItems="flex-start"
                                            spacing={0}
                                            xs={9}
                                            style={{
                                                // width: '50%',
                                                height: '100%',
                                                position: 'relative',
                                                marginLeft: '1rem',
                                                // marginTop: '-1rem',
                                            }}
                                        >
                                            <Grid
                                                item
                                                container
                                                xs={6}
                                                style={{ flexBasis: 'auto' }}
                                            >
                                                <Typography
                                                    variant="h6"
                                                    className={
                                                        classes.popUpTitle
                                                    }
                                                >
                                                    Java
                                                </Typography>
                                            </Grid>
                                            <Grid
                                                item
                                                container
                                                xs={6}
                                                style={{
                                                    // marginTop: '2rem',
                                                    // marginLeft: '-1rem',
                                                    // width: '8rem',
                                                    // height: '3rem',
                                                    flexBasis: 'auto',
                                                }}
                                            >
                                                {renderPopUpStars(3)}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        item
                                        className={classes.popUpDescription}
                                    >
                                        <Typography
                                            variant="body"
                                            className={classes.popUpDescText}
                                        >
                                            ksdjfshdlkjfh lkasjdfhisaudhfoihe
                                            wlfihwe lfh wef qwehfor
                                            wrferwgvrsbvb ver wer gerwg erf qwef
                                            wef wef wef qwef wef qwef we fwef
                                            wef{' '}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <CardMedia className={classes.cardMedia}>
                                <div className={classes.cardLogo}>
                                    <Image
                                        src="/img/starSvgs/java.svg"
                                        alt="js-logo"
                                        layout="fill"
                                        priority
                                    />
                                </div>
                            </CardMedia>
                            <CardActions
                                className={`${classes.starts} ${classes['MuiCardActions-root']}`}
                            >
                                {renderStars(3)}
                            </CardActions>
                        </Card>
                        <Card
                            className={clsx(
                                classes.skillCard,
                                classes.cpp,
                                'skillCardAnime'
                            )}
                            onMouseEnter={toggleSkillAnimeCenter}
                            onMouseLeave={toggleSkillAnimeCenter}
                        >
                            <CardContent className={classes.cardTitleDesc}>
                                <Grid
                                    container
                                    spacing={0}
                                    className={classes.popUpContainer}
                                    direction="column"
                                    justify="flex-start"
                                >
                                    <Grid
                                        item
                                        container
                                        direction="row"
                                        justify="flex-start"
                                        className={classes.popUpTitleSection}
                                    >
                                        <Grid
                                            item
                                            className={classes.popUpLogo}
                                            xs={2}
                                        >
                                            <div className={classes.cardLogo}>
                                                <Image
                                                    src="/img/starSvgs/c.svg"
                                                    alt="js-logo"
                                                    layout="fill"
                                                    priority
                                                />
                                            </div>
                                        </Grid>
                                        <Grid
                                            item
                                            container
                                            direction="column"
                                            justify="flex-start"
                                            alignItems="flex-start"
                                            spacing={0}
                                            xs={9}
                                            style={{
                                                // width: '50%',
                                                height: '100%',
                                                position: 'relative',
                                                marginLeft: '1rem',
                                                // marginTop: '-1rem',
                                            }}
                                        >
                                            <Grid
                                                item
                                                container
                                                xs={6}
                                                style={{ flexBasis: 'auto' }}
                                            >
                                                <Typography
                                                    variant="h6"
                                                    className={
                                                        classes.popUpTitle
                                                    }
                                                >
                                                    C++
                                                </Typography>
                                            </Grid>
                                            <Grid
                                                item
                                                container
                                                xs={6}
                                                style={{
                                                    // marginTop: '2rem',
                                                    // marginLeft: '-1rem',
                                                    // width: '8rem',
                                                    // height: '3rem',
                                                    flexBasis: 'auto',
                                                }}
                                            >
                                                {renderPopUpStars(3)}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        item
                                        className={classes.popUpDescription}
                                    >
                                        <Typography
                                            variant="body"
                                            className={classes.popUpDescText}
                                        >
                                            ksdjfshdlkjfh lkasjdfhisaudhfoihe
                                            wlfihwe lfh wef qwehfor
                                            wrferwgvrsbvb ver wer gerwg erf qwef
                                            wef wef wef qwef wef qwef we fwef
                                            wef{' '}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <CardMedia className={classes.cardMedia}>
                                <div className={classes.cardLogo}>
                                    <Image
                                        src="/img/starSvgs/c.svg"
                                        alt="js-logo"
                                        layout="fill"
                                        priority
                                    />
                                </div>
                            </CardMedia>
                            <CardActions
                                className={`${classes.starts} ${classes['MuiCardActions-root']}`}
                            >
                                {renderStars(3)}
                            </CardActions>
                        </Card>
                        <Card
                            className={clsx(
                                classes.skillCard,
                                classes.mongodb,
                                'skillCardAnime'
                            )}
                            onMouseEnter={toggleSkillAnimeCenter}
                            onMouseLeave={toggleSkillAnimeCenter}
                        >
                            <CardContent className={classes.cardTitleDesc}>
                                <Grid
                                    container
                                    spacing={0}
                                    className={classes.popUpContainer}
                                    direction="column"
                                    justify="flex-start"
                                >
                                    <Grid
                                        item
                                        container
                                        direction="row"
                                        justify="flex-start"
                                        className={classes.popUpTitleSection}
                                    >
                                        <Grid
                                            item
                                            className={classes.popUpLogo}
                                            xs={2}
                                        >
                                            <div className={classes.cardLogo}>
                                                <Image
                                                    src="/img/starSvgs/mongodb.svg"
                                                    alt="js-logo"
                                                    layout="fill"
                                                    priority
                                                />
                                            </div>
                                        </Grid>
                                        <Grid
                                            item
                                            container
                                            direction="column"
                                            justify="flex-start"
                                            alignItems="flex-start"
                                            spacing={0}
                                            xs={9}
                                            style={{
                                                // width: '50%',
                                                height: '100%',
                                                position: 'relative',
                                                marginLeft: '1rem',
                                                // marginTop: '-1rem',
                                            }}
                                        >
                                            <Grid
                                                item
                                                container
                                                xs={6}
                                                style={{ flexBasis: 'auto' }}
                                            >
                                                <Typography
                                                    variant="h6"
                                                    className={
                                                        classes.popUpTitle
                                                    }
                                                >
                                                    Mongo DB
                                                </Typography>
                                            </Grid>
                                            <Grid
                                                item
                                                container
                                                xs={6}
                                                style={{
                                                    // marginTop: '2rem',
                                                    // marginLeft: '-1rem',
                                                    // width: '8rem',
                                                    // height: '3rem',
                                                    flexBasis: 'auto',
                                                }}
                                            >
                                                {renderPopUpStars(3)}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        item
                                        className={classes.popUpDescription}
                                    >
                                        <Typography
                                            variant="body"
                                            className={classes.popUpDescText}
                                        >
                                            ksdjfshdlkjfh lkasjdfhisaudhfoihe
                                            wlfihwe lfh wef qwehfor
                                            wrferwgvrsbvb ver wer gerwg erf qwef
                                            wef wef wef qwef wef qwef we fwef
                                            wef{' '}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <CardMedia className={classes.cardMedia}>
                                <div className={classes.cardLogo}>
                                    <Image
                                        src="/img/starSvgs/mongodb.svg"
                                        alt="js-logo"
                                        layout="fill"
                                        priority
                                    />
                                </div>
                            </CardMedia>
                            <CardActions
                                className={`${classes.starts} ${classes['MuiCardActions-root']}`}
                            >
                                {renderStars(3)}
                            </CardActions>
                        </Card>
                        <Card
                            className={clsx(
                                classes.skillCard,
                                classes.nextJs,
                                'skillCardAnime'
                            )}
                            onMouseEnter={toggleSkillAnimeLast}
                            onMouseLeave={toggleSkillAnimeLast}
                        >
                            <CardContent className={classes.cardTitleDesc}>
                                <Grid
                                    container
                                    spacing={0}
                                    className={classes.popUpContainer}
                                    direction="column"
                                    justify="flex-start"
                                >
                                    <Grid
                                        item
                                        container
                                        direction="row"
                                        justify="flex-start"
                                        className={classes.popUpTitleSection}
                                    >
                                        <Grid
                                            item
                                            className={classes.popUpLogo}
                                            xs={2}
                                        >
                                            <div className={classes.cardLogo}>
                                                <Image
                                                    src="/img/starSvgs/nextjs-3.svg"
                                                    alt="js-logo"
                                                    layout="fill"
                                                    priority
                                                />
                                            </div>
                                        </Grid>
                                        <Grid
                                            item
                                            container
                                            direction="column"
                                            justify="flex-start"
                                            alignItems="flex-start"
                                            spacing={0}
                                            xs={9}
                                            style={{
                                                // width: '50%',
                                                height: '100%',
                                                position: 'relative',
                                                marginLeft: '1rem',
                                                // marginTop: '-1rem',
                                            }}
                                        >
                                            <Grid
                                                item
                                                container
                                                xs={6}
                                                style={{ flexBasis: 'auto' }}
                                            >
                                                <Typography
                                                    variant="h6"
                                                    className={
                                                        classes.popUpTitle
                                                    }
                                                >
                                                    Next JS
                                                </Typography>
                                            </Grid>
                                            <Grid
                                                item
                                                container
                                                xs={6}
                                                style={{
                                                    // marginTop: '2rem',
                                                    // marginLeft: '-1rem',
                                                    // width: '8rem',
                                                    // height: '3rem',
                                                    flexBasis: 'auto',
                                                }}
                                            >
                                                {renderPopUpStars(3)}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        item
                                        className={classes.popUpDescription}
                                    >
                                        <Typography
                                            variant="body"
                                            className={classes.popUpDescText}
                                        >
                                            ksdjfshdlkjfh lkasjdfhisaudhfoihe
                                            wlfihwe lfh wef qwehfor
                                            wrferwgvrsbvb ver wer gerwg erf qwef
                                            wef wef wef qwef wef qwef we fwef
                                            wef{' '}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <CardMedia className={classes.cardMedia}>
                                <div className={classes.cardLogo}>
                                    <Image
                                        src="/img/starSvgs/nextjs-3.svg"
                                        alt="js-logo"
                                        layout="fill"
                                        priority
                                    />
                                </div>
                            </CardMedia>
                            <CardActions
                                className={`${classes.starts} ${classes['MuiCardActions-root']}`}
                            >
                                {renderStars(3)}
                            </CardActions>
                        </Card>
                        <Card
                            className={clsx(
                                classes.skillCard,
                                classes.git,
                                'skillCardAnime'
                            )}
                            onMouseEnter={toggleSkillAnimeCenter}
                            onMouseLeave={toggleSkillAnimeCenter}
                        >
                            <CardContent className={classes.cardTitleDesc}>
                                <Grid
                                    container
                                    spacing={0}
                                    className={classes.popUpContainer}
                                    direction="column"
                                    justify="flex-start"
                                >
                                    <Grid
                                        item
                                        container
                                        direction="row"
                                        justify="flex-start"
                                        className={classes.popUpTitleSection}
                                    >
                                        <Grid
                                            item
                                            className={classes.popUpLogo}
                                            xs={2}
                                        >
                                            <div className={classes.cardLogo}>
                                                <Image
                                                    src="/img/starSvgs/git.svg"
                                                    alt="js-logo"
                                                    layout="fill"
                                                    priority
                                                />
                                            </div>
                                        </Grid>
                                        <Grid
                                            item
                                            container
                                            direction="column"
                                            justify="flex-start"
                                            alignItems="flex-start"
                                            spacing={0}
                                            xs={9}
                                            style={{
                                                // width: '50%',
                                                height: '100%',
                                                position: 'relative',
                                                marginLeft: '1rem',
                                                // marginTop: '-1rem',
                                            }}
                                        >
                                            <Grid
                                                item
                                                container
                                                xs={6}
                                                style={{ flexBasis: 'auto' }}
                                            >
                                                <Typography
                                                    variant="h6"
                                                    className={
                                                        classes.popUpTitle
                                                    }
                                                >
                                                    Git
                                                </Typography>
                                            </Grid>
                                            <Grid
                                                item
                                                container
                                                xs={6}
                                                style={{
                                                    // marginTop: '2rem',
                                                    // marginLeft: '-1rem',
                                                    // width: '8rem',
                                                    // height: '3rem',
                                                    flexBasis: 'auto',
                                                }}
                                            >
                                                {renderPopUpStars(3)}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        item
                                        className={classes.popUpDescription}
                                    >
                                        <Typography
                                            variant="body"
                                            className={classes.popUpDescText}
                                        >
                                            ksdjfshdlkjfh lkasjdfhisaudhfoihe
                                            wlfihwe lfh wef qwehfor
                                            wrferwgvrsbvb ver wer gerwg erf qwef
                                            wef wef wef qwef wef qwef we fwef
                                            wef{' '}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <CardMedia className={classes.cardMedia}>
                                <div className={classes.cardLogo}>
                                    <Image
                                        src="/img/starSvgs/git.svg"
                                        alt="js-logo"
                                        layout="fill"
                                        priority
                                    />
                                </div>
                            </CardMedia>
                            <CardActions
                                className={`${classes.starts} ${classes['MuiCardActions-root']}`}
                            >
                                {renderStars(3)}
                            </CardActions>
                        </Card>
                        <Card
                            className={clsx(
                                classes.skillCard,
                                classes.animeJs,
                                'skillCardAnime'
                            )}
                            onMouseEnter={toggleSkillAnimeCenter}
                            onMouseLeave={toggleSkillAnimeCenter}
                        >
                            <CardContent className={classes.cardTitleDesc}>
                                <Grid
                                    container
                                    spacing={0}
                                    className={classes.popUpContainer}
                                    direction="column"
                                    justify="flex-start"
                                >
                                    <Grid
                                        item
                                        container
                                        direction="row"
                                        justify="flex-start"
                                        className={classes.popUpTitleSection}
                                    >
                                        <Grid
                                            item
                                            className={classes.popUpLogo}
                                            xs={2}
                                        >
                                            <div className={classes.cardLogo}>
                                                <Image
                                                    src="/img/starSvgs/animejs.svg"
                                                    alt="js-logo"
                                                    layout="fill"
                                                    priority
                                                />
                                            </div>
                                        </Grid>
                                        <Grid
                                            item
                                            container
                                            direction="column"
                                            justify="flex-start"
                                            alignItems="flex-start"
                                            spacing={0}
                                            xs={9}
                                            style={{
                                                // width: '50%',
                                                height: '100%',
                                                position: 'relative',
                                                marginLeft: '1rem',
                                                // marginTop: '-1rem',
                                            }}
                                        >
                                            <Grid
                                                item
                                                container
                                                xs={6}
                                                style={{ flexBasis: 'auto' }}
                                            >
                                                <Typography
                                                    variant="h6"
                                                    className={
                                                        classes.popUpTitle
                                                    }
                                                >
                                                    Anime JS
                                                </Typography>
                                            </Grid>
                                            <Grid
                                                item
                                                container
                                                xs={6}
                                                style={{
                                                    // marginTop: '2rem',
                                                    // marginLeft: '-1rem',
                                                    // width: '8rem',
                                                    // height: '3rem',
                                                    flexBasis: 'auto',
                                                }}
                                            >
                                                {renderPopUpStars(2)}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        item
                                        className={classes.popUpDescription}
                                    >
                                        <Typography
                                            variant="body"
                                            className={classes.popUpDescText}
                                        >
                                            ksdjfshdlkjfh lkasjdfhisaudhfoihe
                                            wlfihwe lfh wef qwehfor
                                            wrferwgvrsbvb ver wer gerwg erf qwef
                                            wef wef wef qwef wef qwef we fwef
                                            wef{' '}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <CardMedia className={classes.cardMedia}>
                                <div className={classes.cardLogo}>
                                    <Image
                                        src="/img/starSvgs/animejs.svg"
                                        alt="js-logo"
                                        layout="fill"
                                        priority
                                    />
                                </div>
                            </CardMedia>
                            <CardActions
                                className={`${classes.starts} ${classes['MuiCardActions-root']}`}
                            >
                                {renderStars(2)}
                            </CardActions>
                        </Card>
                        <Card
                            className={clsx(
                                classes.skillCard,
                                classes.d3Js,
                                'skillCardAnime'
                            )}
                            onMouseEnter={toggleSkillAnimeLast}
                            onMouseLeave={toggleSkillAnimeLast}
                        >
                            <CardContent className={classes.cardTitleDesc}>
                                <Grid
                                    container
                                    spacing={0}
                                    className={classes.popUpContainer}
                                    direction="column"
                                    justify="flex-start"
                                >
                                    <Grid
                                        item
                                        container
                                        direction="row"
                                        justify="flex-start"
                                        className={classes.popUpTitleSection}
                                    >
                                        <Grid
                                            item
                                            className={classes.popUpLogo}
                                            xs={2}
                                        >
                                            <div className={classes.cardLogo}>
                                                <Image
                                                    src="/img/starSvgs/d3-2.svg"
                                                    alt="js-logo"
                                                    layout="fill"
                                                    priority
                                                />
                                            </div>
                                        </Grid>
                                        <Grid
                                            item
                                            container
                                            direction="column"
                                            justify="flex-start"
                                            alignItems="flex-start"
                                            spacing={0}
                                            xs={9}
                                            style={{
                                                // width: '50%',
                                                height: '100%',
                                                position: 'relative',
                                                marginLeft: '1rem',
                                                // marginTop: '-1rem',
                                            }}
                                        >
                                            <Grid
                                                item
                                                container
                                                xs={6}
                                                style={{ flexBasis: 'auto' }}
                                            >
                                                <Typography
                                                    variant="h6"
                                                    className={
                                                        classes.popUpTitle
                                                    }
                                                >
                                                    D3 JS
                                                </Typography>
                                            </Grid>
                                            <Grid
                                                item
                                                container
                                                xs={6}
                                                style={{
                                                    // marginTop: '2rem',
                                                    // marginLeft: '-1rem',
                                                    // width: '8rem',
                                                    // height: '3rem',
                                                    flexBasis: 'auto',
                                                }}
                                            >
                                                {renderPopUpStars(1)}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        item
                                        className={classes.popUpDescription}
                                    >
                                        <Typography
                                            variant="body"
                                            className={classes.popUpDescText}
                                        >
                                            ksdjfshdlkjfh lkasjdfhisaudhfoihe
                                            wlfihwe lfh wef qwehfor
                                            wrferwgvrsbvb ver wer gerwg erf qwef
                                            wef wef wef qwef wef qwef we fwef
                                            wef{' '}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <CardMedia className={classes.cardMedia}>
                                <div className={classes.cardLogo}>
                                    <Image
                                        src="/img/starSvgs/d3-2.svg"
                                        alt="js-logo"
                                        layout="fill"
                                        priority
                                    />
                                </div>
                            </CardMedia>
                            <CardActions
                                className={`${classes.starts} ${classes['MuiCardActions-root']}`}
                            >
                                {renderStars(1)}
                            </CardActions>
                        </Card>
                    </Container>
                </Container>

                <Container
                    id="aspirationalskillSection"
                    className={classes.aspiantionalSkillContentSections}
                >
                    <Typography variant="h3" className={classes.sectionTitle}>
                        Aspirational Skills
                    </Typography>
                    <Container className={classes.skillsContainer}>
                        <Card
                            className={clsx(
                                classes.skillCard,
                                classes.reactNative
                            )}
                        >
                            <CardContent className={classes.cardTitleDesc}>
                                <Grid
                                    container
                                    spacing={0}
                                    className={classes.popUpContainer}
                                    direction="column"
                                    justify="flex-start"
                                >
                                    <Grid
                                        item
                                        container
                                        direction="row"
                                        justify="flex-start"
                                        className={classes.popUpTitleSection}
                                    >
                                        <Grid
                                            item
                                            className={classes.popUpLogo}
                                            xs={2}
                                        >
                                            <div className={classes.cardLogo}>
                                                <Image
                                                    src="/img/starSvgs/react-2.svg"
                                                    alt="js-logo"
                                                    layout="fill"
                                                    priority
                                                />
                                            </div>
                                        </Grid>
                                        <Grid
                                            item
                                            container
                                            direction="column"
                                            justify="flex-start"
                                            alignItems="flex-start"
                                            spacing={0}
                                            xs={9}
                                            style={{
                                                // width: '50%',
                                                height: '100%',
                                                position: 'relative',
                                                marginLeft: '1rem',
                                                // marginTop: '-1rem',
                                            }}
                                        >
                                            <Grid
                                                item
                                                container
                                                // xs={6}
                                                style={{ flexBasis: 'auto' }}
                                            >
                                                <Typography
                                                    variant="h6"
                                                    className={
                                                        classes.popUpTitle
                                                    }
                                                >
                                                    React Native
                                                </Typography>
                                            </Grid>
                                            <Grid
                                                item
                                                container
                                                // xs={6}
                                                style={{
                                                    // marginTop: '2rem',
                                                    // marginLeft: '-1rem',
                                                    // width: '8rem',
                                                    // height: '3rem',
                                                    flexBasis: 'auto',
                                                }}
                                            >
                                                {renderPopUpStars(0)}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        item
                                        className={classes.popUpDescription}
                                    >
                                        <Typography
                                            variant="body"
                                            className={classes.popUpDescText}
                                        >
                                            ksdjfshdlkjfh lkasjdfhisaudhfoihe
                                            wlfihwe lfh wef qwehfor
                                            wrferwgvrsbvb ver wer gerwg erf qwef
                                            wef wef wef qwef wef qwef we fwef
                                            wef{' '}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <CardMedia className={classes.cardMedia}>
                                <div className={classes.cardLogo}>
                                    <Image
                                        src="/img/starSvgs/react-2.svg"
                                        alt="js-logo"
                                        layout="fill"
                                        priority
                                    />
                                </div>
                            </CardMedia>
                            <CardActions
                                className={`${classes.starts} ${classes['MuiCardActions-root']}`}
                            >
                                {renderStars(0)}
                            </CardActions>
                        </Card>
                        <Card
                            className={clsx(
                                classes.skillCard,
                                classes.tensorflowJs
                            )}
                        >
                            <CardContent className={classes.cardTitleDesc}>
                                <Grid
                                    container
                                    spacing={0}
                                    className={classes.popUpContainer}
                                    direction="column"
                                    justify="flex-start"
                                >
                                    <Grid
                                        item
                                        container
                                        direction="row"
                                        justify="flex-start"
                                        className={classes.popUpTitleSection}
                                    >
                                        <Grid
                                            item
                                            className={classes.popUpLogo}
                                            xs={2}
                                        >
                                            <div className={classes.cardLogo}>
                                                <Image
                                                    src="/img/starSvgs/tensorflow-2.svg"
                                                    alt="js-logo"
                                                    layout="fill"
                                                    priority
                                                />
                                            </div>
                                        </Grid>
                                        <Grid
                                            item
                                            container
                                            direction="column"
                                            justify="flex-start"
                                            alignItems="flex-start"
                                            spacing={0}
                                            xs={9}
                                            style={{
                                                // width: '50%',
                                                height: '100%',
                                                position: 'relative',
                                                marginLeft: '1rem',
                                                // marginTop: '-1rem',
                                            }}
                                        >
                                            <Grid
                                                item
                                                container
                                                // xs={6}
                                                style={{ flexBasis: 'auto' }}
                                            >
                                                <Typography
                                                    variant="h6"
                                                    className={
                                                        classes.popUpTitle
                                                    }
                                                >
                                                    Tensorflow JS
                                                </Typography>
                                            </Grid>
                                            <Grid
                                                item
                                                container
                                                // xs={6}
                                                style={{
                                                    // marginTop: '2rem',
                                                    // marginLeft: '-1rem',
                                                    // width: '8rem',
                                                    // height: '3rem',
                                                    flexBasis: 'auto',
                                                }}
                                            >
                                                {renderPopUpStars(0)}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        item
                                        className={classes.popUpDescription}
                                    >
                                        <Typography
                                            variant="body"
                                            className={classes.popUpDescText}
                                        >
                                            ksdjfshdlkjfh lkasjdfhisaudhfoihe
                                            wlfihwe lfh wef qwehfor
                                            wrferwgvrsbvb ver wer gerwg erf qwef
                                            wef wef wef qwef wef qwef we fwef
                                            wef{' '}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <CardMedia className={classes.cardMedia}>
                                <div className={classes.cardLogo}>
                                    <Image
                                        src="/img/starSvgs/tensorflow-2.svg"
                                        alt="js-logo"
                                        layout="fill"
                                        priority
                                    />
                                </div>
                            </CardMedia>
                            <CardActions
                                className={`${classes.starts} ${classes['MuiCardActions-root']}`}
                            >
                                {renderStars(0)}
                            </CardActions>
                        </Card>
                        <Card
                            className={clsx(
                                classes.skillCard,
                                classes.tensorflowPy
                            )}
                        >
                            <CardContent className={classes.cardTitleDesc}>
                                <Grid
                                    container
                                    spacing={0}
                                    className={classes.popUpContainer}
                                    direction="column"
                                    justify="flex-start"
                                >
                                    <Grid
                                        item
                                        container
                                        direction="row"
                                        justify="flex-start"
                                        className={classes.popUpTitleSection}
                                    >
                                        <Grid
                                            item
                                            className={classes.popUpLogo}
                                            xs={2}
                                        >
                                            <div className={classes.cardLogo}>
                                                <Image
                                                    src="/img/starSvgs/tensorflow-2.svg"
                                                    alt="js-logo"
                                                    layout="fill"
                                                    priority
                                                />
                                            </div>
                                        </Grid>
                                        <Grid
                                            item
                                            container
                                            direction="column"
                                            justify="flex-start"
                                            alignItems="flex-start"
                                            spacing={0}
                                            xs={9}
                                            style={{
                                                // width: '50%',
                                                height: '100%',
                                                position: 'relative',
                                                marginLeft: '1rem',
                                                // marginTop: '-1rem',
                                            }}
                                        >
                                            <Grid
                                                item
                                                container
                                                // xs={6}
                                                style={{ flexBasis: 'auto' }}
                                            >
                                                <Typography
                                                    variant="h6"
                                                    className={
                                                        classes.popUpTitle
                                                    }
                                                >
                                                    Tensorflow . PY
                                                </Typography>
                                            </Grid>
                                            <Grid
                                                item
                                                container
                                                // xs={6}
                                                style={{
                                                    // marginTop: '2rem',
                                                    // marginLeft: '-1rem',
                                                    // width: '8rem',
                                                    // height: '3rem',
                                                    flexBasis: 'auto',
                                                }}
                                            >
                                                {renderPopUpStars(0)}
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid
                                        item
                                        className={classes.popUpDescription}
                                    >
                                        <Typography
                                            variant="body"
                                            className={classes.popUpDescText}
                                        >
                                            ksdjfshdlkjfh lkasjdfhisaudhfoihe
                                            wlfihwe lfh wef qwehfor
                                            wrferwgvrsbvb ver wer gerwg erf qwef
                                            wef wef wef qwef wef qwef we fwef
                                            wef{' '}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <CardMedia className={classes.cardMedia}>
                                <div className={classes.cardLogo}>
                                    <Image
                                        src="/img/starSvgs/tensorflow-2.svg"
                                        alt="js-logo"
                                        layout="fill"
                                        priority
                                    />
                                </div>
                            </CardMedia>
                            <CardActions
                                className={`${classes.starts} ${classes['MuiCardActions-root']}`}
                            >
                                {renderStars(0)}
                            </CardActions>
                        </Card>
                    </Container>
                </Container>

                <Grid
                    id="projectSection"
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
                <Grid
                    id="experienceSection"
                    container
                    spacing={3}
                    direction="column"
                    className={classes.contentSections}
                >
                    <Typography variant="h3" className={classes.sectionTitle}>
                        Work Experience
                    </Typography>
                    <Grid
                        direction="row"
                        spacing={2}
                        item
                        container
                        xs={12}
                        className={classes.workExpContainer}
                    >
                        <Grid item xs={3} className={classes.expLogo}>
                            <Image
                                src="/img/workExpImgs/wipro/wiproExp.png"
                                alt="wipro-logo"
                                layout="fill"
                            />
                            <div
                                style={{
                                    width: '75%',
                                    height: '20%',
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                }}
                            >
                                <Image
                                    src="/img/workExpImgs/wipro/Group 11.png"
                                    alt="wipro-logo"
                                    layout="fill"
                                />
                            </div>
                        </Grid>
                        <Grid
                            direction="column"
                            spacing={1}
                            item
                            container
                            xs={9}
                            className={classes.expContent}
                            alignItems="flex-start"
                        >
                            <Grid item>
                                <Typography
                                    variant="h5"
                                    className={classes.expNum}
                                >
                                    1.5
                                </Typography>
                                <Typography
                                    variant="body"
                                    className={classes.expYears}
                                >
                                    years
                                </Typography>
                            </Grid>
                            <Grid item style={{ textAlign: 'start' }}>
                                <Typography
                                    variant="body"
                                    className={classes.expText}
                                >
                                    Working on Webmethods (Java based
                                    integration tool) for the past 1 year as
                                    developer
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </main>

            <footer style={{ height: '110vh' }}></footer>
        </div>
    );
}
