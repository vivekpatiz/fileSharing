import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { DataSource } from '@angular/cdk/table';
import { EntityService } from './Services/entity.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  displayedColumns: string[] = ['name', 'baseDate', 'status', 'version', 'description', 'geography'];
  dataSource = new MatTableDataSource<Entity>(REQUEST);
  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  constructor(private entityService: EntityService) { 
    // Initialization inside the constructor
    //this.REQUEST = [];
 }
 getEntityData(){
  this.entityService.getEntityData().subscribe((res) =>{
    console.log(res,".......................")
  })
 }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    let total = REQUEST.length;
    console.log(REQUEST.length,"length")
    this.dataSource.paginator = this.paginator;
  }
  title = 'ICM-POC';
  selectedRow: any;
  @ViewChild('paginator') paginator: MatPaginator;


  selectRow(val: any){
    this.selectedRow = val;
    console.log(this.selectedRow);
  }
}

export interface Entity {
  name: string;
  baseDate: string;
  status: string;
  version: number;
  description: string;
  geography: string;
}

const REQUEST: Entity[] = [
{ "name": "Project A", "baseDate": "2022-01-01", "status": "In review", "version": 1, "description": "Project A", "geography": "Urban" },
{ "name": "Project B", "baseDate": "2021-07-15", "status": "In review", "version": 2, "description": "Project B", "geography": "Coastal" },
{ "name": "Project C", "baseDate": "2022-03-01", "status": "Validated", "version": 1, "description": "Project C", "geography": "Rural" },
{ "name": "Project D", "baseDate": "2021-12-01", "status": "In review", "version": 3, "description": "Project D", "geography": "Urban" },
{ "name": "Project E", "baseDate": "2021-09-01", "status": "Validated", "version": 1, "description": "Project E", "geography": "Natural" },
{ "name": "Project F", "baseDate": "2022-02-01", "status": "In review", "version": 2, "description": "Project F", "geography": "Rural" },
{ "name": "Project G", "baseDate": "2021-05-01", "status": "Validated", "version": 1, "description": "Project G", "geography": "Urban" },
{ "name": "Project H", "baseDate": "2022-01-01", "status": "Validated", "version": 3, "description": "Project H", "geography": "Urban" },
{ "name": "Project I", "baseDate": "2021-11-01", "status": "In review", "version": 1, "description": "Project I", "geography": "Rural" },
{ "name": "Project J", "baseDate": "2022-06-01", "status": "Validated", "version": 2, "description": "Project J", "geography": "Rural" }
]
