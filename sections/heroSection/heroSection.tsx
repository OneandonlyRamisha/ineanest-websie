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
          Gamify Your Habits. <Highlight>Level Up Your Life.</Highlight>{" "}
        </h1>
        <h2 className={styles.subHeader}>
          Join <Highlight>new wave of achievers</Highlight> turning their habits
          into real time game.
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
