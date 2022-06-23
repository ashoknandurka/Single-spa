export function navbar(location) {
    return true; // The navbar is always active
  }
  
  export function home(location) {
    return location.pathname === "" ||
            location.pathname === "/" ||
            location.pathname.startsWith('/home');
  }
  
  export function header(location) {
    return location.pathname === "/header" ||
    location.pathname.startsWith('/header');
  }

  export function test(location) {
    return location.pathname === "/test" ||
            location.pathname.startsWith('/test');
  }