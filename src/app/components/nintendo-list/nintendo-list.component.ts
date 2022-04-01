import { Nintendo } from '../../shared/nintendo';
import { ApiService } from '../../shared/api.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-nintendo-list',
  templateUrl: './nintendo-list.component.html',
  styleUrls: ['./nintendo-list.component.css']
})

export class NintendoListComponent implements OnInit {
  NintendoData: any = [];
  dataSource: MatTableDataSource<Nintendo>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['_id', 'game', 'dev', 'system', 'release'];

  constructor(private nintendoApi: ApiService) {
    this.nintendoApi.GetNintendos().subscribe(data => {
      this.NintendoData = data;
      this.dataSource = new MatTableDataSource<Nintendo>(this.NintendoData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    })
  }

  ngOnInit() { }

  deleteNintendo(index: number, e: { _id: any; }){
    if(window.confirm('Are you sure')) {
      const data = this.dataSource.data;
      data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
      this.dataSource.data = data;
      this.nintendoApi.DeleteNintendo(e._id).subscribe()
    }
  }
}