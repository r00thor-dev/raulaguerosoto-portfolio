import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MainLayout from '../components/layout/MainLayout';
import { Button } from '@material-ui/core';

export default function Home() {
  return (
    <>
      <Head>
        <title>Hello World 2</title>
      </Head>
      <MainLayout>
        <p>Hola Mundo</p>
        <Button color="primary">New button</Button>
        <button className="btn btn-primary">new Button from bootstrap</button>
      </MainLayout>
    </>
  );
}
