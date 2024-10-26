// import FriendListItem from "../FriendList/FriendList";
// import styles from "../FriendList/FriendList.module.css";

// const FriendList = ({ friends }) => (
//   <ul className={styles.friendList}>
//     {friends.map(friend => (
//       <li key={friend.id} className={styles.friendListItem}>
//         <FriendListItem
//           avatar={friend.avatar}
//           name={friend.name}
//           isOnline={friend.isOnline}
//         />
//       </li>
//     ))}
//   </ul>
// );

// export default FriendList;

// import React from "react";
import FriendListItem from "../FriendListItem/FriendListItem";
import styles from "../FriendList/FriendList.module.css";

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.map(friend => (
      <li key={friend.id}>
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      </li>
    ))}
  </ul>
);
export default FriendList;