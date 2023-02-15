import { FriendListItem } from 'components/FriendListItem';
export const FriendList = ({ friends }) => {
    console.log(friends[0].avatar);
    <ul class="friend-list">
        <FriendListItem avatar={friends[0].avatar}/>
    </ul>
};