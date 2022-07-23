import Image from 'next/image';
import { useCallback, useEffect, useState, useRef } from 'react';
import styles from '../styles/Home.module.scss';

export default function Home() {
    let page = useRef();
    let [y, setY] = useState(0);

    const onScroll = useCallback(e => {
        let y = e.currentTarget.scrollTop;
        setY(y);
    }, []);

    useEffect(() => {
        setY(page.current.scrollTop);
        page.current.addEventListener("scroll", onScroll);

        return () => page.current.removeEventListener("scroll", onScroll);
    }, [onScroll]);

    return (
        <div ref={page} className={styles.page}>
            <nav className={`${styles.nav} ${y === 0 ? styles.hidden : undefined}`}>
                <div>
                    <Image src="/logo1.png" alt="" width={60} height={60} />
                    <h1>Box Spots</h1>
                </div>

                <div>
                    <p style={{ marginRight: 25 }}>Download App</p>
                    <p>Console</p>
                </div>
            </nav>

            <div className={styles.main}>
                <h1>Explore with Pattern</h1>
                <p>For museums, amusement parks, edifices, conferences, markets, special events, and more!</p>
                <div>
                    <button style={{ marginRight: 25 }}>Tourists</button>
                    <button>Businesses</button>
                </div>
            </div>

            <div className={styles.about}>
                <h1>About Box Spots</h1>
                <h3>
                    Age of paper pamphletes has come to an end!
                    Box Spots is an interactive map conveying useful features for businesses and tourists.
                    Just by scanning the QR code placed near each display, users can view specific descriptions and receive recommendations on where to go next.
                    For more information, please contact us below.
                </h3>
            </div>

            <div className={styles.contact}>
                <h1>Contact Us</h1>
                <div>
                    <h3>Email: <a href="mailto:contact@theboxspots.com">contact@theboxspots.com</a></h3>
                </div>
            </div>

            <footer className={styles.footer}>Copyright 2022. Box Spots. All rights reserved.</footer>
        </div>
    );
}