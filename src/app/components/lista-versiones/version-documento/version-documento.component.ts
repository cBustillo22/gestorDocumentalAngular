import {Component, Input, OnInit} from '@angular/core';
import {VersionDoc} from '../../../objects/versionDoc';

@Component({
  selector: 'app-version-documento',
  templateUrl: './version-documento.component.html',
  styleUrls: ['./version-documento.component.css']
})
export class VersionDocumentoComponent implements OnInit {

  @Input() version: VersionDoc;

  constructor() { }

  ngOnInit(): void {
  }

}
