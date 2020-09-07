import styled from "styled-components";

const Wrapper = styled.div`
	max-width: 340px;
	margin: 3rem auto;
	padding: 2rem;
	text-align: center;
	border-radius: 18px;
	box-shadow: 0px 2px 16px ${({ theme }) => theme.colors.gray},
		0px 2px 16px ${({ theme }) => theme.colors.gray};
`;

export default Wrapper;
