import styled from 'styled-components';

import { fontSizes, primaryFont } from '../../../common/theme/typography';

export const Button = styled.button.attrs(props => ({
  type: props.type ?? 'button',
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 4px;
  font-family: ${primaryFont};
  font-size: ${fontSizes.default};
  transition: background-color 0.2s linear;
  border: 0;

  &:disabled {
    background-color: transparent;
    border: 0;
    color: ${props => props.theme.disabledColor};
  }

  &.small {
    padding: 8px;
    font-size: ${fontSizes.tags};
  }

  &.large {
    padding: 16px 24px;
    font-size: ${fontSizes.h5};
    border-radius: 8px;
  }

  &.warning {
    background-color: ${props => props.theme.status.warningColor};
    color: ${props => props.theme.textColor};

    &:hover,
    &:focus {
      background-color: ${props => props.theme.status.warningHoverColor};
    }

    &:active {
      background-color: ${props => props.theme.status.warningActiveColor};
    }
  }

  &.error {
    background-color: ${props => props.theme.status.errorColor};
    color: ${props => props.theme.textColor};

    &:hover,
    &:focus {
      background-color: ${props => props.theme.status.errorHoverColor};
    }

    &:active {
      background-color: ${props => props.theme.status.errorActiveColor};
    }
  }

  &.success {
    background-color: ${props => props.theme.status.successColor};
    color: ${props => props.theme.textColor};

    &:hover,
    &:focus {
      background-color: ${props => props.theme.status.successHoverColor};
    }

    &:active {
      background-color: ${props => props.theme.status.successActiveColor};
    }
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.textColorOnPrimary};
  border: 1px solid transparent;

  &:hover,
  &:focus {
    background-color: ${props => props.theme.primaryHoverColor};
    color: ${props => props.theme.textColorOnPrimary};
  }

  &:focus {
    outline: 2px solid ${props => props.theme.primaryHoverColor};
    outline-offset: 2px;
  }

  &:active {
    background-color: ${props => props.theme.primaryActiveColor};
    border-color: ${props => props.theme.primaryActiveColor};
  }
`;

export const SecondaryButton = styled(Button)`
  background-color: transparent;
  color: ${props => props.theme.textColorOnSecondary};
  border: 1px solid ${props => props.theme.secondaryColor};
  transition: border-color 0.2s linear;

  &:hover,
  &:focus {
    border-color: ${props => props.theme.secondaryHoverColor};
    color: ${props => props.theme.textColorOnSecondary};
  }

  &:focus {
    outline: 2px solid ${props => props.theme.secondaryHoverColor};
    outline-offset: 2px;
  }

  &:active {
    border-color: ${props => props.theme.secondaryActiveColor};
  }
`;
