import { PlayStation } from '../../shared/playstation';
import { ApiService } from '../../shared/api.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-playstation-list',
  templateUrl: './playstation-list.component.html',
  styleUrls: ['./playstation-list.component.css']
})

export class PlayStationListComponent implements OnInit {
  PlayStationData: any = [];
  dataSource: MatTableDataSource<PlayStation>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['_id', 'game', 'dev', 'system', 'release', 'action'];

  constructor(private playstationApi: ApiService) {
    this.playstationApi.GetNintendos().subscribe(data => {
      this.PlayStationData = data;
      this.dataSource = new MatTableDataSource<PlayStation>(this.PlayStationData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    })
  }

  ngOnInit() { }

  deletePlaystation(index: number, e: { _id: any; }){
    if(window.confirm('Are you sure')) {
      const data = this.dataSource.data;
      data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
      this.dataSource.data = data;
      this.playstationApi.DeletePlayStation(e._id).subscribe()
    }
  }
}