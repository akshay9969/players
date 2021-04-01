import { Component } from '@angular/core';
import { Services } from './service/service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Services]
})

export class AppComponent {
  title = 'players-list';
  data = {
    "LSOG": 0,
    "LSRC": 0,
    "LSYC": 0,
    "LSGC": 0,
    "LSPC": 0,
    "LSPE": 0,
    "LSPM": 0,
    "LSPS": 0,
    "LSSaves": 0,
    "LSCS": 0,
    "LSAssist": 0,
    "LSGS": 0,
    "LSMinsPlyd": 0,
    "UpComingMatchesList": [
      {
        "VsTLoc": "A",
        "MDate": "2/10/2019 12:00:00 AM",
        "VsCCode": "OLY",
        "VsTSCode": "Olympiacos",
        "VsTID": "2610",
        "TLoc": "H",
        "CCode": "JUV",
        "TSCode": "Juventus",
        "TID": "50139"
      }
    ],
    "SelCapPer": "",
    "SelOutPer": "",
    "SelInPer": "",
    "IsInFinalSquad": "0",
    "Injury": "",
    "IsPlayed": 0,
    "Trained": "In contention to start next game",
    "MatchAtd": "Took a full part",
    "PStatusdrp": null,
    "PStatus": "",
    "CurGDNo": 0,
    "CurGDID": 0,
    "CurGDPts": null,
    "AwayGoal": "0",
    "PM": 0,
    "Saves": 0,
    "PE": 0,
    "PC": 0,
    "PS": 0,
    "OG": 0,
    "RC": 0,
    "YC": 0,
    "GC": 0,
    "CS": 0,
    "Assist": 0,
    "PenaltyGS": 0,
    "GS": 0,
    "MinsPlyd": 0,
    "TotPts": 0,
    "GDID": "2",
    "SelPer": "0",
    "AvbStatus": 1,
    "IsActive": 1,
    "Value": "12.0",
    "SkillDesc": "Forward",
    "Skill": 4,
    "CCode": "JUV",
    "TSCode": "Juventus",
    "TID": "50139",
    "TOfflName": "Juventus",
    "TName": "Juventus",
    "PFName": "Cristiano Ronaldo",
    "PDName": "C. Ronaldo",
    "Id": "63706",
    "IsPValueEdit": null,
    "IsValidPlayerDesc": null,
    "IsValidPlayer": 0
  }
  reqData = [{
    "name": "Team",
    "value": "team",
    "selected": false
  }, {
    "name": "Player",
    "value": "player",
    "selected": true
  }]
  playersData: any;
  timezone: string;
  selectedName: string = "player";
  name: string = "";
  teamData: any;
  isSearch: boolean = false;
  isResult: boolean = false;
  playerRes: any;
  message: string = "";
  constructor(public mainServices: Services) { }
  ngOnInit(): void {
    this.mainServices.getData().subscribe(response => {
      this.playersData = response["playerList"].sort(function (a, b) { return a.Value - b.Value });
      this.playerRes = response["playerList"].sort(function (a, b) { return a.Value - b.Value });
      this.teamData = response["teamsList"];
    });
    this.timezone = new Date().toString().match(/([-\+][0-9]+)\s/)[1];
  }
  search() {
    if (this.name.length > 3) {
      this.playersData = this.playerRes;
      if (this.selectedName == 'player') {
        this.playersData = this.playersData.filter(data => {
          if (data.PFName.toLowerCase().includes(this.name.toLowerCase())) { return data }
        })
      } else {
        this.playersData = this.playersData.filter(data => {
          if (data.TName.toLowerCase().includes(this.name.toLowerCase())) { return data }
        })
      }

      this.isSearch = true;
      this.message = (this.playersData.length < 1) ? "No Result Found" : ""
      this.playersData = (this.playersData.length > 1) ? this.playersData.sort(function (a, b) { return a.Value - b.Value }) : this.playersData

    } else {
      this.message = "The search length must be greater than 3"
    }

  }

  reset() {
    this.playersData = this.playerRes
    this.isSearch = false;
    this.message = "";
    this.selectedName = 'player'
  }

}
