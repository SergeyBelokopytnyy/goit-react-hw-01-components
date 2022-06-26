import propTypes from 'prop-types';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li class="item">
      <span class="status"></span>
      <img class="avatar" src={avatar} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </li>
  );
}

FriendListItem.propType = {
  isOnline: propTypes.bool.isRequired,
  name: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
};
