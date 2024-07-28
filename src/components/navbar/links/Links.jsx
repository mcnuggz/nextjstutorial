"use client";

import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";

const links = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "About",
        path: "/about",
    },
    {
        title: "Contact",
        path: "/contact",
    },
    {
        title: "Blog",
        path: "/blog",
    },
];

const Links = () => {
    const [open, setOpen] = useState(false);

    // Temporary
    const session = true;
    const isAdmin = true;
    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map((link) => (
                    <NavLink item={link} key={link.title}></NavLink>
                ))}
                {session ? (
                    <>
                        {isAdmin && (
                            <NavLink
                                item={{ title: "Admin", path: "/admin" }}
                            />
                        )}
                        <button className={styles.logoutBtn}>Log Out</button>
                    </>
                ) : (
                    <NavLink item={{ title: "Login", path: "/login" }} />
                )}
            </div>
            {/*     
                sets state variable (prev) to its opposite value
                i.e (false set to true) or (true set to false)
            */}
            <button
                onClick={() => setOpen((prev) => !prev)}
                className={styles.menuBtn}>
                Menu
            </button>
            {open && (
                <div className={styles.mobileLinks}>
                    {links.map((link) => (
                        <NavLink item={link} key={link.title} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Links;
