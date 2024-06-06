import { StyledNav } from './nav-filter.styles';

const NavFilter = ({ setShowActive, setSearch, setOrder }) => {
	return (
		<StyledNav>
			<input onKeyUp={({ target }) => setSearch(target.value)} type='text' />
			<label htmlFor='Active'>Activos:</label>
			<input
				onChange={({ target }) => setShowActive(target.checked)}
				type='checkbox'
				name='Active'
			/>
			<select onChange={({ target }) => setOrder(target.value)} name='' id=''>
				<option value='default'>Por defecto</option>
				<option value='alphabetically'>Orden alfabético</option>
			</select>
		</StyledNav>
	);
};

export default NavFilter;
