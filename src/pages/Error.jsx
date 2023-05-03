import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { useRouteError, Link, useNavigate } from 'react-router-dom'

const Error = () => {
    const error = useRouteError()
    const navigate = useNavigate()

  return (
    <Stack alignItems='center' spacing={5} width='100vw'>
        <Typography variant='h1'>Error</Typography>
        <Typography>{error.message || error.statusText}</Typography>
        <Stack direction='row' spacing={3}>
            <Link to='/'>
              <Button sx={{color:'warning.main'}} variant='outlined'>Back to Home</Button>
            </Link>
            <Button onClick={() => navigate(-1)}  sx={{color:'warning.main'}} variant='outlined'>Back</Button>
        </Stack>
    </Stack>
  )
}

export default Error