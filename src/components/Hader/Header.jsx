import styles from "../Hader/Header.module.css";
import logo from "../../assets/image/logo.png";
import { Link } from "react-router-dom";
import { Search, User } from "lucide-react";
import { Bell } from "lucide-react";
import { ChevronDown } from "lucide-react";
import React, { useState, useEffect } from "react";
function Header() {
  const [open, setOpen] = useState(false);
  const [down, setDown] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`${styles.header} ${
          showBackground ? styles.blackBackground : ""
        }`}
      >
        {/* the image logo */}
        <div className={styles.container}>
          {/* the navigate */}

          <img className={styles.img} src={logo} alt="" />
          <nav className={styles.navbar}>
            <Link className={styles.link} href="">
              Home
            </Link>
            <Link className={styles.link} href="">
              Tv Shows
            </Link>
            <Link className={styles.link} href="">
              Movies
            </Link>
            <Link className={styles.link} href="">
              New & Popular
            </Link>
            <Link className={styles.link} href="">
              MyList
            </Link>
          </nav>
          <div className={styles.rightSection}>
            {/* search paet */}
            <div className={styles.iconButton}>
              {open && (
                <input
                  type="text"
                  placeholder="movie title"
                  className={styles.inputSearch}
                />
              )}
              <button
                onClick={() => setOpen(!open)}
                className={styles.searchButton}
              >
                <Search size={20} />
              </button>
            </div>
            {/* notification */}
            <button className={styles.notificationButton}>
              <Bell size={20} />
              <span className={styles.notificationBadge}>4</span>
            </button>
            {/* profile */}
            <div className={styles.positionContainer}>
              <button
                onClick={() => setDown(!down)}
                className={styles.profileButton}
              >
                <div className={styles.userIcon}>
                  {/* user icon */}
                  <User size={20} />
                </div>
                {/* drop down */}
                <ChevronDown size={20} className={styles.dropdownIcon} />
              </button>
            </div>{" "}
            {down && (
              <div className={styles.dropdownMenu}>
                <p>Account</p>
                <p>Profile</p>
                <p>Settings</p>
                <hr />
                <p className={styles.logout}>Sign out</p>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
