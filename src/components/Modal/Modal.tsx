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
    }
    onOk?: {
        handle: () => void
        title?: ReactNode
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
            fullScreen
            maxWidth={maxWidth}
            open={open}
            onClose={(_, reason) => reason === 'backdropClick' && onClose.handle}
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
                    px: '1.2rem',
                    pb: '1.2rem',
                }}
            >
                <Button
                    color="error"
                    onClick={onClose.handle}
                >
                    {onClose?.title || 'Cancelar'}
                </Button>
                {!!onOk && (
                    <Button
                        onClick={onOk.handle}
                        sx={{
                            ml: '1.2rem',
                        }}
                    >
                        {onOk?.title || 'Ok'}
                    </Button>
                )}
            </DialogActions>
        </Dialog>
    )
}
