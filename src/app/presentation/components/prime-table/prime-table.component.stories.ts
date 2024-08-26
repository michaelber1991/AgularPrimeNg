import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { PrimeTableComponent } from './prime-table.component';

// export default{
// 	title: '',
// 	component: PrimeTableComponent,
// 	args: {
// 		label:'Button'
// 	}
// }

// const Template: Story<PrimeTableComponent> =

const meta: Meta<PrimeTableComponent> = {
	component: PrimeTableComponent,
	decorators: [
		// Apply metadata to all stories
		moduleMetadata({
			// import necessary ngModules or standalone components
			// imports: [...],
			// // declare components that are used in the template
			// declarations: [...],
			// // List of providers that should be available to the root component and all its children.
			// providers: [...],
		})
	]
};
export default meta;

type Story = StoryObj<PrimeTableComponent>;

export const Base: Story = {};

export const WithCustomProvider: Story = {
	decorators: [
		// Apply metadata to a specific story
		moduleMetadata({
			// imports: [...],
			// declarations: [...],
			// providers: [...],
		})
	]
};
