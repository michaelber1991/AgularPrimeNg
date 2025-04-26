import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { environment } from 'environments/environment.development';
import type { INotificationApiService } from './notification-api.interface';

@Injectable({
	providedIn: 'root'
})
export class NotificationApiService implements INotificationApiService {
	private _httpClient = inject(HttpClient);
	private readonly URL_BASE_NOTIFICATION = `${environment.BASE_API_URL}/notificationhub`;
	private hubConnection!: signalR.HubConnection;

	startConnection(): void {
		this.hubConnection = new signalR.HubConnectionBuilder()
			.withUrl(this.URL_BASE_NOTIFICATION)
			.withAutomaticReconnect() // 🔥 Activamos reconexión automática
			.build();

		this.hubConnection
			.start()
			.then(() => console.log('✅ Conectado a SignalR'))
			.catch((err) => console.error('❌ Error conectando a SignalR: ', err));

		this.registerConnectionEvents();
	}

	addUsersCreatedListener(): void {
		this.hubConnection.on('UsersCreated', (data) => {
			console.log('🎉 Usuarios creados:', data);
			alert(`✅ Se crearon ${data.totalUsersCreated} usuarios.`);
			// Si prefieres un toast, aquí lanzarías el servicio de toast en lugar de alert
		});
	}

	private registerConnectionEvents(): void {
		// Mientras se reconecta
		this.hubConnection.onreconnecting((error) => {
			console.warn('⚠️ Reconectando a SignalR...', error);
			// Aquí podrías mostrar un mensaje tipo "Reconectando..."
		});

		// Cuando se reconecta
		this.hubConnection.onreconnected((connectionId) => {
			console.log('✅ Reconectado a SignalR, ID de conexión:', connectionId);
			// Aquí podrías mostrar un mensaje tipo "Reconexión exitosa"
		});

		// Cuando la conexión se pierde
		this.hubConnection.onclose((error) => {
			console.error('❌ Conexión cerrada con SignalR', error);
			// Aquí podrías mostrar un mensaje tipo "Conexión perdida, intentando reconectar..."
		});
	}
}
