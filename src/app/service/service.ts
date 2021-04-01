import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn:"root"
}) 
export class Services {
  projectPath: string = "";

  constructor(private http: HttpClient
   ) {}

  getData() {
      this.projectPath = "https://api.jsonbin.io/b/604f1c137ea6546cf3ddf46e";
      return this.http.get(this.projectPath);
  }




}
