import React from 'react'

const Error500 = () => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        p: 4,
        minHeight: '100vh'
      }}
    >
      <Image src="/logo.svg" width={100} height={100} alt='logo' />
      <Typography variant='h4' pt={6}>500 - Server-side error occurred!</Typography>
      <Typography variant='paragraph' mt={4} pb={6} sx={{ textAlign: 'center' }}>
        The page you are looking for no longer exists or has been moved.
      </Typography>
      <Link href="/">Go Back Home</Link>
    </Stack>
  )
}

export default Error500