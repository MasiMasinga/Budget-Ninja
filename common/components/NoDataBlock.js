import React from 'react'

// Mui
import Stack from '@mui/material/Stack'

// Components
import Typography from '@/common/components/Typography'

const NoDataBlock = ({ message, sx, children }) => {
    return (
        <Stack
            alignItems="center"
            justifyContent="center"
            sx={{
                width: '100%',
                height: '300px',
                ...sx
            }}
        >
            {
                !children &&
                <Typography variant="paragraph">{message}</Typography>
            }
            {children}
        </Stack>
    )
}

export default NoDataBlock