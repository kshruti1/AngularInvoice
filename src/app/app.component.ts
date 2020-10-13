import { Component } from '@angular/core';
import xml2js from 'xml2js';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularInvoice';
  public xmlItems: any;
  constructor(private _http: HttpClient) {  }
  loadXML(mesg) {
    alert(mesg.name);
    this._http.get('/assets/'+ mesg.name,
      {
        headers: new HttpHeaders()
          .set('Content-Type', 'text/xml')
          .append('Access-Control-Allow-Methods', 'GET')
          .append('Access-Control-Allow-Origin', '*')
          .append('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Access-Control-Allow-Origin, Access-Control-Request-Method'),
        responseType: 'text'
      })
      .subscribe((data) => {
        this.parseXML(data)
          .then((data) => {
            this.xmlItems = data;
          });
      });
  }
  parseXML(data) {
    return new Promise(resolve => {
      var k: string | number,
        arr = [],
        parser = new xml2js.Parser(
          {
            trim: true,
            explicitArray: true
          });
      parser.parseString(data, function (err, result) {
        var obj = result.Employee;
        for (k in obj.emp) {
          var item = obj.emp[k];
          arr.push({
            id: item.id[0],
            name: item.name[0],
            gender: item.gender[0],
            mobile: item.mobile[0]
          });
        }
        resolve(arr);
      });
    });
  }

  clickFunction(){
        ///<!--this.loadXML();-->
      
  }
  handleClick() {
  document.getElementById('upload-file').click();
}

addAttachment(fileInput: any) {
  const fileReaded = fileInput.target.files[0];
  alert(fileReaded.name);
  this.loadXML(fileReaded);
  //  handle the rest 
}
}