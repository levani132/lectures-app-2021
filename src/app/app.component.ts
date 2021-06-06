import { Component } from '@angular/core';

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appStatus = new Promise(resolve => {
    setTimeout(() => resolve('აქტიური'), 2000);
  });
  filterText = '';
  shouldFilter = true;
  accounts = [
    {
      owner: 'ლევან ბეროშვილი',
      status: 'Pending',
      createDat: new Date(2019, 5, 12)
    },
    {
      owner: 'მარიამ ავალიანი',
      status: 'Active',
      createDat: new Date(2019, 5, 12)
    },
    {
      owner: 'დიმიტრი ბედინაძე',
      status: 'Inactive',
      createDat: new Date(2019, 5, 12)
    },
    {
      owner: 'გიორგი კილტავა',
      status: 'Active',
      createDat: new Date(2019, 5, 12)
    }
  ];

  addAccount() {
    this.accounts.push({
      owner: 'გიორგი კილტავა',
      status: 'Active',
      createDat: new Date(2019, 5, 12)
    });
  }
}
