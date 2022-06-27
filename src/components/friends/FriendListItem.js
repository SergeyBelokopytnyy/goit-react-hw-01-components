import propTypes from 'prop-types';
import css from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={css.item}>
      <span className={isOnline ? css.online : css.offline}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </li>
  );
}

FriendListItem.propType = {
  isOnline: propTypes.bool.isRequired,
  name: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
};
