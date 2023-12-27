import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-section',
  templateUrl: './news-section.component.html',
  styleUrls: ['./news-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsSectionComponent implements OnInit {
  paragraphs = [
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, soluta iusto
    eos neque blanditiis voluptatem quasi iure repudiandae aspernatur laborum
    sit maiores architecto eius facilis doloribus quisquam cumque distinctio
    nemo? Animi, quidem sit. Autem quibusdam deserunt quis nulla neque vel nobis`,
    `nostrum alias, perferendis perspiciatis blanditiis exercitationem eligendi
    officia est provident ad ex quos labore aperiam architecto magnam inventore
    commodi. At incidunt ex architecto voluptatum. Ab nulla deserunt eveniet
    ratione quidem iure, consequuntur asperiores. Voluptates dignissimos impedit
    ad dicta mollitia quidem magni ab tempora nobis ullam? Nihil nostrum cumque
    ab! Veritatis impedit vel ratione blanditiis perspiciatis. Consequatur,
    optio molestiae dolore eligendi quos quas! Earum temporibus qui debitis
    praesentium rem magnam ut rerum magni placeat quo beatae, dolores quae a
    quam. Aliquid quaerat amet nesciunt! Necessitatibus molestiae vitae vero
    quo. Illum aperiam excepturi voluptates pariatur porro? Possimus nulla vitae
    hic delectus fugit illum iste similique consectetur tenetur porro! Fuga,
    cupiditate eius! Hic eum nisi, modi error iusto harum aliquam reiciendis
    officiis amet quaerat odit voluptatum magni, quia distinctio quisquam veniam
    cupiditate maiores, repudiandae eveniet corporis quis. Voluptatum totam sint
    rem nulla. Temporibus nesciunt quibusdam suscipit doloremque nulla! Saepe
    praesentium cupiditate nesciunt magni. Excepturi dignissimos a natus
    deserunt? Excepturi qui reprehenderit sapiente. Consequuntur tempora laborum`,
    `assumenda minus obcaecati delectus similique deleniti ab. Vel consectetur,
    tempora officiis doloribus ducimus cum magni a beatae quas. Nemo sint eos
    debitis temporibus quod. Dolorem, hic impedit nobis voluptatem perspiciatis,
    recusandae magni sed deleniti aut eaque reprehenderit! Distinctio illo cum
    natus assumenda quod dolore quia tempore ex, recusandae ea saepe quaerat in
    animi consequatur est cupiditate. Quae corporis quod suscipit vel ipsum eos
    voluptates in explicabo harum! Nemo, quibusdam id aperiam tempore, vitae
    unde, non porro minima maxime ullam assumenda debitis animi earum optio
    perspiciatis quia necessitatibus illum. Distinctio, quidem. Suscipit
    obcaecati temporibus ut minima libero beatae!`

  ]
  constructor() { }

  ngOnInit() {
  }

}


