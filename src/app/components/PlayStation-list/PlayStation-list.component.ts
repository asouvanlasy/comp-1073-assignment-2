import { Playstation } from '../../shared/playstation';
import { ApiService } from '../../shared/api.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-playstation-list',
  templateUrl: './playstation-list.component.html',
  styleUrls: ['./playstation-list.component.css']
})

export class PlaystationListComponent implements OnInit {
  PlaystationData: any = [];
  dataSource: MatTableDataSource<Playstation>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['_id', 'game', 'dev', 'system', 'release', 'action'];

  constructor(private playstationApi: ApiService) {
    this.playstationApi.GetPlaystations().subscribe(data => {
      this.PlaystationData = data;
      this.dataSource = new MatTableDataSource<Playstation>(this.PlaystationData);
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
      this.playstationApi.DeletePlaystation(e._id).subscribe()
    }
  }
}