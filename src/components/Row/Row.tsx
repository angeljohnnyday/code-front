
import { Grid, GridProps } from '@mui/material'

interface Props extends Omit<GridProps, 'container'> { }

export default function Row({ children, ...rest }: Props) {
    return (
        <Grid
            container
            columnSpacing='1.2rem'
            rowGap={{
                xs: '1.6rem',
                lg: '2rem'
            }}
            {...rest}
        >
            {children}
        </Grid>
    )
}
