import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <ul class="friend-list">
      {friends.map(item => (
        <li class="item" key={item.id}>
          <span class="status">{item.isOnline ? 'Online' : 'Offline'}</span>
          <img class="avatar" src={item.avatar} alt="User avatar" width="48" />
          <p class="name">{item.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
