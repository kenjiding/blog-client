/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "blog-clients",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
      providers: {
        aws: {
          region: "us-east-1",
        },
      },
    };
  },
  async run() {
    const blogOrigin = {
      // The domain of the new origin
      domainName: "nobjfpjrx7.execute-api.us-east-1.amazonaws.com",
      originId: "blogBackEndServerOrigin",
      originPath: "/production",
      customOriginConfig: {
        httpPort: 80,
        httpsPort: 443,
        originSslProtocols: ["TLSv1.2"],
        // If HTTPS is supported
        originProtocolPolicy: "https-only",
      },
    };

    const cacheBehavior = {
      // The path to forward to the new origin
      pathPattern: "/api/*",
      targetOriginId: blogOrigin.originId,
      viewerProtocolPolicy: "redirect-to-https",
      allowedMethods: ["GET", "HEAD", "OPTIONS", "PUT", "POST", "PATCH", "DELETE"],
      cachedMethods: ["GET", "HEAD"],
      forwardedValues: {
        queryString: true,
        cookies: {
          forward: "all",
        },
      },
    };
    new sst.aws.Nextjs("MyWeb", {
      domain: {
        name: "www.kenjiding.com",
        dns: false,
        cert: "arn:aws:acm:us-east-1:961341522922:certificate/e50cd324-6bf4-4515-b5d2-7ba9d03a7bf1"
      },
      transform: {
        cdn: (options: sst.aws.CdnArgs) => {
          options.origins = $resolve(options.origins).apply(val => [...val, blogOrigin]);

          options.orderedCacheBehaviors = $resolve(
            options.orderedCacheBehaviors || []
          ).apply(val => [...val, cacheBehavior]);
        },
      },
    });
  },
});
