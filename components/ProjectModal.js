// next js related
import Image from 'next/image';
// react related
import React, { useEffect } from 'react';
// Material UI
import {
    Button,
    Container,
    Grid,
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
    middleGrids: {
        position: 'relative',
        margin: '1rem 0',
        width: '33.3333%',
        height: '100%',
    },
    titleDesc: {},
    projectTitle: {},
    projectDesc: {},
    techStacksContainer: {},
    techStackRow: {},
    buttonsSection: {
        marginTop: '2rem',
    },
}));

function ProjectModal(props) {
    const classes = useStyles();

    const { currentProject, handleModalCLose, handleProjectCHange } = props;

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
                    className={classes.middleGrids}
                ></Grid>
                <Grid
                    item
                    container
                    direction="column"
                    className={classes.middleGrids}
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
                    </Grid>
                    <Grid
                        item
                        container
                        direction="column"
                        className={classes.techStacksContainer}
                    >
                        {projectDetails.techStacks.map((techStack, index) => (
                            <Grid
                                item
                                container
                                direction="row"
                                className={classes.techStackRow}
                            >
                                <Grid item>
                                    <SvgIcon>
                                        <path d="M9.163 4.516c0.418 0.408 4.502 4.695 4.502 4.695 0.223 0.219 0.335 0.504 0.335 0.789s-0.112 0.57-0.335 0.787c0 0-4.084 4.289-4.502 4.695-0.418 0.408-1.17 0.436-1.615 0-0.446-0.434-0.481-1.041 0-1.574l3.747-3.908-3.747-3.908c-0.481-0.533-0.446-1.141 0-1.576s1.197-0.409 1.615 0z" />
                                    </SvgIcon>
                                </Grid>
                                <Grid item>
                                    <Typography variant="body">
                                        {techStack}
                                    </Typography>
                                </Grid>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid
                    item
                    container
                    direction="column"
                    className={classes.middleGrids}
                ></Grid>
            </Grid>
            <Grid
                item
                container
                direction="row"
                spacing={3}
                className={classes.buttonsSection}
            >
                <Grid item>
                    {currentProject > 1 ? (
                        <Button variant="text">Previous Project</Button>
                    ) : null}
                </Grid>
                <Grid>
                    {currentProject < projects.length ? (
                        <Button variant="text">Next Project</Button>
                    ) : null}
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ProjectModal;
