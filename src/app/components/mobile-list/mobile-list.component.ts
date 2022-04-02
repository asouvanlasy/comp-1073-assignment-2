import { Mobile } from '../../shared/mobile';
import { ApiService } from '../../shared/api.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-mobile-list',
  templateUrl: './mobile-list.component.html',
  styleUrls: ['./mobile-list.component.css']
})

export class MobileListComponent implements OnInit {
  MobileData: any = [];
  dataSource: MatTableDataSource<Mobile>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['_id', 'game', 'dev', 'system', 'release', 'action'];

  constructor(private mobileApi: ApiService) {
    this.mobileApi.GetMobiles().subscribe(data => {
      this.MobileData = data;
      this.dataSource = new MatTableDataSource<Mobile>(this.MobileData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    })
  }

  ngOnInit() { }

  deleteMobile(index: number, e: { _id: any; }){
    if(window.confirm('Are you sure')) {
      const data = this.dataSource.data;
      data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
      this.dataSource.data = data;
      this.mobileApi.DeleteMobile(e._id).subscribe()
    }
  }
}