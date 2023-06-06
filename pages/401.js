import React from 'react'

const Error401 = () => {
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
      <Typography variant='h4' pt={6}>401 - Error!</Typography>
      <Link href="/">Go Back Home</Link>
    </Stack>
  )
}

export default Error401