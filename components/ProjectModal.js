// next js related
import Image from 'next/image';
// react related
import React, { useEffect, useRef } from 'react';
// Material UI
import {
    Button,
    Container,
    Grid,
    Link,
    makeStyles,
    SvgIcon,
    Typography,
} from '@material-ui/core';
// anime js
import anime from 'animejs';
// utils
import {
    lightTextColor,
    primaryColor,
    secondaryColor,
    projects,
} from '../utils/constatnts';
import clsx from 'clsx';
import 'simplebar';
import 'simplebar/dist/simplebar.css';

const useStyles = makeStyles((theme) => ({
    modal: {
        position: 'fixed',
        top: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '90vw',
        height: '80vh',
        backgroundColor: secondaryColor,
        borderRadius: '1rem',
        zIndex: 3,
        overflow: 'hidden',
        [theme.breakpoints.down('xs')]: {
            top: '9%',
            width: '100vw',
            height: '100vh',
        },
    },
    imgsContainer: {
        position: 'relative',
        padding: '0 !important',
        borderRadius: '1rem',
        overflow: 'hidden',
        margin: '0 auto',
        // transform: 'translateX(-100%)',
        width: '20rem',
        height: '50%',
        [theme.breakpoints.down('md')]: {
            width: '16rem',
            height: '12rem',
        },
        [theme.breakpoints.down('sm')]: {
            width: '13rem',
            height: '10rem',
        },
        [theme.breakpoints.down('xs')]: {
            width: '10rem',
            height: '9rem',
        },
    },
    imgContainer: {
        position: 'absolute',
        padding: '0 !important',
        borderRadius: '1rem',
        overflow: 'hidden',
        margin: '0 auto',
        marginLeft: '2.5rem',
        // transform: 'translateX(-100%)',
        width: '15rem',
        height: '100%',
        [theme.breakpoints.down('md')]: {
            width: '13rem',
            // height: '12rem',
            marginLeft: '2rem',
        },
        [theme.breakpoints.down('sm')]: {
            width: '11rem',
            // height: '10.5rem',
            marginLeft: '1.5rem',
        },
        [theme.breakpoints.down('xs')]: {
            width: '9rem',
            // height: '9rem',
            marginLeft: '1rem',
        },
    },
    middleGrid1: {
        position: 'relative',
        margin: '2rem 0',
        width: '60%',
        height: '95%',
        padding: '1rem !important',
        paddingLeft: '2rem !important',
        borderRight: '1px solid #fff',
        // '&:not(:last-child)': {
        //     borderRight: '1px solid #fff',
        // },
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    middleGrid2: {
        position: 'relative',
        margin: '2rem 0',
        width: '40%',
        height: '95%',
        padding: '1rem !important',
        paddingLeft: '2rem !important',
        // '&:not(:last-child)': {
        //     borderRight: '1px solid #fff',
        // },
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        },
    },
    scrollable: {
        overflowY: 'auto',
    },
    middleGridInnerContainer: {
        height: '100%',
    },
    middleGridTitleArea: {
        width: '100%',
        textAlign: 'center',
        '&:not(:first-of-type)': {
            marginTop: '1rem',
        },
    },
    middleGridTitle: {
        color: '#fff',
        fontSize: '1.25rem',
    },
    middleGridFeatures: {
        color: lightTextColor,
        marginBottom: '1rem',
    },
    middleGridFeatureRow: {
        // color: '#fff',
        fontStyle: 'italic',
        fontSize: '1rem',
        justifyContent: 'center',
    },
    listIcon: {
        position: 'relative',
        height: '1.5rem',
        padding: '0 !important',
    },
    listIconSvg: {
        fill: '#fff',
        width: '1.5rem',
        height: '1.5rem',
    },
    listTextArea: {
        padding: '0 !important',
    },
    listText: {},
    titleDesc: {
        marginTop: '2rem',
        color: '#fff',
        textAlign: 'center',
        height: '40%',
    },
    projectTitle: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
    },
    projectDesc: {
        color: lightTextColor,
        fontSize: '1rem',
        fontStyle: 'italic',
        display: 'block',
    },
    titleDescButtons: {
        marginTop: '1.5rem',
        color: secondaryColor,
    },
    projectButton: {
        backgroundColor: '#fff',
        color: secondaryColor,
        display: 'block',
        fontStyle: 'italic',
        width: '7rem',
        marginBottom: '1rem',
        marginLeft: '50%',
        transform: 'translateX(-50%)',
    },
    techStacksContainer: {},
    techStackRow: {},
    buttonsSection: {
        width: '50%',
        marginLeft: '50%',
        transform: 'translateX(-50%)',
        marginTop: '2rem',
        color: '#fff',
        textAlign: 'center',
        [theme.breakpoints.down('xs')]: {
            position: 'absolute',
            bottom: '15%',
            width: '100%',
            marginTop: 0,
            bottom: '15%',
            justifyContent: 'space-around',
        },
    },
    pageButton: {
        fontSize: '1.25rem',
        fontStyle: 'italic',
        color: lightTextColor,
        cursor: 'pointer',
    },
    crossPageContainer: {
        position: 'absolute',
        top: '5%',
        right: '5%',
        width: '1.5rem',
        height: '100%',
    },
    crossArea: {
        position: 'relative',
        width: '1.5rem',
        height: '1.5rem',
        cursor: 'pointer',
    },
    pageContainer: {
        position: 'absolute',
        top: '50%',
        transform: 'translate(-1rem, -50%)',
        left: '90%',
        width: '1.5rem',
        height: '25%',
    },
    dotArea: {
        position: 'relative',
        width: '0.75rem',
        height: '0.75rem',
        marginBottom: '0.5rem',
    },
    dotWrapper: {
        position: 'relative',
    },
}));

function ProjectModal(props) {
    const classes = useStyles();

    const { currentProject, handleModalCLose, handleProjectChange } = props;

    const projectDetails = projects[currentProject - 1];

    let prevImage = null;
    let nextImage = null;
    if (currentProject - 1 >= 1) {
        prevImage = projects[currentProject - 2].image;
    }
    if (currentProject - 1 < projects.length - 1) {
        nextImage = projects[currentProject].image;
    }

    let imgAnimeRefLeft = useRef(null);
    let imgAnimeRefRight = useRef(null);
    useEffect(() => {
        imgAnimeRefLeft.current = anime({
            targets: ['.prevImage', '.currentImage', '.nextImage'],
            translateX: -300,
            rotate: '-360deg',
            duration: 1000,
            autoplay: false,
        });
        imgAnimeRefRight.current = anime({
            targets: ['.prevImage', '.currentImage', '.nextImage'],
            translateX: 300,
            rotate: '360deg',
            duration: 1000,
            autoplay: false,
        });
        return () => {
            // cleanup;
        };
    }, []);

    const renderPrevImage = () => {
        if (prevImage !== null) {
            console.log(prevImage);
            return (
                <Image
                    src={prevImage}
                    alt="project-landing-page"
                    layout="fill"
                    objectFit="fill"
                />
            );
        }
    };

    const renderNextImage = () => {
        if (nextImage !== null) {
            console.log(nextImage);
            return (
                <Image
                    src={nextImage}
                    alt="project-landing-page"
                    layout="fill"
                    objectFit="fill"
                />
            );
        }
    };

    const hideProjectButtons = () => {
        document.querySelector('.prevNextButtons').style.display = 'none';
    };

    const showProjectButtons = () => {
        document.querySelector('.prevNextButtons').style.display = 'flex';
    };

    const handlePrevImage = async () => {
        hideProjectButtons();
        imgAnimeRefRight.current.play();
        imgAnimeRefRight.current.finished.then(function () {
            handleProjectChange(currentProject - 1);
            imgAnimeRefRight.current.restart();
            imgAnimeRefRight.current.pause();
            showProjectButtons();
        });
    };

    const handleNextImage = async () => {
        hideProjectButtons();
        imgAnimeRefLeft.current.play();
        imgAnimeRefLeft.current.finished.then(function () {
            handleProjectChange(currentProject + 1);
            imgAnimeRefLeft.current.restart();
            imgAnimeRefLeft.current.pause();
            showProjectButtons();
        });
    };

    return (
        <Grid
            container
            direction="column"
            apacing={2}
            className={clsx(classes.modal, 'projectModal')}
            onClick={(event) => {
                event.stopPropagation();
            }}
        >
            <Grid
                item
                container
                direction="row"
                spacing={5}
                style={{ height: '90%' }}
            >
                <Grid
                    item
                    container
                    direction="column"
                    spacing={2}
                    className={clsx(classes.middleGrid1, classes.scrollable)}
                    // data-simplebar
                >
                    <Grid
                        item
                        xs
                        container
                        direction="column"
                        justify="space-between"
                        alignItems="center"
                        wrap="nowrap"
                        className={clsx(
                            classes.middleGridInnerContainer,
                            classes.scrollable,
                            'modal-scrollbar'
                        )}
                        data-simplebar
                    >
                        <Grid
                            item
                            container
                            direction="column"
                            alignItems="center"
                            spacing={2}
                        >
                            <Grid item className={classes.middleGridTitleArea}>
                                <Typography
                                    variant="h6"
                                    className={classes.middleGridTitle}
                                >
                                    Project Features
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                container
                                direction="column"
                                spacing={2}
                                justify="flex-start"
                                alignItems="center"
                                className={classes.middleGridFeatures}
                            >
                                {projectDetails.projectFeatures.map(
                                    (feature, index) => (
                                        <Grid
                                            key={index}
                                            item
                                            container
                                            spacing={1}
                                            direction="row"
                                            justify="flex-start"
                                            alignItems="flex-start"
                                            className={
                                                classes.middleGridFeatureRow
                                            }
                                        >
                                            <Grid
                                                item
                                                xs={1}
                                                className={classes.listIcon}
                                            >
                                                <svg
                                                    className={
                                                        classes.listIconSvg
                                                    }
                                                >
                                                    <use xlinkHref="/img/projects/sprite.svg#icon-chevron-right"></use>
                                                </svg>
                                            </Grid>
                                            <Grid
                                                item
                                                xs={10}
                                                className={classes.listTextArea}
                                            >
                                                <Typography
                                                    variant="body"
                                                    className={classes.listText}
                                                >
                                                    {feature}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    )
                                )}
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            container
                            direction="column"
                            alignItems="center"
                            spacing={2}
                        >
                            <Grid item className={classes.middleGridTitleArea}>
                                <Typography
                                    variant="h6"
                                    className={classes.middleGridTitle}
                                >
                                    What I Learned
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                container
                                direction="column"
                                spacing={2}
                                justify="flex-start"
                                alignItems="center"
                                className={classes.middleGridFeatures}
                            >
                                {projectDetails.learnings.map(
                                    (learning, index) => (
                                        <Grid
                                            key={index}
                                            item
                                            container
                                            spacing={1}
                                            direction="row"
                                            justify="flex-start"
                                            alignItems="flex-start"
                                            className={
                                                classes.middleGridFeatureRow
                                            }
                                        >
                                            <Grid
                                                item
                                                xs={1}
                                                className={classes.listIcon}
                                            >
                                                <svg
                                                    className={
                                                        classes.listIconSvg
                                                    }
                                                >
                                                    <use xlinkHref="/img/projects/sprite.svg#icon-chevron-right"></use>
                                                </svg>
                                            </Grid>
                                            <Grid
                                                item
                                                xs={10}
                                                className={classes.listTextArea}
                                            >
                                                <Typography
                                                    variant="body"
                                                    className={classes.listText}
                                                >
                                                    {learning}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    )
                                )}
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            container
                            direction="column"
                            alignItems="center"
                            spacing={2}
                        >
                            <Grid item className={classes.middleGridTitleArea}>
                                <Typography
                                    variant="h6"
                                    className={classes.middleGridTitle}
                                >
                                    Tech Stack Used
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                container
                                direction="column"
                                spacing={2}
                                justify="flex-start"
                                alignItems="center"
                                className={classes.middleGridFeatures}
                            >
                                {projectDetails.techStacks.map(
                                    (tech, index) => (
                                        <Grid
                                            key={index}
                                            item
                                            container
                                            spacing={1}
                                            direction="row"
                                            justify="flex-start"
                                            alignItems="flex-start"
                                            className={
                                                classes.middleGridFeatureRow
                                            }
                                        >
                                            <Grid
                                                item
                                                xs={1}
                                                className={classes.listIcon}
                                            >
                                                <svg
                                                    className={
                                                        classes.listIconSvg
                                                    }
                                                >
                                                    <use xlinkHref="/img/projects/sprite.svg#icon-chevron-right"></use>
                                                </svg>
                                            </Grid>
                                            <Grid
                                                item
                                                xs={10}
                                                className={classes.listTextArea}
                                            >
                                                <Typography
                                                    variant="body"
                                                    className={classes.listText}
                                                >
                                                    {tech}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    )
                                )}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    item
                    container
                    direction="column"
                    justify="flex-start"
                    className={classes.middleGrid2}
                >
                    <Grid item container xs className={classes.imgsContainer}>
                        <Grid
                            item
                            className={clsx(classes.imgContainer, 'prevImage')}
                        >
                            {renderPrevImage()}
                        </Grid>
                        <Grid
                            item
                            className={clsx(
                                classes.imgContainer,
                                'currentImage'
                            )}
                        >
                            <Image
                                src={projectDetails.image}
                                alt="project-landing-page"
                                layout="fill"
                                objectFit="fill"
                            />
                        </Grid>
                        <Grid
                            item
                            className={clsx(classes.imgContainer, 'nextImage')}
                        >
                            {renderNextImage()}
                        </Grid>
                    </Grid>
                    <Grid item xs className={classes.titleDesc}>
                        <Typography
                            variant="h3"
                            className={classes.projectTitle}
                        >
                            {projectDetails.title}
                        </Typography>
                        <Typography
                            variant="body"
                            className={classes.projectDesc}
                        >
                            {projectDetails.description}
                        </Typography>
                        <Container className={classes.titleDescButtons}>
                            <Link href={projectDetails.link}>
                                <Button
                                    variant="contained"
                                    className={classes.projectButton}
                                >
                                    Visit App
                                </Button>
                            </Link>
                            <Link href={projectDetails.githubLink}>
                                <Button
                                    variant="contained"
                                    className={classes.projectButton}
                                >
                                    View code
                                </Button>
                            </Link>
                            {projectDetails.githubLink2 ? (
                                <Link href={projectDetails.githubLink2}>
                                    <Button
                                        variant="contained"
                                        className={classes.projectButton}
                                    >
                                        View code (Backend)
                                    </Button>
                                </Link>
                            ) : (
                                ''
                            )}
                        </Container>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                item
                container
                direction="row"
                justify="center"
                spacing={3}
                className={clsx(classes.buttonsSection, 'prevNextButtons')}
            >
                <Grid item>
                    {currentProject > 1 ? (
                        <Typography
                            className={classes.pageButton}
                            variant="body"
                            onClick={handlePrevImage}
                        >
                            Previous Project
                        </Typography>
                    ) : null}
                </Grid>
                <Grid item>
                    {currentProject < projects.length ? (
                        <Typography
                            className={classes.pageButton}
                            variant="body"
                            onClick={handleNextImage}
                        >
                            Next Project
                        </Typography>
                    ) : null}
                </Grid>
            </Grid>
            <Container className={classes.crossPageContainer}>
                <div className={classes.crossArea} onClick={handleModalCLose}>
                    <Image
                        src="/img/modal/modalCross/Line 1 (Stroke)-1.png"
                        alt="cross-symbol"
                        layout="fill"
                    />
                    <Image
                        src="/img/modal/modalCross/Line 1 (Stroke).png"
                        alt="cross-symbol"
                        layout="fill"
                    />
                </div>
                <div className={classes.pageContainer}>
                    {projects.map((project, index) => {
                        if (currentProject - 1 === index) {
                            return (
                                <div className={classes.dotArea}>
                                    <Image
                                        src="/img/modal/modalPageDots/Ellipse 35.png"
                                        alt="pagination-dot"
                                        layout="fill"
                                    />
                                </div>
                            );
                        } else {
                            return (
                                <div className={classes.dotArea}>
                                    <Image
                                        src="/img/modal/modalPageDots/Ellipse 34.png"
                                        alt="pagination-dot"
                                        layout="fill"
                                    />
                                </div>
                            );
                        }
                    })}
                </div>
            </Container>
        </Grid>
    );
}

export default ProjectModal;
