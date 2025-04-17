import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import {
	PrimeTableColumnType,
	PrimeTableColumnTypes
} from '@shared/components/prime-table/prime-table.component.model';
import { CardLayoutComponent } from '@shared/layouts/card-layout/card-layout.component';
import { TableLazyLoadEvent, TableModule } from 'primeng/table';
import { AvatarComponent, AvatarComponentModel } from '../avatar/avatar.component';
import { FormPropertiesModel } from '../forms/_models/base-form';
import { ButtonComponent, ButtonComponentModel } from '../forms/button/button.component';
import { InputComponent, InputTextComponentModel } from '../forms/input/input.component';
import { PrimeTable } from './prime-table.component.model';

@Component({
	selector: 'app-prime-table',
	imports: [TableModule, CardLayoutComponent, CommonModule, AvatarComponent, InputComponent, ButtonComponent],
	templateUrl: './prime-table.component.html',
	styleUrl: './prime-table.component.scss'
})
export class PrimeTableComponent {
	public input = input(new PrimeTable({}));
	public PrimeTableColumnTypes = PrimeTableColumnTypes;
	public actualFilterState!: TableLazyLoadEvent;
	private dataOnRow: unknown;

	public onLazyload(event: TableLazyLoadEvent): void {
		this.actualFilterState = event;
		this.input().formArray = this.setFormArray(event.rows as number);
		this.input().onLazyload(event);
	}

	public setAvatarColumnType(
		src: string,
		avatarColumnType: PrimeTableColumnType<AvatarComponentModel>
	): AvatarComponentModel {
		avatarColumnType.input.src = src;
		return avatarColumnType.input as AvatarComponentModel;
	}

	public setInputColumnType(
		value: string,
		inputColumnType: PrimeTableColumnType<InputTextComponentModel>,
		index: number
	): InputTextComponentModel {
		return new InputTextComponentModel({
			...inputColumnType.input,
			formProperties: new FormPropertiesModel({
				...inputColumnType.input.formProperties,
				form: this.input().formArray.at(index - this.actualFilterState.first!),
				defaultValue: value
			})
		});
	}

	public setButtonColumnType(
		value: string,
		buttonColumnType: PrimeTableColumnType<ButtonComponentModel>,
		index: number
	): ButtonComponentModel {
		return new ButtonComponentModel({
			...buttonColumnType.input,
			options: buttonColumnType.input.options.map((option) => {
				option.onClickEvent = (): void => {
					option.onClick(this.dataOnRow);
				};
				return option;
			}),
			formProperties: new FormPropertiesModel({
				...buttonColumnType.input.formProperties,
				form: this.input().formArray.at(index - this.actualFilterState.first!),
				defaultValue: value
			})
		});
	}

	public clickOptionsButtonColumnType(row: unknown): void {
		this.dataOnRow = row;
	}

	private setFormArray(rows: number): FormArray<FormGroup> {
		return new FormArray<FormGroup>(this.setFormGroups(rows));
	}

	private setFormGroups(rows: number): FormGroup[] {
		return Array.from({ length: rows }, () => new FormGroup({}));
	}
}
