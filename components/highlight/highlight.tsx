import styles from "./highlight.module.css";

export default function Highlight({ children }: { children: string }) {
  return <span className={styles.highlight}>{children}</span>;
}
