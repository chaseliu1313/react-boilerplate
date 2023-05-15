import styled from 'styled-components';
//example of styled-component and accessing the global theme
//you can also use typography from MUi
export const SubTitle2 = styled.p`
  ${({ theme }) =>
    `font-size: ${theme.fontSize.sub2}px; font-weight: ${theme.fontWeight.sub2}; color: ${theme.palette.primary.dark}`}
`;

export const SubTitle = styled.p`
  ${({ theme }) =>
    `font-size: ${theme.fontSize.sub}px; font-weight: ${theme.fontWeight.sub}; color: ${theme.palette.primary.dark}`}
`;

export const Caption = styled.p`
  ${({ theme }) =>
    `font-size: ${theme.fontSize.caption}px; font-weight: ${theme.fontWeight.caption}; color: ${theme.palette.primary.dark}`}
`;
