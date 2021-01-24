import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#353A41',
        },
        secondary: {
            main: '#A43735',
        },
    },
    typography: {
        fontSize: 10,
        fontFamily: 'Cardo, sans-serif',
    },
    overrides: {
        MuiButtonBase: {
            root: {
                '&:disabled': {
                    cursor: 'not-allowed',
                    pointerEvents: 'auto',
                },
            },
        },
    },
});

export default theme;
