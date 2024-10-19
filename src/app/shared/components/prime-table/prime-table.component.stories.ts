import { PrimeTableComponent } from '@shared/components/prime-table/prime-table.component';
import { PrimeTable, PrimeTableColumn } from '@shared/components/prime-table/prime-table.component.model';
import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';

// Meta configurando el componente
const meta: Meta<PrimeTableComponent> = {
	title: 'Components/Generics/PrimeTable',
	component: PrimeTableComponent,
	tags: ['autodocs'],
	decorators: [
		moduleMetadata({
			// importa cualquier otro módulo necesario aquí
			imports: [],
			// declara componentes, pipes o directivas si es necesario
			declarations: [],
			// puedes agregar providers si el componente lo requiere
			providers: []
		})
	],
	argTypes: {
		input: { control: 'object' } // Permite controlar el input como un objeto desde Storybook
	}
};
export default meta;

type Story = StoryObj<PrimeTableComponent>;

// Plantilla básica que le pasa el `input` a PrimeTableComponent
export const Base: Story = {
	args: {
		input: new PrimeTable({
			title: 'Test',
			columns: [
				new PrimeTableColumn({ property: 'code', header: 'Code', isFrozen: true }),
				new PrimeTableColumn({ property: 'lastname', header: 'Lastname', isFrozen: false }),
				new PrimeTableColumn({ property: 'name', header: 'Name', isFrozen: false }),
				new PrimeTableColumn({ property: 'age', header: 'Age', isFrozen: false }),
				new PrimeTableColumn({ property: 'email', header: 'Email', isFrozen: false }),
				new PrimeTableColumn({ property: 'address', header: 'Address', isFrozen: false })
			]
		})
	}
};

export const WithCustomProvider: Story = {
	decorators: [
		moduleMetadata({
			// Define módulos, declaraciones o providers específicos si es necesario
			imports: [],
			declarations: [],
			providers: []
		})
	],
	args: {
		input: new PrimeTable({
			title: 'Custom Test',
			columns: [
				new PrimeTableColumn({ property: 'code', header: 'Code', isFrozen: true }),
				new PrimeTableColumn({ property: 'lastname', header: 'Lastname', isFrozen: false }),
				new PrimeTableColumn({ property: 'name', header: 'Name', isFrozen: false }),
				new PrimeTableColumn({ property: 'email', header: 'Email', isFrozen: false }),
				new PrimeTableColumn({ property: 'phone', header: 'Phone', isFrozen: false })
			]
		})
	}
};
