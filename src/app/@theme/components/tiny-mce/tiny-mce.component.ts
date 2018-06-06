import { Component, OnDestroy, AfterViewInit, Output, EventEmitter, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'ngx-tiny-mce',
  template: '',
})
export class TinyMCEComponent implements OnDestroy, AfterViewInit {

  @Input() initialContent: string;
  @Output() editorKeyup = new EventEmitter<any>();

  editor: any;

  constructor(private host: ElementRef) { }

  ngAfterViewInit() {
    tinymce.init({
      target: this.host.nativeElement,
      plugins: ['link', 'paste', 'table'],
      skin_url: '/assets/skins/lightgray',
      setup: editor => {
        this.editor = editor;
        
        editor.on('keyup', () => {
          this.editorKeyup.emit(editor.getContent());
        });
      },
      init_instance_callback: (editor: any) => {
        editor && this.initialContent && this.editor.setContent(this.initialContent)
      },
      height: '320',
    });
  }
  public setContent(content){
    this.editor.setContent(content);
  }
  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
}
