import styles from "./styles.module.scss";
import { ModalSessions } from "../ModalSessions";

export function Seasons({ season }) {

  return (
    <ModalSessions 
      title={`Temporada ${season.season_number}`} 
      content={
        <ul className={styles.episodes}>
          {season.episodes.map((episode) => (
            <li className={styles.episode} key={episode.id}>
              <a className={styles.season__name} href={episode.urlMovie} 
                target="_blank" rel="noopener noreferrer"
              >Episódio {episode.episode}</a>
            </li>
          ))}
        </ul>
      }
    />
  )
}