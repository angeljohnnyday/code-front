import { ReactNode } from "react"

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    DialogProps,
    SxProps,
} from '@mui/material'

interface Props extends Omit<DialogProps, 'title' | 'onClose'> {
    open: boolean
    children: ReactNode
    title?: ReactNode
    sxTitle?: SxProps
    onClose: {
        handle: () => void
        title?: ReactNode
        sx?: SxProps
    }
    onOk?: {
        handle: () => void
        title?: ReactNode
        sx?: SxProps
    }
}

export default function Modal({
    maxWidth = 'xs',
    open,
    children,
    title,
    sxTitle,
    onClose,
    onOk,
    ...rest
}: Props) {
    return (
        <Dialog
            fullWidth
            maxWidth={maxWidth}
            open={open}
            onClose={({ }, reason) => reason === 'backdropClick' && onClose.handle}
            {...rest}
        >
            {!!title && (
                <DialogTitle
                    sx={sxTitle}
                >
                    {title}
                </DialogTitle>
            )}
            <DialogContent>
                {children}
            </DialogContent>
            <DialogActions
                sx={{
                    px: '2.4rem',
                    pb: '2.4rem',
                }}
            >
                <Button
                    color="error"
                    onClick={onClose.handle}
                    sx={{
                        mr: '2.4rem',
                        ...onClose?.sx
                    }}
                >
                    {onClose?.title || 'Cancel'}
                </Button>
                {!!onOk && (
                    <Button
                        onClick={onOk.handle}
                    >
                        {onOk?.title || 'Ok'}
                    </Button>
                )}
            </DialogActions>
        </Dialog>
    )
}
