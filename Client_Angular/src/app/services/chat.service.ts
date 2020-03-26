import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(public wsService: WebsocketService) { }

  sendMessage(data: string) {
    const payload = {
      from: 'Angular',
      body: data
    };

    this.wsService.emit('alerta', payload);
  }

  getMessages(){
    return this.wsService.listen('contador');
  }
}
