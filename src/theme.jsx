export const darkTheme = createTheme = (mode) => ({
  palette: {
    mode,
    ...(mode === "dark"
        ? {

        }
        : {

        }
    ) ,
    
  },
});
