import React from 'react';
import styles from './Userslist.css';

const UsersList = props => (    //komponent prezentacyjny => to co trzeba wyrenderowac
    <div className={styles.Users}>
        <div className={styles.UsersOnline}>
            {props.users.length} people online
        </div>
        <ul className={styles.UsersList}>
            {
                props.users.map((user) => {
                    return (
                        <li key={user.id} className={styles.UserItem}>
                            {user.name}
                        </li>
                    );
                })
            }
        </ul>
    </div>
);

export default UsersList;