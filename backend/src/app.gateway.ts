import { SubscribeMessage, WebSocketGateway, WsResponse, WebSocketServer, OnGatewayConnection, OnGatewayInit, OnGatewayDisconnect } from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Socket, Server } from 'socket.io';

@WebSocketGateway()
export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

  private logger: Logger = new Logger('AppGateway');

  @WebSocketServer() wsServer: Server;

  afterInit(): void {
    this.logger.log('Initialized');
  }

  handleConnection(client: Socket): void {
    this.logger.log(`Client Connected ${client.id}`);
  }

  handleDisconnect(client: Socket): void {
    this.logger.log(`Client Disconnected ${client.id}`);
  }

  @SubscribeMessage('global:message')
  handleGlobalMessage(client: Socket, message: string) : WsResponse<string> {
    this.logger.log(`Global Message Received from ${client.id}: ${message}`);
    return { event: 'message', data: message };
  }

  @SubscribeMessage('message')
  handleMessage(client: Socket, message: string): WsResponse<string> {
    this.logger.log(`Message Received from ${client.id}: ${message}`);
    return { event: 'message', data: message };
  }
}
