const authNavigations = {
  AUTH_HOME: 'AuthHome',
  LOGIN: 'Login',
  SIGNUP: 'signup',
} as const;

const mapNavigations = {
  MAP_HOME: 'MapHOME',
} as const;

const mainNavigations = {
  HOME: 'Home',
  FEED: 'Feed',
  CALENDAR: 'Calendar',
} as const;

export {authNavigations, mapNavigations, mainNavigations};
