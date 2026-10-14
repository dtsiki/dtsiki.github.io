import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';

import styles from './search.module.scss';

interface Props {
  word: string;
}

const Search = ({ word }: Props) => {
  return (
    <div className={styles.search}>
      <span>
        <FontAwesomeIcon icon={faSearch} />
        {word}
      </span>
      <FontAwesomeIcon icon={faXmark} />
    </div>
  );
};

export default Search;
