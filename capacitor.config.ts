import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.planyourtrip.app',
  appName: 'plan-your-tour',
  webDir: 'build',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
        launchShowDuration : 2000
    }
  }
};

export default config;
