import { BsFillCircleFill } from 'react-icons/bs';
import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(item => (
        <li className={css.item} key={item.id}>
          <span >
            <BsFillCircleFill className={item.isOnline ? css.statusOnline : css.statusOffline}/>
          </span>
          <img
            className={css.avatar}
            src={item.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{item.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
