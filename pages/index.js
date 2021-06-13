// next js related
import Head from 'next/head';
import Image from 'next/image';
// React related
import { useState, useEffect, useRef } from 'react';
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
    Dialog,
} from '@material-ui/core';
import { Business } from '@material-ui/icons';
import clsx from 'clsx';
// Simple bar for nice scroller
// import 'simplebar';
// import 'simplebar/dist/simplebar.css';
// Custon styles
import styles from '../styles/Home.module.css';
import ProjectModal from '../components/ProjectModal';
import {
    projects,
    primaryColor,
    secondaryColor,
    emptySTarColor,
    fullStarColor,
    lightTextColor,
    skills,
} from '../utils/constatnts';
// anime js
import anime from 'animejs';
import SkillModal from '../components/SkillModal';
// const anime = require('animejs');

const useStyles = makeStyles((theme) => ({
    main: {
        width: '100vw',
        overflow: 'hidden !important',
    },
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
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'space-between',
        },
    },
    appBarText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: '0.95rem',
        marginRight: '2.5rem',
        cursor: 'pointer',
        '& > span': {
            [theme.breakpoints.down('sm')]: {
                fontSize: '0.75rem',
            },
            [theme.breakpoints.down('xs')]: {
                display: 'none',
            },
        },
    },
    headerIcon: {
        width: '2rem',
        marginRight: '0.5rem',
        fill: secondaryColor,
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
        top: '6rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 2,
        width: '22rem',
        height: '22rem',
        '&:before': {
            content: '""',
            position: 'absolute',
            top: '-4.5%',
            left: '2.5%',
            width: '95%',
            height: '95%',
            backgroundColor: '#A43735',
            borderRadius: '50%',
        },
        [theme.breakpoints.down('md')]: {
            top: '3rem',
            width: '21rem',
            height: '21rem',
        },
        [theme.breakpoints.down('sm')]: {
            top: '1.5rem',
            width: '17.5rem',
            height: '17rem',
        },
        [theme.breakpoints.down('xs')]: {
            top: '1.25rem',
            width: '11rem',
            height: '10.5rem',
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
    footerText1: {
        fontSize: '1.5rem',
        [theme.breakpoints.down('md')]: {
            fontSize: '1.5rem',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.75rem',
        },
    },
    footerText2: {
        fontSize: '1.5rem',
        [theme.breakpoints.down('md')]: {
            fontSize: '1rem',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.75rem',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.6rem',
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
        fontSize: '0.8rem',
        overflowWrap: 'break-word',
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.7rem',
        },
    },
    contentSections: {
        position: 'relative',
        width: '80vw',
        minHeight: '30rem',
        margin: '5rem auto',
        textAlign: 'center',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    skillContentSections: {
        position: 'relative',
        width: '80vw',
        minHeight: '30rem',
        margin: '5rem auto',
        textAlign: 'center',
        overflow: 'visible',
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            minHeight: '30rem',
        },
    },
    aspiantionalSkillContentSections: {
        position: 'relative',
        width: '80vw',
        minHeight: '15rem',
        margin: '5rem auto',
        textAlign: 'center',
        overflow: 'visible',
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {},
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
        width: '75%',
        height: '100%',
        overflow: 'visible',
        margin: '0 auto',
        marginTop: '3rem',
        [theme.breakpoints.down('sm')]: {
            top: 0,
            left: 0,
            position: 'relative',
            transform: 'translate(0%, 0%)',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            justifyItems: 'center',
        },
        [theme.breakpoints.down('xs')]: {
            gridTemplateColumns: 'repeat(3, 1fr)',
        },
    },
    aspSkillsContainer: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute',
        width: '75%',
        height: '100%',
        overflow: 'visible',
        margin: '0 auto',
        marginTop: '3rem',
        [theme.breakpoints.down('sm')]: {
            top: 0,
            left: 0,
            position: 'relative',
            transform: 'translate(0%, 0%)',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            justifyItems: 'center',
        },
        [theme.breakpoints.down('xs')]: {
            gridTemplateColumns: 'repeat(3, 1fr)',
        },
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
            minHeight: '10rem',
            opacity: 1,
            pointerEvents: 'fill',
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: '1.5rem',
            position: 'relative !important',
            top: '0  !important',
            left: '0  !important',
            cursor: 'pointer',
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
        [theme.breakpoints.down('xs')]: {
            left: 0,
            zIndex: 0,
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
        [theme.breakpoints.down('xs')]: {
            left: '30%',
            zIndex: 9,
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
        [theme.breakpoints.down('xs')]: {
            left: '60%',
            zIndex: 19,
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
        [theme.breakpoints.down('xs')]: {
            left: '90%',
            zIndex: 29,
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
        [theme.breakpoints.down('xs')]: {
            left: 0,
            zIndex: 0,
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
        [theme.breakpoints.down('xs')]: {
            left: '30%',
            zIndex: 9,
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
        [theme.breakpoints.down('xs')]: {
            left: '60%',
            zIndex: 19,
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
        [theme.breakpoints.down('xs')]: {
            left: '90%',
            zIndex: 29,
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
        [theme.breakpoints.down('xs')]: {
            left: 0,
            zIndex: 0,
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
        [theme.breakpoints.down('xs')]: {
            left: '30%',
            zIndex: 9,
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
        [theme.breakpoints.down('xs')]: {
            left: '60%',
            zIndex: 19,
        },
    },
    reactNative: {
        zIndex: 0,
        '&:hover': {
            zIndex: 50,
        },
    },
    d3_2: {
        position: 'absolute',
        top: '0',
        left: '30%',
        zIndex: 9,
        '&:hover': {
            zIndex: 50,
        },
    },
    tensorflowJs: {
        position: 'absolute',
        top: '0',
        left: '60%',
        zIndex: 19,
        '&:hover': {
            zIndex: 50,
        },
    },
    tensorflowPy: {
        position: 'absolute',
        top: '0',
        left: '90%',
        zIndex: 29,
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
        minHeight: 0.1,
        overflow: 'visible',
        pointerEvents: 'none',
        opacity: 0,
        padding: '0.1rem',
        backgroundColor: primaryColor,
        borderRadius: '1rem',
        display: 'block',
        zIndex: 1,
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    popUpContainer: {
        width: '100%',
        height: '100%',
        padding: '0.25rem',
    },
    skillModal: {
        // maxWidth: '75%',
        // minHeight: '20%',
        '& .MuiDialog-container': {
            minHeight: '30%',
            maxWidth: '75%',
            top: '50%',
            left: '50%',
            position: 'relative',
            transform: 'translate(-50%, -50%)',
        },
    },
    popUpLogo: {
        // height: '100%',
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
        marginLeft: '-30%',
        width: '70rem',
        transition: 'all 0.5s ease-out',
    },
    project2: {
        marginTop: '2rem',
        marginLeft: '30%',
        width: '70rem',
        transition: 'all 0.5s ease-out',
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
        textAlign: 'end',
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
        textAlign: 'start',
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
        textAlign: 'end',
    },
    projectTitle: {
        fontWeight: 'bold',
        letterSpacing: '0.25rem',
        color: '#ffffff',
        fontSize: '1.23rem',
        whiteSpace: 'nowrap',
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
        margin: '0.5rem 0',
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
            width: '35%',
        },
        [theme.breakpoints.down('xs')]: {
            height: '13rem',
            width: '40%',
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
            height: '13rem',
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
            height: '13rem',
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
            height: '13rem',
        },
    },
    basicButton: {
        color: '#8a8d90',
        fontStyle: 'italic',
        textTransform: 'capitalize',
        borderRadius: '0.25rem',
        [theme.breakpoints.down('xs')]: {
            minWidth: '5rem',
        },
    },
    workExpContainer: {
        marginTop: '-5rem',
        marginLeft: '5%',
        width: '100%',
        height: '11rem',
        [theme.breakpoints.down('sm')]: {
            marginTop: '-7rem',
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '-7rem',
        },
    },
    expLogo: {
        position: 'relative',
        width: '100%',
        height: '90%',
        [theme.breakpoints.down('xs')]: {
            marginTop: '25%',
            transform: 'translateY(-65%)',
            width: '50%',
            height: '50%',
        },
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
        fontWeight: 'normal',
        fontSize: '1.2rem',
    },
    expText: {
        color: '#fff',
        fontSize: '1rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.75rem',
        },
        [theme.breakpoints.down('xs')]: {
            '& span': {
                display: 'none',
            },
        },
    },
}));

export default function Home() {
    const classes = useStyles();

    const [showProject, setshowProject] = useState(false);
    const [currentProject, setcurrentProject] = useState(1);
    const [showSkill, setshowSkill] = useState(false);
    const [currentSkill, setcurrentSkill] = useState(null);

    // skills hover index
    const [skillIndex, setskillIndex] = useState(0);
    const [skillHovered, setskillHovered] = useState(false);

    const handleProjectChange = (num) => {
        // console.log('Project change requested', num);
        setcurrentProject(num);
    };

    const handleModalCLose = () => {
        // console.log('click event triggered');
        if (showProject) {
            setTimeout(() => {
                setshowProject(false);
            }, 1000);
            const modalEl = document.querySelector('.projectModal');
            modalEl.style.height = '0.1%';
            modalEl.style.opacity = 0;
        }
    };

    const handleSkillClick = (skill) => {
        if (window.innerWidth < 960) {
            setcurrentSkill(skill);
            setshowSkill(true);
        }
    };

    const renderStars = (stars) => {
        const num = Math.floor(stars);
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

    const renderPopUpStars = (stars) => {
        const num = Math.floor(stars);
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
            // console.log(document.scrollingElement.scrollTop);
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
        // console.log(`sceen width : ${window.innerWidth}`);
        if (window.innerWidth > 960) {
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
        }
    };
    const toggleSkillAnimeCenter = () => {
        // console.log(`sceen width : ${window.innerWidth}`);
        if (window.innerWidth > 960) {
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
        }
    };
    const toggleSkillAnimeLast = () => {
        // console.log(`sceen width : ${window.innerWidth}`);
        if (window.innerWidth > 960) {
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
        }
    };

    return (
        <div>
            <Head>
                <title>Rakhy's Portfolio</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* <header> */}
            <AppBar
                position="fixed"
                className={classes.rootAppBar}
                onClick={handleModalCLose}
            >
                <Toolbar className={classes.appBar}>
                    <Link href="#skillSection" className={classes.appBarText}>
                        <SvgIcon className={classes.headerIcon}>
                            <path d="M7.156 13.797c-0.656-1.437-1.156-3.344-1.156-5.797h-4v1.5c0 1.531 2.078 3.656 5.156 4.297zM24 9.5v-1.5h-4c0 2.453-0.5 4.359-1.156 5.797 3.078-0.641 5.156-2.766 5.156-4.297zM26 7.5v2c0 2.969-3.594 6.25-8.469 6.484-0.625 0.797-1.203 1.266-1.484 1.484-0.828 0.75-1.047 1.531-1.047 2.531s0.5 2 2 2 3 1 3 2.5v1c0 0.281-0.219 0.5-0.5 0.5h-13c-0.281 0-0.5-0.219-0.5-0.5v-1c0-1.5 1.5-2.5 3-2.5s2-1 2-2-0.219-1.781-1.047-2.531c-0.281-0.219-0.859-0.688-1.484-1.484-4.875-0.234-8.469-3.516-8.469-6.484v-2c0-0.828 0.672-1.5 1.5-1.5h4.5v-1.5c0-1.375 1.125-2.5 2.5-2.5h9c1.375 0 2.5 1.125 2.5 2.5v1.5h4.5c0.828 0 1.5 0.672 1.5 1.5z"></path>
                        </SvgIcon>
                        <span>My Skills</span>
                    </Link>
                    <Link
                        href="#aspirationalskillSection"
                        className={classes.appBarText}
                    >
                        <SvgIcon className={classes.headerIcon}>
                            <path d="M7 4h-6c-0.55 0-1 0.45-1 1v22c0 0.55 0.45 1 1 1h6c0.55 0 1-0.45 1-1v-22c0-0.55-0.45-1-1-1zM6 10h-4v-2h4v2z"></path>
                            <path d="M17 4h-6c-0.55 0-1 0.45-1 1v22c0 0.55 0.45 1 1 1h6c0.55 0 1-0.45 1-1v-22c0-0.55-0.45-1-1-1zM16 10h-4v-2h4v2z"></path>
                            <path d="M23.909 5.546l-5.358 2.7c-0.491 0.247-0.691 0.852-0.443 1.343l8.999 17.861c0.247 0.491 0.852 0.691 1.343 0.443l5.358-2.7c0.491-0.247 0.691-0.852 0.443-1.343l-8.999-17.861c-0.247-0.491-0.852-0.691-1.343-0.443z"></path>
                        </SvgIcon>
                        <span>Aspirational Skills</span>
                    </Link>
                    <Link href="#projectSection" className={classes.appBarText}>
                        <SvgIcon className={classes.headerIcon}>
                            <path d="M28 22v-16c0-1.1-0.9-2-2-2h-20c-1.1 0-2 0.9-2 2v16h-4v6h32v-6h-4zM20 26h-8v-2h8v2zM26 22h-20v-15.996c0.001-0.001 0.002-0.003 0.004-0.004h19.993c0.001 0.001 0.003 0.002 0.004 0.004v15.996z"></path>
                        </SvgIcon>
                        <span>Projects</span>
                    </Link>
                    <Link
                        href="#experienceSection"
                        className={classes.appBarText}
                    >
                        <SvgIcon className={classes.headerIcon}>
                            <path d="M0 32h16v-32h-16v32zM10 4h4v4h-4v-4zM10 12h4v4h-4v-4zM10 20h4v4h-4v-4zM2 4h4v4h-4v-4zM2 12h4v4h-4v-4zM2 20h4v4h-4v-4zM18 10h14v2h-14zM18 32h4v-8h6v8h4v-18h-14z"></path>
                        </SvgIcon>
                        <span>Work Experience</span>
                    </Link>
                </Toolbar>
            </AppBar>
            {/* </header> */}

            <main onClick={handleModalCLose} className={classes.main}>
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
                <Container
                    className={clsx(classes.dpTop, 'scrollImg')}
                    data-speed="8.5"
                >
                    <Image
                        src="/img/topSectionImages/profilePicture.png"
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
                        An ambitious self-taught Software Engineer, wanderer and
                        an endless learner with a passion to develop web
                        applications that drive the future and modern browser
                        based applications
                    </Typography>
                    <Typography variant="body1" className={classes.aboutMeDesc}>
                        Enthusiastically seeking full-time position developing
                        web applications, willing to grow as a fullstack web
                        developer and open source contributor as time progresses
                        along with growth of the organisation.
                    </Typography>
                    <Grid
                        container
                        // xs={12}
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
                                    href="https://www.linkedin.com/in/rakhsanth-rammohan-768b3611b"
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
                                    href="https://github.com/Rakhsanth"
                                    className={classes.contactItemTextDetail}
                                >
                                    https://github.com/Rakhsanth
                                </Link>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Link href="/docs/A4 - 3.pdf" download>
                                <Button variant="contained" color="primary">
                                    Download Resume
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
                            onClick={() => handleSkillClick('HTML 5')}
                        >
                            <CardContent
                                className={clsx(
                                    classes.cardTitleDesc,
                                    'mySkills'
                                )}
                            >
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
                                                {renderPopUpStars(
                                                    skills[0].stars
                                                )}
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
                                            {skills[0].description}
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
                                {renderStars(skills[0].stars)}
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
                            onClick={() => handleSkillClick('CSS 3')}
                        >
                            <CardContent
                                className={clsx(
                                    classes.cardTitleDesc,
                                    'mySkills'
                                )}
                            >
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
                                                {renderPopUpStars(
                                                    skills[1].stars
                                                )}
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
                                            {skills[1].description}
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
                                {renderStars(skills[1].stars)}
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
                            onClick={() => handleSkillClick('Javascript')}
                        >
                            <CardContent
                                className={clsx(
                                    classes.cardTitleDesc,
                                    'mySkills'
                                )}
                            >
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
                                                {renderPopUpStars(
                                                    skills[2].stars
                                                )}
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
                                            {skills[2].description}
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
                                {renderStars(skills[2].stars)}
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
                            onClick={() => handleSkillClick('React JS')}
                        >
                            <CardContent
                                className={clsx(
                                    classes.cardTitleDesc,
                                    'mySkills'
                                )}
                            >
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
                                                {renderPopUpStars(
                                                    skills[3].stars
                                                )}
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
                                            {skills[3].description}
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
                                {renderStars(skills[3].stars)}
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
                            onClick={() => handleSkillClick('Redux')}
                        >
                            <CardContent
                                className={clsx(
                                    classes.cardTitleDesc,
                                    'mySkills'
                                )}
                            >
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
                                                {renderPopUpStars(
                                                    skills[4].stars
                                                )}
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
                                            {skills[4].description}
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
                                {renderStars(skills[4].stars)}
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
                            onClick={() => handleSkillClick('NodeJs')}
                        >
                            <CardContent
                                className={clsx(
                                    classes.cardTitleDesc,
                                    'mySkills'
                                )}
                            >
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
                                                {renderPopUpStars(
                                                    skills[5].stars
                                                )}
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
                                            {skills[5].description}
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
                                {renderStars(skills[5].stars)}
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
                            onClick={() => handleSkillClick('Sass / Scss')}
                        >
                            <CardContent
                                className={clsx(
                                    classes.cardTitleDesc,
                                    'mySkills'
                                )}
                            >
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
                                                {renderPopUpStars(
                                                    skills[6].stars
                                                )}
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
                                            {skills[6].description}
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
                                {renderStars(skills[6].stars)}
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
                            onClick={() => handleSkillClick('Python 3')}
                        >
                            <CardContent
                                className={clsx(
                                    classes.cardTitleDesc,
                                    'mySkills'
                                )}
                            >
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
                                                {renderPopUpStars(
                                                    skills[7].stars
                                                )}
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
                                            {skills[7].description}
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
                                {renderStars(skills[7].stars)}
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
                            onClick={() => handleSkillClick('Java')}
                        >
                            <CardContent
                                className={clsx(
                                    classes.cardTitleDesc,
                                    'mySkills'
                                )}
                            >
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
                                                {renderPopUpStars(
                                                    skills[8].stars
                                                )}
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
                                            {skills[8].description}
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
                                {renderStars(skills[8].stars)}
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
                            onClick={() => handleSkillClick('C++')}
                        >
                            <CardContent
                                className={clsx(
                                    classes.cardTitleDesc,
                                    'mySkills'
                                )}
                            >
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
                                                {renderPopUpStars(
                                                    skills[9].stars
                                                )}
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
                                            {skills[9].description}
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
                                {renderStars(skills[9].stars)}
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
                            onClick={() => handleSkillClick('Mongo DB')}
                        >
                            <CardContent
                                className={clsx(
                                    classes.cardTitleDesc,
                                    'mySkills'
                                )}
                            >
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
                                                {renderPopUpStars(
                                                    skills[10].stars
                                                )}
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
                                            {skills[10].description}
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
                                {renderStars(skills[10].stars)}
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
                            onClick={() => handleSkillClick('Next JS')}
                        >
                            <CardContent
                                className={clsx(
                                    classes.cardTitleDesc,
                                    'mySkills'
                                )}
                            >
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
                                                {renderPopUpStars(
                                                    skills[11].stars
                                                )}
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
                                            {skills[11].description}
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
                                {renderStars(skills[11].stars)}
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
                            onClick={() => handleSkillClick('Git')}
                        >
                            <CardContent
                                className={clsx(
                                    classes.cardTitleDesc,
                                    'mySkills'
                                )}
                            >
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
                                                {renderPopUpStars(
                                                    skills[12].stars
                                                )}
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
                                            {skills[12].description}
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
                                {renderStars(skills[12].stars)}
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
                            onClick={() => handleSkillClick('Anime JS')}
                        >
                            <CardContent
                                className={clsx(
                                    classes.cardTitleDesc,
                                    'mySkills'
                                )}
                            >
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
                                                {renderPopUpStars(
                                                    skills[13].stars
                                                )}
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
                                            {skills[13].description}
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
                                {renderStars(skills[13].stars)}
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
                            onClick={() => handleSkillClick('D3 JS')}
                        >
                            <CardContent
                                className={clsx(
                                    classes.cardTitleDesc,
                                    'mySkills'
                                )}
                            >
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
                                                {renderPopUpStars(
                                                    skills[14].stars
                                                )}
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
                                            {skills[14].description}
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
                                {renderStars(skills[14].stars)}
                            </CardActions>
                        </Card>
                    </Container>
                </Container>

                <Container
                    id="aspirationalskillSection"
                    className={classes.aspiantionalSkillContentSections}
                >
                    <Typography
                        variant="h3"
                        className={classes.sectionTitle}
                        style={{ marginBottom: '2rem' }}
                    >
                        Aspirational Skills
                    </Typography>
                    <Container className={classes.aspSkillsContainer}>
                        <Card
                            className={clsx(
                                classes.skillCard,
                                classes.reactNative
                            )}
                            // onMouseEnter={toggleSkillAnimeFront}
                            // onMouseLeave={toggleSkillAnimeFront}
                            onClick={() => handleSkillClick('React Native')}
                        >
                            <CardContent
                                className={clsx(
                                    classes.cardTitleDesc,
                                    'myAspSkills'
                                )}
                            >
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
                                                {renderPopUpStars(
                                                    skills[15].stars
                                                )}
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
                                            {skills[15].description}
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
                                {renderStars(skills[15].stars)}
                            </CardActions>
                        </Card>
                        <Card
                            className={clsx(classes.skillCard, classes.d3_2)}
                            // onMouseEnter={toggleSkillAnimeCenter}
                            // onMouseLeave={toggleSkillAnimeCenter}
                            onClick={() => handleSkillClick('D3 JS')}
                        >
                            <CardContent
                                className={clsx(
                                    classes.cardTitleDesc,
                                    'myAspSkills'
                                )}
                            >
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
                                                // xs={6}
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
                                                // xs={6}
                                                style={{
                                                    // marginTop: '2rem',
                                                    // marginLeft: '-1rem',
                                                    // width: '8rem',
                                                    // height: '3rem',
                                                    flexBasis: 'auto',
                                                }}
                                            >
                                                {renderPopUpStars(
                                                    skills[14].stars
                                                )}
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
                                            {skills[14].description}
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
                                {renderStars(skills[14].stars)}
                            </CardActions>
                        </Card>
                        <Card
                            className={clsx(
                                classes.skillCard,
                                classes.tensorflowJs
                            )}
                            // onMouseEnter={toggleSkillAnimeCenter}
                            // onMouseLeave={toggleSkillAnimeCenter}
                            onClick={() => handleSkillClick('Tensorflow JS')}
                        >
                            <CardContent
                                className={clsx(
                                    classes.cardTitleDesc,
                                    'myAspSkills'
                                )}
                            >
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
                                                {renderPopUpStars(
                                                    skills[16].stars
                                                )}
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
                                            {skills[16].description}
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
                                {renderStars(skills[16].stars)}
                            </CardActions>
                        </Card>
                        <Card
                            className={clsx(
                                classes.skillCard,
                                classes.tensorflowPy
                            )}
                            // onMouseEnter={toggleSkillAnimeLast}
                            // onMouseLeave={toggleSkillAnimeLast}
                            onClick={() => handleSkillClick('Tensorflow.PY')}
                        >
                            <CardContent
                                className={clsx(
                                    classes.cardTitleDesc,
                                    'myAspSkills'
                                )}
                            >
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
                                                    Tensorflow.PY
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
                                                {renderPopUpStars(
                                                    skills[17].stars
                                                )}
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
                                            {skills[17].description}
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
                                {renderStars(skills[17].stars)}
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
                    <Grid
                        item
                        xs={12}
                        className={clsx(
                            classes.project1,
                            'projectSec',
                            'lToRScroll'
                        )}
                        data-scroll="out"
                    >
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
                                    {projects[0].description}
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={classes.basicButton}
                                    onClick={() => {
                                        setcurrentProject(1);
                                        setshowProject(true);
                                    }}
                                >
                                    Learn more
                                </Button>
                            </div>
                        </div>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        className={clsx(
                            classes.project2,
                            'projectSec',
                            'rToLScroll'
                        )}
                        data-scroll="out"
                    >
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
                                    Tech Network
                                </Typography>
                                <Typography
                                    variant="h3"
                                    className={classes.projectDesc}
                                >
                                    {projects[1].description}
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={classes.basicButton}
                                    onClick={() => {
                                        setcurrentProject(2);
                                        setshowProject(true);
                                    }}
                                >
                                    Learn more
                                </Button>
                            </div>
                        </div>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        className={clsx(
                            classes.project1,
                            'projectSec',
                            'lToRScroll'
                        )}
                        data-scroll="out"
                    >
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
                                    Home Rentals
                                </Typography>
                                <Typography
                                    variant="h3"
                                    className={classes.projectDesc}
                                >
                                    {projects[2].description}
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={classes.basicButton}
                                    onClick={() => {
                                        setcurrentProject(3);
                                        setshowProject(true);
                                    }}
                                >
                                    Learn more
                                </Button>
                            </div>
                        </div>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        className={clsx(
                            classes.project2,
                            'projectSec',
                            'rToLScroll'
                        )}
                        data-scroll="out"
                    >
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
                                    Mockdemy
                                </Typography>
                                <Typography
                                    variant="h3"
                                    className={classes.projectDesc}
                                >
                                    {projects[3].description}
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={classes.basicButton}
                                    onClick={() => {
                                        setcurrentProject(4);
                                        setshowProject(true);
                                    }}
                                >
                                    Learn more
                                </Button>
                            </div>
                        </div>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        className={clsx(
                            classes.project1,
                            'projectSec',
                            'lToRScroll'
                        )}
                        data-scroll="out"
                    >
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
                                    Tetris Clone
                                </Typography>
                                <Typography
                                    variant="h3"
                                    className={classes.projectDesc}
                                >
                                    {projects[4].description}
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={classes.basicButton}
                                    onClick={() => {
                                        setcurrentProject(5);
                                        setshowProject(true);
                                    }}
                                >
                                    Learn more
                                </Button>
                            </div>
                        </div>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        className={clsx(
                            classes.project2,
                            'projectSec',
                            'rToLScroll'
                        )}
                        data-scroll="out"
                    >
                        <div
                            style={{
                                position: 'relative',
                                marginBottom: '2rem',
                            }}
                        >
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
                                    Notes Pro
                                </Typography>
                                <Typography
                                    variant="h3"
                                    className={classes.projectDesc}
                                >
                                    {projects[5].description}
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={classes.basicButton}
                                    onClick={() => {
                                        setcurrentProject(6);
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
                <Dialog
                    open={showSkill}
                    className={classes.skillModal}
                    onClick={() => {
                        setshowSkill(false);
                    }}
                >
                    <SkillModal
                        skill={currentSkill}
                        renderPopUpStars={renderPopUpStars}
                    />
                </Dialog>
                <Grid
                    id="experienceSection"
                    container
                    spacing={3}
                    direction="column"
                    className={classes.contentSections}
                    style={{ minHeight: '20rem' }}
                >
                    <Typography variant="h3" className={classes.sectionTitle}>
                        Work Experience
                    </Typography>
                    <Grid
                        direction="row"
                        spacing={5}
                        item
                        container
                        xs={12}
                        className={classes.workExpContainer}
                        alignItems="center"
                    >
                        <Grid item xs={5} sm={4} className={classes.expLogo}>
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
                            xs={7}
                            sm={8}
                            className={classes.expContent}
                            alignItems="flex-start"
                        >
                            <Grid item>
                                <Typography
                                    variant="h5"
                                    className={classes.expNum}
                                >
                                    2{' '}
                                    <Typography
                                        variant="body"
                                        className={classes.expYears}
                                    >
                                        years
                                    </Typography>
                                </Typography>
                            </Grid>
                            <Grid item style={{ textAlign: 'start' }}>
                                <Typography
                                    variant="body"
                                    className={classes.expText}
                                >
                                    Working as Webmethods developer(Java based
                                    integration tool)
                                    <span>
                                        {' '}
                                        interacting with clients and
                                        understanding need for the solution.
                                        Proud to be recognised as one of the
                                        best performers of the team
                                    </span>
                                    .
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </main>

            <footer
                style={{
                    height: '30vh',
                    color: '#fff',
                    overflow: 'hidden',
                    position: 'relative',
                }}
            >
                <Grid
                    container
                    direction="row"
                    spacing={0}
                    className={classes.topSectionContainerSprinkle}
                    style={{
                        top: 'unset',
                        position: 'relative',
                        height: '100%',
                    }}
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
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        textAlign: 'center',
                    }}
                >
                    <Typography
                        variant="h5"
                        className={clsx(
                            classes.aboutMeRole,
                            classes.footerText1
                        )}
                    >
                        Awaiting for opportunities !
                    </Typography>
                    <Typography
                        variant="body1"
                        className={clsx(
                            classes.aboutMeRole,
                            classes.footerText2
                        )}
                        style={{ marginTop: 0 }}
                    >
                        Copyright &#169; 2021 goes to{' '}
                        <span
                            style={{
                                fontWeight: 'bold',
                                color: '#fff',
                            }}
                        >
                            Richie Roberts
                        </span>{' '}
                        UI/UX designer at Freshworks
                    </Typography>
                </div>
            </footer>
        </div>
    );
}
