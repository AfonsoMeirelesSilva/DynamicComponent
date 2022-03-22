import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  @Input()
  isLoading = false;
  
  private _loading: boolean = false;

  constructor(private changeDetec: ChangeDetectorRef) { }

  ngOnInit() {
  }

  public isloading(): boolean {
    return this._loading;
  }

  public trigger(): void {
    this._loading = true;
    this.changeDetec.detectChanges();
  }

  public stop(): void {
    this._loading = false;
  }


}
