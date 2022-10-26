import baseStyled, { ThemedStyledInterface } from 'styled-components';

import { sizes } from './sizes';

export const theme = { sizes };

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
