import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

  msgSubscription: Subscription;
  contador = {};

  constructor(public chatService: ChatService) { }

  ngOnInit(): void {

    this.msgSubscription = this.chatService.getMessages().subscribe(data => {
      console.log(data);
      this.contador = data;
    });

  }

  ngOnDestroy() {
    this.msgSubscription.unsubscribe();
  }


  enviar(){
      this.chatService.sendMessage('Alerta!');
      console.log('Alerta enviada');
    }
}
