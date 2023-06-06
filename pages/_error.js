import React from 'react'

const Error = ({ statusCode }) => {
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
      <Typography variant='h4' pt={6}>{statusCode} - Error!</Typography>
      <Typography variant='paragraph' mt={4} pb={6} sx={{ textAlign: 'center' }}>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : 'An error occurred on client'
        }
      </Typography>
      <Link href="/">Go Back Home</Link>
    </Stack>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;