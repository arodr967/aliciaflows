import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <!--TODO: Use moment to display current date-->
    <div class="home">
      <div class="header">
        <div class="title">
          <!--p>{{ date }}</p-->
          <h1>today, is your lucky day</h1>
        </div>
        <div class="sub-title">
          <!--TODO: Link to my main website.-->
          <h3>
            you have stumbled upon
            <a href="">your <i>not-so-average</i> yoga teacher</a>
            website
          </h3>
        </div>
      </div>

      <div class="content">
        <!--TODO: Get ideas as to what should be here.-->
      </div>
    </div>
  `,
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  date = new Date();
  constructor() {}

  ngOnInit() {}
}
