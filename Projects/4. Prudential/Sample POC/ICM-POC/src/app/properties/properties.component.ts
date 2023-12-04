import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnChanges {
  @Input() data:any
  element:any = [
    {"head":"Name","value":""},
    {"head":"Version","value":""},
    {"head":"Description","value":""},
    {"head":"Status","value":""},
    {"head":"Base Date","value":""},
    {"head":"Geography","value":""}
  ]
  displayedColumns: string[] = ['name', 'value'];
  dataSource: any
  Heading = ""
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource= this.element = [
      {"head":"Name","value":""},
      {"head":"Version","value":""},
      {"head":"Description","value":""},
      {"head":"Status","value":""},
      {"head":"Base Date","value":""},
      {"head":"Geography","value":""}
    ]
    this.Heading = this.element.head
    console.log("value changed", this.data);
    if(this.data != undefined){
      console.log(this.data, 'this.data')
          }else{
            console.log('Data is undefined')
          }
          for(let i=0;i<this.element.length;i++){
            if(this.element[i].head == "Version")
            this.element[i].value = this.data.version 
            else if(this.element[i].head == "Description")
            this.element[i].value = this.data.description
            else if(this.element[i].head == "Status")
            this.element[i].value = this.data.status
            else if(this.element[i].head == "Name")
            this.element[i].value = this.data.name
            else if(this.element[i].head == "Base Date")
            this.element[i].value = this.data.baseDate
            else if(this.element[i].head == "Geography")
            this.element[i].value = this.data.geography
          }
          console.log(this.element,"...................................")
          this.dataSource = this.element
          console.log("data in child",this.data)
  }

}
