
import { Injectable } from '@angular/core';
import { Cordova, Plugin, IonicNativePlugin } from '@ionic-native/core';

@Plugin(
  {
    pluginName: "MathCalcy",
    plugin: "cordova-plugin-mathcalcy",
    pluginRef: "MathCalcy",
    platforms: ["Android", "iOS"],
    repo: "https://github.com/ashwindmk/cordova_plugin_mathcalcy.git"
  }
)

@Injectable()
export class MathProvider extends IonicNativePlugin {

  @Cordova()
  add(arg1: any): Promise<any> {
    return;
  }

}
