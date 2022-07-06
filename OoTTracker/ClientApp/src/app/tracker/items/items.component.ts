import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  dekuSticks = 'assets/icons/01-DekuStick10.png';
  dekuNuts = 'assets/icons/02-DekuNut20.png';
  bombs = 'assets/icons/03-Bombs-BW.png';
  bow = 'assets/icons/04-Bow-BW.png';
  fireArrows = 'assets/icons/05-FireArrows-BW.png';
  dinsFire = 'assets/icons/06-DinsFire-BW.png';
  slingshot = 'assets/icons/07-Slingshot-BW.png';
  ocarina = 'assets/icons/08-FairyOcarina.png';
  bombchus = 'assets/icons/09-Bombchus-BW.png';
  hookshot = 'assets/icons/10-Hookshot-BW.png';
  iceArrows = 'assets/icons/11-IceArrows-BW.png';
  faroresWind = 'assets/icons/12-FaroresWind-BW.png';
  boomerang = 'assets/icons/13-Boomerang-BW.png';
  lensOfTruth = 'assets/icons/14-LensOfTruth-BW.png';
  magicBeans = 'assets/icons/15-MagicBeans-BW.png';
  megatonHammer = 'assets/icons/16-MegatonHammer-BW.png';
  lightArrows = 'assets/icons/17-LightArrows-BW.png';
  nayrusLove = 'assets/icons/18-NayrusLove-BW.png';
  rutosLetter = 'assets/icons/19-RutosLetter-BW.png';
  bottle1 = 'assets/icons/20-22-Bottle-BW.png';
  bottle2 = 'assets/icons/20-22-Bottle-BW.png';
  bottle3 = 'assets/icons/20-22-Bottle-BW.png';
  mask = 'assets/icons/23-ZeldasLetter.png';
  tradingQuest = 'assets/icons/24-SoldOut.png';

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleDekuSticks() {
    if (this.dekuSticks == 'assets/icons/01-DekuStick-BW.png') {
      this.dekuSticks = 'assets/icons/01-DekuStick10.png';
    } else if (this.dekuSticks == 'assets/icons/01-DekuStick10.png') {
      this.dekuSticks = 'assets/icons/01-DekuStick20.png';
    } else if (this.dekuSticks == 'assets/icons/01-DekuStick20.png') {
      this.dekuSticks = 'assets/icons/01-DekuStick30.png';
    } else {
      this.dekuSticks = 'assets/icons/01-DekuStick-BW.png';
    }
  }

  toggleDekuNuts() {
    if (this.dekuNuts == 'assets/icons/02-DekuNut-BW.png') {
      this.dekuNuts = 'assets/icons/02-DekuNut20.png';
    } else if (this.dekuNuts == 'assets/icons/02-DekuNut20.png') {
      this.dekuNuts = 'assets/icons/02-DekuNut30.png';
    } else if (this.dekuNuts == 'assets/icons/02-DekuNut30.png') {
      this.dekuNuts = 'assets/icons/02-DekuNut40.png';
    } else {
      this.dekuNuts = 'assets/icons/02-DekuNut-BW.png';
    }
  }

  toggleBombs() {
    if (this.bombs == 'assets/icons/03-Bombs-BW.png') {
      this.bombs = 'assets/icons/03-Bombs20.png';
    } else if (this.bombs == 'assets/icons/03-Bombs20.png') {
      this.bombs = 'assets/icons/03-Bombs30.png';
    } else if (this.bombs == 'assets/icons/03-Bombs30.png') {
      this.bombs = 'assets/icons/03-Bombs40.png';
    } else {
      this.bombs = 'assets/icons/03-Bombs-BW.png';
    }
  }

  toggleBow() {
    if (this.bow == 'assets/icons/04-Bow-BW.png') {
      this.bow = 'assets/icons/04-Bow30.png';
    } else if (this.bow == 'assets/icons/04-Bow30.png') {
      this.bow = 'assets/icons/04-Bow40.png';
    } else if (this.bow == 'assets/icons/04-Bow40.png') {
      this.bow = 'assets/icons/04-Bow50.png';
    } else {
      this.bow = 'assets/icons/04-Bow-BW.png';
    }
  }

  toggleFireArrows() {
    if (this.fireArrows == 'assets/icons/05-FireArrows-BW.png') {
      this.fireArrows = 'assets/icons/05-FireArrows.png';
    } else {
      this.fireArrows = 'assets/icons/05-FireArrows-BW.png';
    }
  }

  toggleDinsFire() {
    if (this.dinsFire == 'assets/icons/06-DinsFire-BW.png') {
      this.dinsFire = 'assets/icons/06-DinsFire.png';
    } else {
      this.dinsFire = 'assets/icons/06-DinsFire-BW.png';
    }
  }

  toggleSlingshot() {
    if (this.slingshot == 'assets/icons/07-Slingshot-BW.png') {
      this.slingshot = 'assets/icons/07-Slingshot30.png';
    } else if (this.slingshot == 'assets/icons/07-Slingshot30.png') {
      this.slingshot = 'assets/icons/07-Slingshot40.png';
    } else if (this.slingshot == 'assets/icons/07-Slingshot40.png') {
      this.slingshot = 'assets/icons/07-Slingshot50.png';
    } else {
      this.slingshot = 'assets/icons/07-Slingshot-BW.png';
    }
  }

  toggleOcarina() {
    if (this.ocarina == 'assets/icons/08-FairyOcarina-BW.png') {
      this.ocarina = 'assets/icons/08-FairyOcarina.png';
    } else if (this.ocarina == 'assets/icons/08-FairyOcarina.png') {
      this.ocarina = 'assets/icons/08-OcarinaOfTime.png';
    } else {
      this.ocarina = 'assets/icons/08-FairyOcarina-BW.png';
    }
  }

  toggleBombchus() {
    if (this.bombchus == 'assets/icons/09-Bombchus-BW.png') {
      this.bombchus = 'assets/icons/09-Bombchus.png';
    } else {
      this.bombchus = 'assets/icons/09-Bombchus-BW.png';
    }
  }

  toggleHookshot() {
    if (this.hookshot == 'assets/icons/10-Hookshot-BW.png') {
      this.hookshot = 'assets/icons/10-Hookshot.png';
    } else if (this.hookshot == 'assets/icons/10-Hookshot.png') {
      this.hookshot = 'assets/icons/10-Longshot.png';
    } else {
      this.hookshot = 'assets/icons/10-Hookshot-BW.png';
    }
  }

  toggleIceArrows() {
    if (this.iceArrows == 'assets/icons/11-IceArrows-BW.png') {
      this.iceArrows = 'assets/icons/11-IceArrows.png';
    } else {
      this.iceArrows = 'assets/icons/11-IceArrows-BW.png';
    }
  }

  toggleFaroresWind() {
    if (this.faroresWind == 'assets/icons/12-FaroresWind-BW.png') {
      this.faroresWind = 'assets/icons/12-FaroresWind.png';
    } else {
      this.faroresWind = 'assets/icons/12-FaroresWind-BW.png';
    }

  }

  toggleBoomerang() {
    if (this.boomerang == 'assets/icons/13-Boomerang-BW.png') {
      this.boomerang = 'assets/icons/13-Boomerang.png';
    } else {
      this.boomerang = 'assets/icons/13-Boomerang-BW.png';
    }
  }

  toggleLensOfTruth() {
    if (this.lensOfTruth == 'assets/icons/14-LensOfTruth-BW.png') {
      this.lensOfTruth = 'assets/icons/14-LensOfTruth.png';
    } else {
      this.lensOfTruth = 'assets/icons/14-LensOfTruth-BW.png';
    }
  }

  toggleMagicBeans() {
    if (this.magicBeans == 'assets/icons/15-MagicBeans-BW.png') {
      this.magicBeans = 'assets/icons/15-MagicBeans.png';
    } else {
      this.magicBeans = 'assets/icons/15-MagicBeans-BW.png';
    }
  }

  toggleMegatonHammer() {
    if (this.megatonHammer == 'assets/icons/16-MegatonHammer-BW.png') {
      this.megatonHammer = 'assets/icons/16-MegatonHammer.png';
    } else {
      this.megatonHammer = 'assets/icons/16-MegatonHammer-BW.png';
    }
  }

  toggleLightArrows() {
    if (this.lightArrows == 'assets/icons/17-LightArrows-BW.png') {
      this.lightArrows = 'assets/icons/17-LightArrows.png';
    } else {
      this.lightArrows = 'assets/icons/17-LightArrows-BW.png';
    }
  }

  toggleNayrusLove() {
    if (this.nayrusLove == 'assets/icons/18-NayrusLove-BW.png') {
      this.nayrusLove = 'assets/icons/18-NayrusLove.png';
    } else {
      this.nayrusLove = 'assets/icons/18-NayrusLove-BW.png';
    }
  }

  toggleRutosLetter() {
    if (this.rutosLetter == 'assets/icons/19-RutosLetter-BW.png') {
      this.rutosLetter = 'assets/icons/19-RutosLetter.png';
    } else {
      this.rutosLetter = 'assets/icons/19-RutosLetter-BW.png';
    }
  }

  toggleBottle(bottleNum: number) {
    let bottle: string;

    switch (bottleNum) {
      case 1:
        bottle = this.bottle1;
        break;
      case 2:
        bottle = this.bottle2;
        break;
      case 3:
        bottle = this.bottle3;
        break;
      default:
        bottle = '';
        break;
    }

    if (bottle == 'assets/icons/20-22-Bottle-BW.png') {
      bottle = 'assets/icons/20-22-Bottle.png';
    } else {
      bottle = 'assets/icons/20-22-Bottle-BW.png';
    }

    switch (bottleNum) {
      case 1:
        this.bottle1 = bottle;
        break;
      case 2:
        this.bottle2 = bottle;
        break;
      case 3:
        this.bottle3 = bottle;
        break;
      default:
        bottle = '';
        break;
    }
  }

  toggleMask() {
    if (this.mask == 'assets/icons/23-ZeldasLetter.png') {
      this.mask = 'assets/icons/23-KeatonMask.png';
    } else if (this.mask == 'assets/icons/23-KeatonMask.png') {
      this.mask = 'assets/icons/23-SkullMask.png';
    } else {
      this.mask = 'assets/icons/23-ZeldasLetter.png';
    }
  }

  toggleTradingQuest() {
    if (this.tradingQuest == 'assets/icons/24-SoldOut.png') {
      this.tradingQuest = 'assets/icons/24-Prescription.png';
    } else if (this.tradingQuest == 'assets/icons/24-Prescription.png') {
      this.tradingQuest = 'assets/icons/24-EyeballFrog.png';
    } else if (this.tradingQuest == 'assets/icons/24-EyeballFrog.png') {
      this.tradingQuest = 'assets/icons/24-Eyedrops.png';
    } else if(this.tradingQuest == 'assets/icons/24-Eyedrops.png') {
      this.tradingQuest = 'assets/icons/24-ClaimCheck.png';
    } else {
      this.tradingQuest = 'assets/icons/24-SoldOut.png';
    }
  }
}
