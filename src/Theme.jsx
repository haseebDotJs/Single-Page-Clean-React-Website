import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        text: {
            primary: "rgba(0, 0, 0, 0.87)",
            secondary: 'rgb(102,102,102)',
            hint: 'rgb(127,127,127)',
        },
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 768,
            lg: 1200,
            xl: 1920,
        }
    },
    typography: {
        fontFamily:
            [
                'Open Sans',
                'sans-serif'
            ].join(',')
    }
});
export default theme