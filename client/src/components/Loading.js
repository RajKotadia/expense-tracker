import React from "react";
import styled from "styled-components";

import LoadingGif from "../assets/loading.gif";

const LoadingElement = styled.img`
	height: 17px;
`;

const Loading = () => {
	return <LoadingElement src={LoadingGif} alt="loading-gif" />;
};

export default Loading;
