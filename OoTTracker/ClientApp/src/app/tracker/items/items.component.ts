import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  item: string = "item";
  
  dekuSticks = ['assets/icons/01-DekuStick10.png',
    'assets/icons/01-DekuStick20.png',
    'assets/icons/01-DekuStick30.png',
    'assets/icons/01-DekuStick-BW.png'];
  dekuNuts = ['assets/icons/02-DekuNut20.png',
    'assets/icons/02-DekuNut30.png',
    'assets/icons/02-DekuNut40.png',
    'assets/icons/02-DekuNut-BW.png'];
  bombs = ['assets/icons/03-Bombs-BW.png',
    'assets/icons/03-Bombs20.png',
    'assets/icons/03-Bombs30.png',
    'assets/icons/03-Bombs40.png'];
  bow = ['assets/icons/04-Bow-BW.png',
    'assets/icons/04-Bow30.png',
    'assets/icons/04-Bow40.png',
    'assets/icons/04-Bow50.png'];
  fireArrows = ['assets/icons/05-FireArrows-BW.png',
    'assets/icons/05-FireArrows.png'];
  dinsFire = ['assets/icons/06-DinsFire-BW.png',
    'assets/icons/06-DinsFire.png'];

  slingshot = ['assets/icons/07-Slingshot-BW.png',
    'assets/icons/07-Slingshot30.png',
    'assets/icons/07-Slingshot40.png',
    'assets/icons/07-Slingshot50.png'];
  ocarina = ['assets/icons/08-FairyOcarina-BW.png',
    'assets/icons/08-FairyOcarina.png',
    'assets/icons/08-OcarinaOfTime.png'];
  bombchus = ['assets/icons/09-Bombchus-BW.png',
    'assets/icons/09-Bombchus.png'];
  hookshot = ['assets/icons/10-Hookshot-BW.png',
    'assets/icons/10-Hookshot.png',
    'assets/icons/10-Longshot.png'];
  iceArrows = ['assets/icons/11-IceArrows-BW.png',
    'assets/icons/11-IceArrows.png'];
  faroresWind = ['assets/icons/12-FaroresWind-BW.png',
    'assets/icons/12-FaroresWind.png'];

  boomerang = ['assets/icons/13-Boomerang-BW.png',
    'assets/icons/13-Boomerang.png'];
  lensOfTruth = ['assets/icons/14-LensOfTruth-BW.png',
    'assets/icons/14-LensOfTruth.png'];
  magicBeans = ['assets/icons/15-MagicBeans-BW.png',
    'assets/icons/15-MagicBeans.png'];
  megatonHammer = ['assets/icons/16-MegatonHammer-BW.png',
    'assets/icons/16-MegatonHammer.png'];
  lightArrows = ['assets/icons/17-LightArrows-BW.png',
    'assets/icons/17-LightArrows.png'];
  nayrusLove = ['assets/icons/18-NayrusLove-BW.png',
    'assets/icons/18-NayrusLove.png'];

  rutosLetter = ['assets/icons/19-RutosLetter-BW.png',
    'assets/icons/19-RutosLetter.png'];
  bottle = ['assets/icons/20-22-Bottle-BW.png',
    'assets/icons/20-22-Bottle.png'];
  mask = ['assets/icons/23-ZeldasLetter.png',
    'assets/icons/23-KeatonMask.png',
    'assets/icons/23-SkullMask.png'];
  tradingQuest = ['assets/icons/24-SoldOut.png',
    'assets/icons/24-Prescription.png',
    'assets/icons/24-EyeballFrog.png',
    'assets/icons/24-Eyedrops.png',
    'assets/icons/24-ClaimCheck.png'];

  constructor() {
  }

  ngOnInit(): void {
  }
}
