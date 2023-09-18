import type { Meta, StoryObj } from '@storybook/react';
import { InputField } from './Input';

const meta = {
	title: 'Components/Input',
	component: InputField,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		type: {
			control: 'select',
			options: ['text', 'radio'],
		},
	},
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {
	args: {
		type: 'text',
		label: 'Label',
		id: 'fName',
		name: 'fName',
		showLabel: true,
	},
};
