import { TextField, withStyles } from "@material-ui/core";

export const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#013328',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'yellow',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#E3DCD2',
            },
            '&:hover fieldset': {
                borderColor: '#CC8B65',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#013328',
            },
        },
    },
})(TextField)