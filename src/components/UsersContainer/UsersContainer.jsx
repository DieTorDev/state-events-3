import { USERS } from '../../constants/users-data';
import {
	StyledActive,
	StyledName,
	StyledProfileImg,
	StyledUserCard,
	StyledUserInfo,
	StyledUserName
} from './users-container';

const UsersCards = ({ showActive, search, order }) => {
	const checkedArray = checkArray(showActive);
	const sortedArray = sortArray(order, checkedArray);
	const finalArray = searchArray(search, sortedArray);

	return finalArray.map(user => (
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

const checkArray = showActive => {
	return showActive
		? USERS.filter(({ active }) => active === showActive)
		: USERS;
};

const sortArray = (order, checkedArray) => {
	return order === 'alphabetically'
		? checkedArray.sort((a, b) => (a.name > b.name ? 1 : -1))
		: checkedArray;
};

const searchArray = (search, sortedArray) => {
	return sortedArray.filter(({ name }) =>
		name.toLowerCase().includes(search.toLowerCase())
	);
};

export default UsersCards;
