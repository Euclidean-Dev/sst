/// <reference path="./.sst/src/global.d.ts" />

export default $config({
  app(input) {
    return {
      name: "test",
      removalPolicy: "remove",
      providers: {
        aws: {
          profile: "sst-dev",
        },
      },
    };
  },
  async run() {
    const item = new sst.Bucket("Item2", {
      nodes: {
        bucket: {
          bucket: "foo",
        },
      },
    });
    // throw new Error("lol");

    return {
      bucket: item.nodes.bucket.bucket,
    };
  },
});