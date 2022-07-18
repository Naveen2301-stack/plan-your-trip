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
    },
    GoogleAuth: {
      scopes: ["profile","email"],
  
      serverClientId: "203534877204-j3j109mvpnqthnmol6m7cphual6tum2i.apps.googleusercontent.com",
  
      forceCodeForRefreshToken: true,
    },
  }
};

export default config;
