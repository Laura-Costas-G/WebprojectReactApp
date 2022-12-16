const createTheme = require('@mui/material/styles').createTheme;
const colors = require('@mui/material/colors');

// Mui components main theme
//? how to: https://mui.com/material-ui/customization/theming/
//? theme tool: https://bareynol.github.io/mui-theme-creator/
//? palette tool: https://m2.material.io/inline-tools/color/
exports.light = createTheme({
    palette: {
      mode: 'light',
    },
    status: {
      danger: colors.orange[500],
    },
});
exports.dark = createTheme({
    palette: {
      mode: 'dark',
    },
    status: {
      danger: colors.orange[500],
    },
});
