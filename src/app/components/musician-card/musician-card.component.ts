import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, output } from '@angular/core';
import { Role, IMusican, IEquipmentItem } from '../../services/content/content.service';

@Component({
  selector: 'app-musician-card',
  templateUrl: './musician-card.component.html',
  styleUrl: './musician-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MusicianCardComponent {
  musicianDataEmitter = output<IMusican>();
  private name!: string;
  get GetName() {
    return this.name;
  };
  @Input({
    required: true
  }) set SetName(value: string) {
    this.name = value;
  };
  private surname!: string;
  get GetSurname() {
    return this.surname;
  };
  @Input({
    required: true
  }) set SetSurname(value: string) {
    this.surname = value;
  };
  private nick!: string;
  get GetNick() {
    return this.nick;
  };
  @Input({
    required: true
  }) set SetNick(value: string) {
    this.nick = value;
  }
  private imageMain!: string;
  get GetImageMain() {
    return this.imageMain;
  };
  @Input({
    required: true
  }) set SetImageMain(value: string) {
    this.imageMain = value;
  };
  private imageAvatar!: string;
  get GetImageAvatar() {
    return this.imageAvatar;
  };
  @Input({
    required: true
  }) set SetImageAvatar(value: string) {
    this.imageAvatar = value;
  };
  private role!: Role;
  get GetRole() {
    return this.role;
  };
  @Input({
    required: true
  }) set SetRole(value: Role) {
    this.role = value;
  }
  private imgPosition!: "left" | "right";
  get GetImgPosition() {
    return this.imgPosition;
  };
  @Input({
    required: true
  }) set SetImgPosition(value: "left" | "right") {
    this.imgPosition = value;
  };
  private description!: string[];
  get GetDescription() {
    return this.description;
  };
  @Input({
    required: true
  }) set SetDescription(value: string[]) {
    this.description = value;
  };
  private equipment!: IEquipmentItem[];
  get getEquipment() {
    return this.equipment;
  };
  @Input({
    required: true
  }) set SetEquipment(value: IEquipmentItem[]) {
    this.equipment = value;
  }
  private instagram!: string;
  @Input({
    required: true
  }) set SetInstagram(value: string) {
    this.instagram = value;
  }

  public showDetails() {
    const musicianData: IMusican = {
      name: this.name,
      surname: this.surname,
      nick: this.nick,
      imgAvatar: this.imageAvatar,
      imgMain: this.imageMain,
      role: this.role,
      imgPosition: this.imgPosition,
      description: this.description,
      equipment: this.equipment,
      instagram: this.instagram,
    };
    this.musicianDataEmitter.emit(musicianData);
  }

  public setClass = () => this.GetNick.toLowerCase() === "kali" ? "avatar-kali" : "";
}
