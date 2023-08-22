import React from 'react';
import styles from './Home.module.css';

const Home = () => (
  <div className={styles.container}>
    <h2>Welcome to my Home Page</h2>
    <p className={styles['t-orange']}>
      &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
      qui officia deserunt mollit anim id est laborum.&quot;
    </p>
    <p className={styles.orange}>
      &quot;Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
      consectetur, adipisci velit, sed quia non numquam eius modi
      tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.&quot;
    </p>
  </div>
);

export default Home;