import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.planyourtrip.app',
  appName: 'plan-your-tour',
  webDir: 'build',
  bundledWebRuntime: false,
  // server:{
  // url:'http://172.17.7.9:8100',
  // cleartext: true
  // },
  plugins: {
    SplashScreen: {
        launchShowDuration : 2000
    }
  }
};

export default config;
