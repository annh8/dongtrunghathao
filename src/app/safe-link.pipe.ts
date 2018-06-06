import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeLink'
})
export class SafeLinkPipe implements PipeTransform {

  constructor(private sanitizer:DomSanitizer){}

  transform(style) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(style);
    // return this.sanitizer.bypassSecurityTrustXxx(style); - see docs
  }

}
