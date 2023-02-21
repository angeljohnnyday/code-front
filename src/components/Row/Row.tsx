
import { Grid, GridProps } from '@mui/material'

interface Props extends Omit<GridProps, 'container'> { }

export default function Row({ children, ...rest }: Props) {
    return (
        <Grid
            container
            columnSpacing='2.4rem'
            rowGap={{
                xs: '2.4rem',
                lg: '3.2rem'
            }}
            {...rest}
        >
            {children}
        </Grid>
    )
}
