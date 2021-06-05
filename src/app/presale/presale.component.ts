import { Component, OnInit, ElementRef, ViewChild, NgZone, Inject } from '@angular/core';
import { MetamaskProvider } from "@0xcert/ethereum-metamask-provider";
import { WEB3 } from 'src/web3';
import Web3 from 'web3';
import { AppSettings } from 'src/AppSettings';
@Component({
  selector: 'app-presale',
  templateUrl: './presale.component.html',
  styleUrls: ['./presale.component.scss']
})
export class PresaleComponent implements OnInit {
  @ViewChild('openModal') openModal: ElementRef;
  setnetwork: any;
  connected: boolean;
  model: any = {};
  constructor(private zone: NgZone, @Inject(WEB3) private web3: any, private Web3: Web3) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.openModal.nativeElement.click();
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: "smooth" });
  }
  chooseNetwork(val) {
    console.log(val);
    this.setnetwork = val;

  }

  async enableMetamask() {
    try {
      const provider = new MetamaskProvider();
      let boolean = await provider.isEnabled();
      if (!boolean) {
        let conn = await provider.enable();
        if (conn) {
          this.connected = true;
          alert('Connected')
        } else {
          alert('Please install metamask')
        }
        boolean = true;
      } else {
        alert("Already connected or install extension");
      }
    }
    catch (err) {
      alert(err.message);
    }

    //   if (typeof this.web3 !== 'undefined') {

    //     var w3js: any = new Web3(this.provideBinance);
    //     var mythis = this;
    //     w3js.eth.getAccounts(async function (err, res) {
    //       var tokenInst = await new w3js.eth.Contract(AppSettings.Camera_Abi, AppSettings.camera_token);
    //       var balance = await tokenInst.methods.allowance(res[0], AppSettings.camera_token).call();
    //       console.log("balance", balance);

    //       console.log(res);

    //     })
    // }
  }

  async launchPresale() {

    try {
      const provider = new MetamaskProvider();
      let boolean = await provider.isEnabled();
      if (!boolean) {
        let conn = await provider.enable();
        if (conn) {
          this.connected = true;
          alert('Connected')
        } else {
          alert('Please install metamask')
        }
        boolean = true;
      } else {
        alert("Already connected or install extension");
      }
    }
    catch (err) {
      alert(err.message);
    }

    console.log("val", this.model.getval);
    var amount = this.model.getval;
    if( this.setnetwork=="eth")
    {
      if (typeof this.web3 !== 'undefined') {

        var w3js: any = new Web3(this.web3.currentProvider);
        var mythis = this;
       
        w3js.eth.getAccounts(async function (err, res) {
          // mythis.ethAddressList = [];
          console.log(res);
  
          if (res) {
            var tokenInst = await new w3js.eth.Contract(AppSettings.presale_Abi, AppSettings.ethtoken);
            await tokenInst.methods.buyTokens(res[0]).send({ from: res[0], gas: '210000', gasPrice: w3js.utils.toWei('55', 'gwei'), value: w3js.utils.toWei(JSON.stringify((amount / 10000)), 'ether') });
  
          } else {
            mythis.zone.run(() => {
              let obj = {
  
                address: 'Please authorise you account to view',
  
                balance: 'Please authorise you account to view'
  
              };
              // mythis.ethAddressList.push(obj);
            });
          }
        });
      } else {
        alert('Web3 Not Supported/not autorized');
      }
    }
    else if ( this.setnetwork=="bnb")
    {
      if (typeof this.web3 !== 'undefined') {

        var w3js: any = new Web3(this.web3.currentProvider);
        var mythis = this;
        w3js.eth.getAccounts(async function (err, res) {
          console.log(res);
  
          if (res) {
            var tokenInst = await new w3js.eth.Contract(AppSettings.presale_Abi, AppSettings.bnbtoken);
            await tokenInst.methods.buyTokens(res[0]).send({ from: res[0], gas: '210000', gasPrice: w3js.utils.toWei('55', 'gwei'), value: w3js.utils.toWei(JSON.stringify((amount / 10000)), 'ether') });
  
          } else {
            mythis.zone.run(() => {
              let obj = {
  
                address: 'Please authorise you account to view',
  
                balance: 'Please authorise you account to view'
  
              };
              // mythis.ethAddressList.push(obj);
            });
          }
        });
      } else {
        alert('Web3 Not Supported/not autorized');
      }
    }
  }
}
