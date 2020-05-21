import {Component, Input, OnInit} from '@angular/core';
import {Version} from '../../../objects/version';

@Component({
  selector: 'app-version-documento',
  templateUrl: './version-documento.component.html',
  styleUrls: ['./version-documento.component.css']
})
export class VersionDocumentoComponent implements OnInit {

  @Input() version: Version;

  constructor() { }

  ngOnInit(): void {
  }

}
