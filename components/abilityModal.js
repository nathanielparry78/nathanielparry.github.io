import React, { useState } from "react";
import styled from "styled-components";
import { Ability } from "./abilities";

const Modal = styled.div`
	display: absolute;
	height: auto;
	background: white;
	box-shadow: 0px 3px 6px #666;
	padding: .5rem 1rem 1rem;
	margin-top: .5rem;
	display: ${({isVisible}) => isVisible
		? "block"
		: "none"
	};
`;

const AbilityToggle = styled.div`
	cursor: pointer;
	user-select: none;
	/* font-size: 1.5rem; */
`;

export const AbilityModal = ({ability, tier, type}) => {
	const [visible, setVisible] = useState(false)

	const handleToggle = () => {
		return setVisible(!visible)
	}

	return (
		<>
			<AbilityToggle onClick={handleToggle}>{ability.name}</AbilityToggle>
			<Modal isVisible={visible}>
				{type}
				<Ability {...ability} tier={tier}/>
			</Modal>
		</>
	)
}