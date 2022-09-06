import React from 'react';
import styled from '@emotion/styled/macro';

import { COLORS, SIZES } from '../../Utils/generalStyles';

type ChipProps = {
  value: string;
}

const Span = styled.span`
  background: rgba(222, 158, 54, .30);
  font-weight: 600;
  padding: 0.5rem;
  border-radius: 20px;
  color: ${COLORS.ORANGE};
  font-size: ${SIZES.CHIP_TEXT};
  cursor: pointer;
`;

const Chip: React.FC<ChipProps> = ({ value }) => (
  <Span>{value}</Span>
);

export default Chip;
