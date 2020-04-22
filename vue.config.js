module.export = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "openFOLF | Real-Time Disc Golf Tracking";
      return args;
    });
  },
};
