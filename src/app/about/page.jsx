import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
    return (
        <div>
            <div className={styles.imgContainer}>
                <Image
                    src="https://images.pexels.com/photos/26861781/pexels-photo-26861781/free-photo-of-a-person-paragliding-in-the-sky-with-an-orange-parachute.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    fill
                />
            </div>
        </div>
    );
};

export default AboutPage;
