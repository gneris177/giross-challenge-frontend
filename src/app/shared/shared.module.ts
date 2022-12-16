import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ButtonDefaultComponent } from './components/button-default/button-default.component';
import { MessageComponent } from './components/message/message.component';

@NgModule({
  declarations: [ButtonDefaultComponent, MessageComponent],
  imports: [CommonModule],
  exports: [ButtonDefaultComponent, MessageComponent]
})
export class SharedModule {}
