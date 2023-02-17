import PropTypes from "prop-types";
import { List,Icon,StatsList,Item ,Description,UserInfo,ItemQuantity} from "./Profile.styled";
export const Profile = ({ username, tag, location, avatar, stats }) => {
    return <List className="profile">
  <Description className="description">
    <Icon
      src={avatar}
      alt={username}
      className="avatar"
    />
    <UserInfo className="name">Full name: { username }</UserInfo>
    <UserInfo className="tag">Nickname: {tag}</UserInfo>
    <UserInfo className="location">Location: {location}</UserInfo>
  </Description>

  <StatsList className="stats">
    <Item>
      <span className="label">Followers:</span>
      <ItemQuantity className="quantity">{stats.followers}</ItemQuantity>
    </Item>
    <Item>
      <span className="label">Views:</span>
      <ItemQuantity className="quantity">{stats.views}</ItemQuantity>
    </Item>
    <Item>
      <span className="label">Likes:</span>
      <ItemQuantity className="quantity">{stats.likes}</ItemQuantity>
    </Item>
  </StatsList>
</List>   
}


Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};