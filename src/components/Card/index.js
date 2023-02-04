import styles from './Card.module.css';
import iconeFavoritar from './favoritar.png'
import iconeDesfavoritar from './desfavoritar.png'

import { useFavoriteContext } from 'contexts/Favorites'
import { Link } from 'react-router-dom';

function Card({ id, titulo, capa}) {
  const { favorite, addFavorite } = useFavoriteContext();
  const isFavorite = favorite.some((fav) => fav.id === id);
  const icon = !isFavorite ? iconeFavoritar : iconeDesfavoritar;

  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/${id}`}>
        <img src={capa} alt={titulo} className={styles.capa} />
        <h2>{titulo}</h2>
      </Link>
      <img src={icon} 
        alt="Favoritar filme" 
        className={styles.favoritar} 
        onClick={() => {
          addFavorite({ id, titulo, capa })
        }}
      />
    </div>
  )
}

export default Card;