import styled from 'styled-components';

const StyledUserCard = styled.article`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	box-shadow: 1px 1px 10px -1px rgba(0, 0, 0, 0.75);
	border-radius: 10px;
	height: 90px;
	padding: 20px;
`;

const StyledUserInfo = styled.div`
	display: flex;
	align-items: center;
	gap: 15px;
`;

const StyledProfileImg = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
`;

const StyledName = styled.p`
	margin: 0;
	padding: 2px;
	font-weight: bold;
`;

const StyledUserName = styled(StyledName)`
	font-size: 13px;
	color: gray;
`;

const StyledActive = styled.p`
	font-weight: bolder;
	font-size: 18px;
	color: ${({ $active }) => ($active ? 'green' : 'red')};
`;

export {
	StyledUserCard,
	StyledUserInfo,
	StyledProfileImg,
	StyledName,
	StyledUserName,
	StyledActive
};
