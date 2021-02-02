// next js related
import Image from 'next/image';
// react related
import React, { useEffect } from 'react';
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
// utils
import {
    lightTextColor,
    primaryColor,
    secondaryColor,
    projects,
} from '../utils/constatnts';
import clsx from 'clsx';

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
    },
    imgContainer: {
        position: 'relative',
        padding: '0 !important',
        borderRadius: '1rem',
        overflow: 'hidden',
        margin: '0 auto',
        width: '15rem',
        height: '15rem',
        [theme.breakpoints.down('md')]: {
            width: '12rem',
            height: '12rem',
        },
        [theme.breakpoints.down('sm')]: {
            width: '10rem',
            height: '10rem',
        },
        [theme.breakpoints.down('xs')]: {
            width: '9rem',
            height: '9rem',
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
    },
    scrollable: {
        overflowY: 'auto',
    },
    middleGridTitleArea: {
        width: '100%',
        textAlign: 'center',
    },
    middleGridTitle: {
        color: '#fff',
        fontSize: '1.25rem',
    },
    middleGridFeatures: {
        color: lightTextColor,
    },
    middleGridFeatureRow: {
        // color: '#fff',
        fontStyle: 'italic',
        fontSize: '1rem',
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
        left: '90%',
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

    useEffect(() => {
        return () => {
            // cleanup;
        };
    }, []);

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
                >
                    <Grid
                        item
                        container
                        direction="column"
                        justify="space-between"
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
                                <Grid
                                    item
                                    container
                                    spacing={1}
                                    direction="row"
                                    justify="flex-start"
                                    alignItems="flex-start"
                                    className={classes.middleGridFeatureRow}
                                >
                                    <Grid
                                        item
                                        xs={1}
                                        className={classes.listIcon}
                                    >
                                        <svg className={classes.listIconSvg}>
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
                                            shkfjajs;f askdjhfapwusfe laskdf
                                            oaisds dhfo;asf alsdh failw fia
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid
                                    item
                                    container
                                    spacing={1}
                                    direction="row"
                                    justify="flex-start"
                                    alignItems="flex-start"
                                    className={classes.middleGridFeatureRow}
                                >
                                    <Grid
                                        item
                                        xs={1}
                                        className={classes.listIcon}
                                    >
                                        <svg className={classes.listIconSvg}>
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
                                            shkfjajs;f askdjhfapwusfe laskdf
                                            oaisds dhfo;asf alsdh failw fia
                                        </Typography>
                                    </Grid>
                                </Grid>
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
                                <Grid
                                    item
                                    container
                                    spacing={1}
                                    direction="row"
                                    justify="flex-start"
                                    alignItems="flex-start"
                                    className={classes.middleGridFeatureRow}
                                >
                                    <Grid
                                        item
                                        xs={1}
                                        className={classes.listIcon}
                                    >
                                        <svg className={classes.listIconSvg}>
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
                                            shkfjajs;f askdjhfapwusfe laskdf
                                            oaisds dhfo;asf alsdh failw fia
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid
                                    item
                                    container
                                    spacing={1}
                                    direction="row"
                                    justify="flex-start"
                                    alignItems="flex-start"
                                    className={classes.middleGridFeatureRow}
                                >
                                    <Grid
                                        item
                                        xs={1}
                                        className={classes.listIcon}
                                    >
                                        <svg className={classes.listIconSvg}>
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
                                            shkfjajs;f askdjhfapwusfe laskdf
                                            oaisds dhfo;asf alsdh failw fia
                                        </Typography>
                                    </Grid>
                                </Grid>
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
                                <Grid
                                    item
                                    container
                                    spacing={1}
                                    direction="row"
                                    justify="flex-start"
                                    alignItems="flex-start"
                                    className={classes.middleGridFeatureRow}
                                >
                                    <Grid
                                        item
                                        xs={1}
                                        className={classes.listIcon}
                                    >
                                        <svg className={classes.listIconSvg}>
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
                                            shkfjajs;f askdjhfapwusfe laskdf
                                            oaisds dhfo;asf alsdh failw fia
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid
                                    item
                                    container
                                    spacing={1}
                                    direction="row"
                                    justify="flex-start"
                                    alignItems="flex-start"
                                    className={classes.middleGridFeatureRow}
                                >
                                    <Grid
                                        item
                                        xs={1}
                                        className={classes.listIcon}
                                    >
                                        <svg className={classes.listIconSvg}>
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
                                            shkfjajs;f askdjhfapwusfe laskdf
                                            oaisds dhfo;asf alsdh failw fia
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid
                    item
                    container
                    direction="column"
                    className={classes.middleGrid2}
                >
                    <Grid item className={classes.imgContainer}>
                        <Image
                            src={projectDetails.image}
                            alt="project-landing-page"
                            layout="fill"
                            objectFit="fill"
                        />
                    </Grid>
                    <Grid item className={classes.titleDesc}>
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
                            <Link href="">
                                <Button
                                    variant="contained"
                                    className={classes.projectButton}
                                >
                                    Visit App
                                </Button>
                            </Link>
                            <Link href="">
                                <Button
                                    variant="contained"
                                    className={classes.projectButton}
                                >
                                    View code
                                </Button>
                            </Link>
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
                className={classes.buttonsSection}
            >
                <Grid item>
                    {currentProject > 1 ? (
                        <Typography
                            className={classes.pageButton}
                            variant="body"
                            onClick={() => {
                                handleProjectChange(currentProject - 1);
                            }}
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
                            onClick={() => {
                                handleProjectChange(currentProject + 1);
                            }}
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
