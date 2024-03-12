export default function Dark() {

    // applying the primary and secondary theme colors
    const darkTheme = createTheme({
        palette: {
            mode: toggleDarkMode ? 'dark' : 'light', // handle the dark mode state on toggle
            primary: {
                main: '#90caf9',
            },
            secondary: {
                main: '#131052',
    
            },
        },
    })
}