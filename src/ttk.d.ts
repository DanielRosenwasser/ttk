declare module 'ttk' {
  type factoryFn = (options: Object) => templateFn;
  type templateFn = (strings:string[], keys?:any[]) => renderFn;
  type renderFn = (context: Object) => string;
  type middlewareFn = (value: string) => string;
  type valueMiddlewareFns = {
    sqlValueWrapper:middlewareFn
  }
  type renderMiddlewareFns = {
    multilineStringTrim:middlewareFn
  }
  
  interface ttk {
    factory:factoryFn;
    template:templateFn;
    render:renderFn;
    middleware: { value:valueMiddlewareFns, render: renderMiddlewareFns }
  }

  var ttk:ttk;

  export = ttk;
}