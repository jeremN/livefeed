/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Button, PrimaryButton, SecondaryButton } from './index';

export default {
  title: 'Atoms/Button',
  component: Button,
  subcomponents: { PrimaryButton, SecondaryButton },
  argTypes: {
    className: {
      options: ['small, large, success, error, warning'],
    },
  },
} as Meta;

const Template: Story<any> = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default button',
};

export const Small = Template.bind({});
Small.args = {
  children: 'Small button',
  className: 'small',
};

export const Large = Template.bind({});
Large.args = {
  children: 'Large button',
  className: 'large',
};

export const Success = Template.bind({});
Success.args = {
  children: 'Success button',
  className: 'success',
};

export const Warning = Template.bind({});
Warning.args = {
  children: 'Warning button',
  className: 'warning',
};

export const Error = Template.bind({});
Error.args = {
  children: 'Error button',
  className: 'error',
};

const PrimaryTemplate: Story<any> = args => <PrimaryButton {...args} />;
const SecondaryTemplate: Story<any> = args => <PrimaryButton {...args} />;

export const PrimaryBtn = PrimaryTemplate.bind({});
PrimaryBtn.args = {
  children: 'Primary button',
};

export const SecondaryBtn = SecondaryTemplate.bind({});
SecondaryBtn.args = {
  children: 'Secondary button',
};
