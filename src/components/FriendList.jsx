import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(item => (
        <li className="item" key={item.id}>
          <span className="status">{item.isOnline ? 'Online' : 'Offline'}</span>
          <img className="avatar" src={item.avatar} alt="User avatar" width="48" />
          <p className="name">{item.name}</p>
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
