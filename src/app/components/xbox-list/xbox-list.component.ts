import { Xbox } from '../../shared/xbox';
import { ApiService } from '../../shared/api.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-xbox-list',
  templateUrl: './xbox-list.component.html',
  styleUrls: ['./xbox-list.component.css']
})

export class XboxListComponent implements OnInit {
  XboxData: any = [];
  dataSource: MatTableDataSource<Xbox>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['_id', 'game', 'dev', 'system', 'release', 'action'];

  constructor(private xboxApi: ApiService) {
    this.xboxApi.GetXboxs().subscribe(data => {
      this.XboxData = data;
      this.dataSource = new MatTableDataSource<Xbox>(this.XboxData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    })
  }

  ngOnInit() { }

  deleteXbox(index: number, e: { _id: any; }){
    if(window.confirm('Are you sure')) {
      const data = this.dataSource.data;
      data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
      this.dataSource.data = data;
      this.xboxApi.DeleteXbox(e._id).subscribe()
    }
  }
}