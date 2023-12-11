import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Role } from '../../pages/about-page/content/content.service';

@Component({
  selector: 'app-musician-card',
  templateUrl: './musician-card.component.html',
  styleUrl: './musician-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MusicianCardComponent {
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
  private image!: string;
  get GetImage() {
    return this.image;
  };
  @Input({
    required: true
  }) set SetImage(value: string) {
    this.image = value;
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
}