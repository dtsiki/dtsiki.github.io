import React, { ReactElement, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import styles from './login-user.module.scss';

interface Props {
  handleLogin:  () => void;
}

const LoginUser = ({ handleLogin }: Props): ReactElement => {
  const [password, setPassword] = useState<string>('');
  const [showError, setShowError] = useState<boolean>(false);

  const correctPassword = 'yay';

  const changePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  }

  const login = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    if (e.key === 'Enter') {
      console.log(password, correctPassword, password === correctPassword)

      setShowError(password !== correctPassword);

      if (password == correctPassword) {
        handleLogin();
      }
    }
  }

  return (
    <div className={styles.loginUser}>
      <div className={styles.loginUser__wrapper}>
        <div className={styles.loginUser__icon}>
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div className={styles.loginUser__username}>
          dtsiki
        </div>
        <div className={styles.loginUser__form}>
          <input
            className={styles.loginUser__input}
            type='password'
            id='password'
            name='password'
            placeholder='Password'
            onChange={changePassword}
            onKeyDown={login}
            value={password}
          />
        </div>
      </div>
      {showError && (
        <div className={styles.loginUser__footer}>
          Sorry, the password you entered is incorrect<br />
          Please, try <strong>yay</strong>
        </div>
      )}
    </div>
  );
};

export default LoginUser;
