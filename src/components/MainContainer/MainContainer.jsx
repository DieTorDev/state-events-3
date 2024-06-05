import UsersCards from '../UsersContainer/UsersContainer';
import {
	StyledMainContainer,
	StyledUserContainer
} from './main-container.styles';

const MainContainer = () => {
	return (
		<StyledMainContainer>
			<h1>Listado de usuarios</h1>
			<StyledUserContainer>
				<UsersCards />
			</StyledUserContainer>
		</StyledMainContainer>
	);
};

export default MainContainer;
