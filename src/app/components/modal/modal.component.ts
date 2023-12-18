import { Component, OnInit, inject } from '@angular/core';
import { IMusican } from '../../pages/about-page/content/content.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  private data = inject<{
    musician: IMusican
  }>(MAT_DIALOG_DATA);
  get getMusician() {
    return this.data.musician;
  }
  constructor() { }

  ngOnInit() {
  }

}
