// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-PCs-list',
//   templateUrl: './PCs-list.component.html',
//   styleUrls: ['./PCs-list.component.css']
// })
// export class PCsListComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { PC } from './../../shared/PC';
import { ApiService } from './../../shared/api.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-PC-list',
  templateUrl: './PC-list.component.html'
})

export class PCListComponent implements OnInit {
  PCData: any = [];
  dataSource: MatTableDataSource<PC>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['_id', 'Game', 'Dev', 'System', 'Release', 'action'];

  constructor(private PCApi: ApiService) {
    this.PCApi.GetPCs().subscribe((data) => {
      this.PCData = data;
      this.dataSource = new MatTableDataSource<PC>(this.PCData);
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
    })    
  }

  ngOnInit() { }

  deletePC(index: number, e: { _id: any; }){
    if(window.confirm('Are you sure')) {
      const data = this.dataSource.data;
      data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
      this.dataSource.data = data;
      this.PCApi.DeletePC(e._id).subscribe()
    }
  }

}