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
  showcopy: boolean;
  showcopy1: boolean;
  constructor(private zone: NgZone, @Inject(WEB3) private web3: any, private Web3: Web3) { }

  currentYear = new Date().getFullYear();

  chartTitle = "";
  chartType = "PieChart";
  chartData = [
    ['Listings & Partnerships', 40],
    ['Further Development & Marketing', 15],
    ['Founders & Advisors*', 10],
    ['Presale & Public Sale', 10],
    ['Company Reserve*', 10],
    ['Constant Burns', 10],
    ['Donations & Causes', 5]
  ];

  chartColumNames = ['Distribution', 'Percentage'];
  chartOptions = {
    animation:{
      duration: 1000,
      easing: 'out',
    },
    // pieSliceText: 'label',
    backgroundColor: {
      fill: '#0b0b15',
      strokeWidth: 0
    },
    chartArea: { 
      left: 10, 
      top: 80, 
      width: '80%',
      height: '60%', 
      backgroundColor: '#0b0b15' },
    colors: ['#31C3A6', '#FFD500', '#00E9FA', '#FF00DD', '#FF9511', '#1700FF', '#BF2BBF'],
    slices: {
      0: {
        offset: 0.03
      },
      3: {
        offset: 0.08
      }
    },
    is3D: false,
    legend: { 
      position: 'right',
      maxLines: 6,
      textStyle: {
        color: '#6c737d', 
      } 
    },
    tooltip: {
      isHtml: true,
      showColorCode: true,
    },

    width: window.innerWidth*0.75,
    height: window.innerWidth*0.3,
 };

ngOnInit(): void {
  this.model.address = '0x61Ab76EDF48F7e7dB6C3FE0a1F0A779De232236B';
  this.model.addressContract = '0x3DAeCAE376Ad4FB15eAd85Fb69827C26EA01Bd0B';
  this.model.addressBNB = '0x6B337A97ad102Cf79F24A5419ac8B2117270E9d5';
  this.model.addressContractBNB = '0xd1a9b078D80dd215Da4E780cAB0fb2F29667B06d';
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
copyMessageEth() {
  const selBox = document.createElement('textarea');
  selBox.style.position = 'fixed';
  selBox.style.left = '0';
  selBox.style.top = '0';
  selBox.style.opacity = '0';
  selBox.value = this.model.address;
  document.body.appendChild(selBox);
  selBox.focus();
  selBox.select();
  document.execCommand('copy');
  document.body.removeChild(selBox);

  this.showcopy = true;
  setTimeout(() => {
    this.showcopy = false;
  }, 2000);
}
copyMessageContractAddressEth() {
  const selBox = document.createElement('textarea');
  selBox.style.position = 'fixed';
  selBox.style.left = '0';
  selBox.style.top = '0';
  selBox.style.opacity = '0';
  selBox.value = this.model.addressContract;
  document.body.appendChild(selBox);
  selBox.focus();
  selBox.select();
  document.execCommand('copy');
  document.body.removeChild(selBox);

  this.showcopy1 = true;
  setTimeout(() => {
    this.showcopy1 = false;
  }, 2000);
}
copyMessageBnb() {
  const selBox = document.createElement('textarea');
  selBox.style.position = 'fixed';
  selBox.style.left = '0';
  selBox.style.top = '0';
  selBox.style.opacity = '0';
  selBox.value = this.model.addressBNB;
  document.body.appendChild(selBox);
  selBox.focus();
  selBox.select();
  document.execCommand('copy');
  document.body.removeChild(selBox);

  this.showcopy = true;
  setTimeout(() => {
    this.showcopy = false;
  }, 2000);
}
copyMessageContractAddressBnb() {
  const selBox = document.createElement('textarea');
  selBox.style.position = 'fixed';
  selBox.style.left = '0';
  selBox.style.top = '0';
  selBox.style.opacity = '0';
  selBox.value = this.model.addressContractBNB;
  document.body.appendChild(selBox);
  selBox.focus();
  selBox.select();
  document.execCommand('copy');
  document.body.removeChild(selBox);

  this.showcopy1 = true;
  setTimeout(() => {
    this.showcopy1 = false;
  }, 2000);
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
  if (this.setnetwork == "eth") {
    if (typeof this.web3 !== 'undefined') {

      var w3js: any = new Web3(this.web3.currentProvider);
      var mythis = this;

      w3js.eth.getAccounts(async function (err, res) {
        // mythis.ethAddressList = [];
        console.log(res);

        if (res) {
          var tokenInst = await new w3js.eth.Contract(AppSettings.presale_Abi, AppSettings.ethpresale);
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
  else if (this.setnetwork == "bnb") {
    if (typeof this.web3 !== 'undefined') {

      var w3js: any = new Web3(this.web3.currentProvider);
      var mythis = this;
      w3js.eth.getAccounts(async function (err, res) {
        console.log(res);

        if (res) {
          var tokenInst = await new w3js.eth.Contract(AppSettings.presale_Abi, AppSettings.bnbpresale);
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
