import { Component, OnInit } from '@angular/core';
import { BaseListCtl } from '../base-list.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-staffmemberlist',
  templateUrl: './staffmemberlist.component.html',
  styleUrls: ['./staffmemberlist.component.css']
})
export class StaffmemberlistComponent extends BaseListCtl {

  public form = {

    error: false, //error 
    message: null, //error or success message
    preload: [], // preload data
    data: { id: null }, //form data
    inputerror: {}, // form input error messages
    searchParams: {}, //search form
    searchMessage: null, //search result message
    list: [], // search list 
    pageNo: 0
  };



  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;

  constructor(public locator: ServiceLocatorService, public route: ActivatedRoute, private httpClient: HttpClient) {
    super(locator.endpoints.STAFF, locator, route);
  }

}