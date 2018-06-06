import { Component, OnInit, Input } from '@angular/core';
import { updateHTML,loadNewVideo,Change,myFunction } from '../../../assets/javascript/custom'; 
import { ConfigInfo } from '../../objectClass/configInfo';
import { HomePageConfigInfo } from '../../objectClass/homePageConfigInfo';
import { SafeHtmlPipe } from '../../safe-html.pipe';
import { AdminService } from '../../administrator/admin.service';

@Component({
  selector: 'nkt-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {

  @Input() config: ConfigInfo
  constructor(private service:AdminService) { 
    
  }

  ngOnInit() {
    
  }
  
  loadNewVideo(id, startSeconds):void{
    loadNewVideo(id, startSeconds);
  }
  myFunction(){
    myFunction();
  }
}
