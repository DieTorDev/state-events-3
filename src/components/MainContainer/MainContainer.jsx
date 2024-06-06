import { useState } from 'react';
import NavFilter from '../NavFilter/NavFilter';
import UsersCards from '../UsersContainer/UsersContainer';
import {
	StyledMainContainer,
	StyledUserContainer
} from './main-container.styles';

const MainContainer = () => {
	const [showActive, setShowActive] = useState(false);
	const [search, setSearch] = useState('');
	const [order, setOrder] = useState('default');

	console.log(search);

	return (
		<StyledMainContainer>
			<h1>Listado de usuarios</h1>
			<NavFilter
				setShowActive={setShowActive}
				setSearch={setSearch}
				setOrder={setOrder}
			/>
			<StyledUserContainer>
				<UsersCards showActive={showActive} search={search} order={order} />
			</StyledUserContainer>
		</StyledMainContainer>
	);
};

export default MainContainer;
