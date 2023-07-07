import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
export class Message{
  constructor(public author:string, public content:string){}
}
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }
  conversation = new Subject<Message[]>();
  messageMap:any={
    "hi": "hello",
    "Hi": "Hello",
    "who are you": "my name is OVI AI Chatbot",
    "Who are you": "my name is OVI AI Chatbot",
    "default": "I didn't understand. Can youplease repeat?"
  }

  getBotAnswer(msg:any){
    const userMsg= new Message('user',msg);
    this.conversation.next([userMsg]);
    const botMsg= new Message('bot',this.getBotMessage(msg));
    setTimeout(()=>{
      this.conversation.next([botMsg])
    },1500)
  }
  getBotMessage(question: string){
    let answer=this.messageMap[question];
    return answer || this.messageMap['default']
  }
}
