import { Grid, GridProps } from '@mui/material'

interface Props extends Omit<GridProps, 'item' | 'container'> { }

export default function Col({ children, ...rest }: Props) {
    return (
        <Grid
            item
            {...rest}
        >
            {children}
        </Grid>
    )
}
