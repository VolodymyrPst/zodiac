import styles from "./style.module.css";
import ThemeTogle from "./components/ThemeTogle/ThemeTogle";
import Calendar from "./components/Calendar/Calendar";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <ThemeTogle />
      </header>
      <main className={styles.main}>
        <Calendar />
      </main>
    </div>
  );
}
