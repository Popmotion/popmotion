import React from 'react';
import Helmet from 'react-helmet';
import Logo from '../../components/Logo';
import styles from './Homepage.scss';

export default function () {
  return (
    <div className={styles.container}>
      <Helmet
        title='Popmotion'
        description='The JavaScript motion engine.'
      />
      <Logo from='#fff' to='#fff' />
      <h2 className={styles.subheader}>The JavaScript motion engine</h2>
      <h3></h3>
    </div>
  );
}