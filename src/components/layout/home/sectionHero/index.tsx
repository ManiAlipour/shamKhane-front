import styles from "@/styles/sectionHero.module.css";

const SectionHero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>
          <span className={styles.primaryText}>شمع خانه</span>
          <br />
          هنر روشنایی، زیبایی خانه شما
        </h1>

        <p className={styles.description}>
          به دنیای جادویی شمع خانه خوش آمدید. جایی که هر شمع، داستانی از نور و
          گرما را روایت می‌کند. مجموعه‌ای بی‌نظیر از دکوری‌جات منحصر به فرد و
          شمع‌های دست‌ساز که با عشق و ظرافت طراحی شده‌اند تا خانه شما را به
          مکانی خاص و دلنشین تبدیل کنند.
        </p>

        <form className={styles.searchForm}>
          <input
            type="search"
            name="search"
            placeholder="جستجو کنید ..."
            className={styles.searchInput}
          />
          <button className={styles.searchButton}>جستجو</button>
        </form>
      </div>
    </div>
  );
};

export default SectionHero;
