import styles from "./heroSection.module.css";
import { PiShootingStarThin } from "react-icons/pi";
import Highlight from "@/components/highlight/highlight";
import Image from "next/image";
import InputForm from "@/components/inputForm/inputForm";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <span className={styles.callOut}>
          <PiShootingStarThin className={styles.icon} />
          <p>Coming Soon</p>
        </span>

        <h1 className={styles.header}>
          Capture Every Idea. <Highlight>Build the Best Ones.</Highlight>{" "}
        </h1>
        <h2 className={styles.subHeader}>
          Join <Highlight>many thinkers</Highlight> turning raw thoughts into
          real startups.
        </h2>
        <InputForm />
        <Image
          src={"/app.png"}
          layout="responsive"
          height={16}
          width={9}
          alt="app picture"
          className={styles.img}
        />
      </div>
    </section>
  );
}
