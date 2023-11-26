import { useRouter } from "next/router";
import styles from "./styles.module.scss";

export function InputSearch() {
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    router.push(`/search/?query=${search}`);
  }

  return (
    <form 
      className={styles.searchContainer}
      onSubmit={handleSearch}
    >
      <span className={styles.searchIcon}>🔍</span>
      <input 
        type="text" 
        className={styles.searchInput} 
        placeholder="Search" 
        name="search"
      />
    </form>
  )
}