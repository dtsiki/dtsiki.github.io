import { DetailedHTMLProps, ReactElement } from 'react';

import Avatar from '../Avatar';

import avatar from '/public/assets/avatar.jpeg';

const MyAvatar = ({ ...restProps }: DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>): ReactElement => {
  return (
    <Avatar
      label='Yay, that&#39;s me!'
      image={avatar}
      className={restProps.className} />
  );
};

export default MyAvatar;
