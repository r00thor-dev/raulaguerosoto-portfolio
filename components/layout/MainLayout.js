import React from 'react';
import Head from 'next/head';

const MainLayout = props => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>

      <main>
        { props.children }
      </main>

      <script src="https://unpkg.com/react@latest/umd/react.development.js" crossOrigin="anonymous"></script>
      <script src="https://unpkg.com/react-dom@latest/umd/react-dom.development.js"></script>
      <script src="https://unpkg.com/@material-ui/core@latest/umd/material-ui.development.js" crossOrigin="anonymous"></script>
      <script src="https://unpkg.com/@material-ui/core@latest/umd/material-ui.development.js" crossOrigin="anonymous"></script>
    </>
  );
};


export default MainLayout;
