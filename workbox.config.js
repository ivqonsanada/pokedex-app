module.exports = {
  GenerateSW: (options) => {
    // override GenerateSW config here
    // e.g. options.skipWaiting = true;
    return options;
  },
  InjectManifest: (options) => {
    // override InjectManifest config here
    // e.g. options.maximumFileSizeToCacheInBytes = 10 * 1024 * 1024;
    options.additionalManifestEntries = [{ url: "/", revision: Date.now().toString() }];
    return options;
  },
};
