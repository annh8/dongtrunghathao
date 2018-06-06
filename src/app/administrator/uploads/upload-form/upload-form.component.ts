import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import {
  AngularFireStorage,
  AngularFireUploadTask
} from 'angularfire2/storage';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';
import { UploadInfo } from '../../../objectClass/uploadInfo';


@Component({
  selector: 'upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.scss'],
  inputs: ['pathFolder'],
  outputs: ['getUrlEvent'],
})
export class UploadFormComponent implements OnInit {

  ngOnInit(): void {
    //throw new Error("Method not implemented.");
  }
  // Main task
  task: AngularFireUploadTask;

  // Progress monitoring
  percentage: Observable<number>;

  snapshot: Observable<any>;

  // Download URL
  downloadURL: Observable<string>;
  @Input() pathFolder: string;
  @Output() getUrlEvent = new EventEmitter<UploadInfo>();
  @ViewChild('uploadInput')
  uploadInputVariable: any;

  // State for dropzone CSS toggling
  isHovering: boolean;

  constructor(
    private storage: AngularFireStorage,
    private db: AngularFirestore
  ) {}

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  startUpload(event: FileList) {
    
    if(event.length == 0)

      return;
    // The File object
    const file = event.item(0);
    
    // The storage path
    //const path = `test/${new Date().getTime()}_${file.name}`;
    const path = this.pathFolder+`/${file.name}`;
    // Totally optional metadata
    const customMetadata = { app: 'powered NKT!' };

    // The main task
    this.task = this.storage.upload(path, file, { customMetadata });

    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges().pipe(
      tap(snap => {
        if (snap.bytesTransferred === snap.totalBytes) {
          // Update firestore on completion
          this.db.collection('photos').add({ path, size: snap.totalBytes });
        }
      }),
      finalize(() => {
        this.downloadURL = this.storage.ref(path).getDownloadURL();
        this.storage.ref(path).getDownloadURL().subscribe(response => {
          var uploadInfo = new UploadInfo();
          uploadInfo.path = path;
          uploadInfo.url = response;
          this.getUrlEvent.emit(uploadInfo);
        });
      })
    );


    // The file's download URL
  }

  // Determines if the upload task is active
  isActive(snapshot) {
    return (
      snapshot.state === 'running' &&
      snapshot.bytesTransferred < snapshot.totalBytes
    );
  }
  /**
   * name
   */
  public clean() {
    this.uploadInputVariable.nativeElement.value = "";
    this.percentage = null;
    this.snapshot = null;
  }
}
