import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import logo from "../../public/images/logo.png";
import Image from "next/image";
const TopNav = () => {
  return (
    <div className={styles.container}>
     
        <div className={styles.logo}>
          <Image
            height={50}
            width={200}
            className="px-5"
            alt="logos"
            src={logo}
          />
        </div>
        <div className={styles.nav}>
          <Link className={styles.navItems} href="/">Home</Link>
          <Link  className={styles.navItems} href="/">About</Link>
          <Link  className={styles.navItems} href="/">Tours</Link>
          <Link  className={styles.navItems} href="/">Team</Link>
          <Link  className={styles.navItems} href="/">Contact</Link>
        </div>
     
    </div>
  );
};

export default TopNav;
