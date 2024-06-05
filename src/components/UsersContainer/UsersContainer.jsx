import { USERS } from '../../constants/users-data';
import {
	StyledActive,
	StyledName,
	StyledProfileImg,
	StyledUserCard,
	StyledUserInfo,
	StyledUserName
} from './users-container';

const UsersCards = () => {
	return USERS.map(user => (
		<StyledUserCard key={user.userId}>
			<StyledUserInfo>
				<StyledProfileImg src={user.profileImage} alt={user.name} />
				<div>
					<StyledName>{user.name}</StyledName>
					<StyledUserName>@{user.username}</StyledUserName>
				</div>
			</StyledUserInfo>
			<StyledActive $active={user.active}>
				{user.active ? 'Activo' : 'Inactivo'}
			</StyledActive>
		</StyledUserCard>
	));
};

export default UsersCards;
