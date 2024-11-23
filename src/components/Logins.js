import React, { Fragment } from 'react'

function Logins({Component, pageProps}) {
  return (
    <Fragment>
        <Component {...pageProps} />
        <Script />
    </Fragment>
  )
}

export default Logins