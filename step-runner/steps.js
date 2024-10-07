import GlobalVariables from "../utils/GlobalVariables";
import { config } from "../wdio.conf";
import LoginTest from "../test-steps/LoginTest";

const locale = config.locale;
const platform = browser.capabilities.platformName.toLowerCase();
const customLogLevel = config.customLogLevel;
GlobalVariables.setLocale(locale);
GlobalVariables.setPlatform(platform);
GlobalVariables.setCustomLogLevel(customLogLevel);

const loginTest = new LoginTest();
loginTest.defineBaseSteps();
loginTest.defineLoginSteps();
