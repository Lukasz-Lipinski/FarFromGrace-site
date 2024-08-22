import { ChangeDetectionStrategy, Component, input, Input, output } from '@angular/core';
import { Role, IMusican, IEquipmentItem } from '../../services/content/content.service';

@Component({
  selector: 'app-musician-card',
  templateUrl: './musician-card.component.html',
  styleUrl: './musician-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MusicianCardComponent {
  musicianDataEmitter = output<IMusican>();
  get GetName() {
    return this.SetName();
  };
  readonly SetName = input.required<string>();

  get GetSurname() {
    return this.SetSurname();
  };
  readonly SetSurname = input.required<string>();
  get GetNick() {
    return this.SetNick();
  };
  readonly SetNick = input.required<string>();
  get GetImageMain() {
    return this.SetImageMain();
  };
  readonly SetImageMain = input.required<string>();
  get GetImageAvatar() {
    return this.SetImageAvatar();
  };
  readonly SetImageAvatar = input.required<string>();
  get GetRole() {
    return this.SetRole();
  };
  readonly SetRole = input.required<Role>();
  get GetImgPosition() {
    return this.SetImgPosition();
  };
  readonly SetImgPosition = input.required<"left" | "right">();
  get GetDescription() {
    return this.SetDescription();
  };
  readonly SetDescription = input.required<string[]>();
  get getEquipment() {
    return this.SetEquipment();
  };
  readonly SetEquipment = input.required<IEquipmentItem[]>();
  readonly SetInstagram = input.required<string>();
  get getInstagram() {
    return this.SetInstagram();
  }

  public showDetails() {
    const musicianData: IMusican = {
      name: this.GetName,
      surname: this.GetSurname,
      nick: this.GetNick,
      imgAvatar: this.GetImageAvatar,
      imgMain: this.GetImageMain,
      role: this.GetRole,
      imgPosition: this.GetImgPosition,
      description: this.GetDescription,
      equipment: this.getEquipment,
      instagram: this.getInstagram,
    };
    this.musicianDataEmitter.emit(musicianData);
  }

  public setClass = () => this.GetNick.toLowerCase() === "kali" ? "avatar-kali" : "";
}
