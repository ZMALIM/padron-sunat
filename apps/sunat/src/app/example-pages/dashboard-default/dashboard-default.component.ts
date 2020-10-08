import { Component, OnInit } from '@angular/core';
import { faSpinner, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { PadronService } from './padron.service';

@Component({
	selector: 'app-dashboard-default',
	templateUrl: './dashboard-default.component.html'
})
export class DashboardDefaultComponent implements OnInit
{

	public spinner: IconDefinition = faSpinner;
	public ratio: number = 0;
	public loader: Observable<boolean>;
	public message: string;

	constructor(
		public readonly padronService: PadronService
	)
	{
	}

	ngOnInit()
	{
		this.padronService.returnProgressObservable().subscribe((data) => this.ratio = data);
		this.loader = this.padronService.httpProgress();
	}

	public downloadFile() 
	{
		this.message = 'Descargando Padron Recucido por favor espere...';
		this.padronService.download()
			.subscribe(e => {
				this.message = e.message;
				if (e.success)
				{
					this.extractZip();
				}
			});
	}

	public extractZip()
	{
		this.message = 'Descomprimiendo Archivo ZIP.';
		this.padronService.extractZip().subscribe(responseExtract => {
			this.message = responseExtract.message;
			if (responseExtract.success)
			{
				this.load();
			}
		});
	}

	public load()
	{
		this.message = 'Procesando Padron Reducido';
		this.padronService.loadData().subscribe(responseLoad => {
			console.log(responseLoad);
			this.message = responseLoad.message;
		});
	}
}
