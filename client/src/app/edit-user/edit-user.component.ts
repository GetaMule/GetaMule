import { Component, OnInit } from '@angular/core';
import { EditUserService } from '../../services/edit-user.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user = {}
  user_id: any
  //public uploader: FileUploader = new FileUploader({ url: URL });
  constructor(
    public editar: EditUserService,
    private router: Router,
    private route: ActivatedRoute, ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.route.params.subscribe(body => {
        this.user_id = body.id

      })
    });
  }
  edit(user) {
    console.log(this.user_id)
    this.editar.edit(user, this.user_id)
      .subscribe(user => {
        console.log(user)
        this.router.navigate(['user/home'])
      });
  }
}
