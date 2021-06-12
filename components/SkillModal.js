// Next JS related
import Image from 'next/image';
// React related
import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// constants
import { primaryColor, skills } from '../utils/constatnts';

const useStyles = makeStyles((theme) => ({
    cardLogo: { position: 'relative', width: '90%', height: '90%' },
    popUpContainer: {
        width: '100%',
        height: '100%',
        padding: '1rem 0.5rem',
        backgroundColor: primaryColor,
    },
    popUpLogo: {
        // height: '100%',
    },
    cardLogo: { position: 'relative', width: '90%', height: '90%' },
    popUpTitleSection: {
        height: '40%',
        width: '90%',
        padding: 0,
        flexWrap: 'nowrap',
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
        marginTop: '0.5rem',
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
}));

function SkillModal(props) {
    const classes = useStyles();
    const { skill, renderStars, renderPopUpStars } = props;

    const getSkillDesc = () => {
        const found = skills.find((mySkill, index) => mySkill.skill === skill);
        return found.description;
    };

    const getSkillStars = () => {
        const found = skills.find((mySkill, index) => mySkill.skill === skill);
        return found.stars;
    };

    const renderSvg = () => {
        if (skill === 'HTML 5') {
            return (
                <svg
                    className={classes.cardLogo}
                    xmlns="http://www.w3.org/2000/svg"
                    width="1771"
                    height="2500"
                    viewBox="221.807 89.47 440 621.061"
                    enable-background="new 221.807 89.47 440 621.061"
                >
                    <filter id="a" width="150%" height="150%" x="-5%" y="-5%">
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
            );
        } else if (skill === 'CSS 3') {
            return (
                <svg
                    className={classes.cardLogo}
                    xmlns="http://www.w3.org/2000/svg"
                    width="2500"
                    height="2500"
                    viewBox="0 0 538.584 538.583"
                >
                    <path d="M0 0h538.584v538.583H0V0z" fill="none" />
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
            );
        } else if (skill === 'Javascript') {
            return (
                <div className={classes.cardLogo}>
                    <Image
                        src="/img/starSvgs/javascript-1.svg"
                        alt="js-logo"
                        layout="fill"
                        priority
                    />
                </div>
            );
        } else if (skill === 'React JS') {
            return (
                <div className={classes.cardLogo}>
                    <Image
                        src="/img/starSvgs/react-2.svg"
                        alt="js-logo"
                        layout="fill"
                        priority
                    />
                </div>
            );
        } else if (skill === 'Redux') {
            return (
                <div className={classes.cardLogo}>
                    <Image
                        src="/img/starSvgs/redux.svg"
                        alt="js-logo"
                        layout="fill"
                        priority
                    />
                </div>
            );
        } else if (skill === 'NodeJs') {
            return (
                <div className={classes.cardLogo}>
                    <Image
                        src="/img/starSvgs/node-js-logo.svg"
                        alt="js-logo"
                        layout="fill"
                        priority
                    />
                </div>
            );
        } else if (skill === 'Sass / Scss') {
            return (
                <div className={classes.cardLogo}>
                    <Image
                        src="/img/starSvgs/node-sass.svg"
                        alt="js-logo"
                        layout="fill"
                        priority
                    />
                </div>
            );
        } else if (skill === 'Python 3') {
            return (
                <div className={classes.cardLogo}>
                    <Image
                        src="/img/starSvgs/python-5.svg"
                        alt="js-logo"
                        layout="fill"
                        priority
                    />
                </div>
            );
        } else if (skill === 'Java') {
            return (
                <div className={classes.cardLogo}>
                    <Image
                        src="/img/starSvgs/java.svg"
                        alt="js-logo"
                        layout="fill"
                        priority
                    />
                </div>
            );
        } else if (skill === 'C++') {
            return (
                <div className={classes.cardLogo}>
                    <Image
                        src="/img/starSvgs/c.svg"
                        alt="js-logo"
                        layout="fill"
                        priority
                    />
                </div>
            );
        } else if (skill === 'Mongo DB') {
            return (
                <div className={classes.cardLogo}>
                    <Image
                        src="/img/starSvgs/mongodb.svg"
                        alt="js-logo"
                        layout="fill"
                        priority
                    />
                </div>
            );
        } else if (skill === 'Next JS') {
            return (
                <div className={classes.cardLogo}>
                    <Image
                        src="/img/starSvgs/nextjs-3.svg"
                        alt="js-logo"
                        layout="fill"
                        priority
                    />
                </div>
            );
        } else if (skill === 'Git') {
            return (
                <div className={classes.cardLogo}>
                    <Image
                        src="/img/starSvgs/git.svg"
                        alt="js-logo"
                        layout="fill"
                        priority
                    />
                </div>
            );
        } else if (skill === 'Anime JS') {
            return (
                <div className={classes.cardLogo}>
                    <Image
                        src="/img/starSvgs/animejs.svg"
                        alt="js-logo"
                        layout="fill"
                        priority
                    />
                </div>
            );
        } else if (skill === 'D3 JS') {
            return (
                <div className={classes.cardLogo}>
                    <Image
                        src="/img/starSvgs/d3-2.svg"
                        alt="js-logo"
                        layout="fill"
                        priority
                    />
                </div>
            );
        } else if (skill === 'React Native') {
            return (
                <div className={classes.cardLogo}>
                    <Image
                        src="/img/starSvgs/react-2.svg"
                        alt="js-logo"
                        layout="fill"
                        priority
                    />
                </div>
            );
        } else if (skill === 'Tensorflow JS') {
            return (
                <div className={classes.cardLogo}>
                    <Image
                        src="/img/starSvgs/tensorflow-2.svg"
                        alt="js-logo"
                        layout="fill"
                        priority
                    />
                </div>
            );
        } else if (skill === 'Tensorflow.PY') {
            return (
                <div className={classes.cardLogo}>
                    <Image
                        src="/img/starSvgs/tensorflow-2.svg"
                        alt="js-logo"
                        layout="fill"
                        priority
                    />
                </div>
            );
        }
    };

    return (
        <Grid
            container
            spacing={0}
            className={classes.popUpContainer}
            direction="column"
            justify="flex-start"
            onClick={(event) => {
                event.stopPropagation();
            }}
        >
            <Grid
                item
                container
                direction="row"
                justify="flex-start"
                className={classes.popUpTitleSection}
            >
                <Grid item className={classes.popUpLogo} xs={2}>
                    {renderSvg()}
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
                    <Grid item container xs={12} style={{ flexBasis: 'auto' }}>
                        <Typography variant="h6" className={classes.popUpTitle}>
                            {skill}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        container
                        xs={12}
                        style={{
                            // marginTop: '2rem',
                            // marginLeft: '-1rem',
                            // width: '8rem',
                            // height: '3rem',
                            flexBasis: 'auto',
                        }}
                    >
                        {renderPopUpStars(getSkillStars())}
                    </Grid>
                </Grid>
            </Grid>
            <Grid item className={classes.popUpDescription}>
                <Typography variant="body" className={classes.popUpDescText}>
                    {getSkillDesc()}
                </Typography>
            </Grid>
        </Grid>
    );
}

export default SkillModal;
