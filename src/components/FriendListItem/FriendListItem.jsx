import { BsFillCircleFill } from 'react-icons/bs';
import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ friend }) => {
  const { isOnline, avatar, name } = friend;

  return (
    <li className={css.item}>
      <span>
        <BsFillCircleFill
          className={isOnline ? css.statusOnline : css.statusOffline}
        />
      </span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
