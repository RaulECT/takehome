import React from 'react';
import styled from '@emotion/styled/macro';

import Search from '../Search';

import { SIZES, COLORS } from '../../Utils/generalStyles'

type HeaderProps = {
  titleText: string;
  placeholder: string;
};

const Title = styled.h1`
  color: ${COLORS.BLACK};
  font-size: ${SIZES.TITLE_TEXT};
  font-weight: bold;
`

const Header: React.FC<HeaderProps> = ({ titleText, placeholder }) => (
  <>
    <Title>{titleText}</Title>
    <Search placeholder={placeholder} />
  </>
);

export default Header;
