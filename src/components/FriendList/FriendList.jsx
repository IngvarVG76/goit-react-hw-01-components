import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      <FriendListItem friends={friends} />
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape()
  ).isRequired,
};
