import Head from 'next/head';
// Material UI related
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
// Custon styles
import styles from '../styles/Home.module.css';

const useStyles = makeStyles((theme) => ({
    appBar: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    appBarText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: '1.2rem',
        marginRight: '2.5rem',
        cursor: 'pointer',
    },
}));

export default function Home() {
    const classes = useStyles();

    return (
        <div>
            <Head>
                <title>Rakhy's Portfolio</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* <header> */}
            <AppBar position="static">
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

            <main></main>

            <footer></footer>
        </div>
    );
}
