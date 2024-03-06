import type { SSTConfig } from "sst";
import { SvelteKitSite } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "partyapp-job-description-generator-customized",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new SvelteKitSite(stack, "site", {
        permissions: ["bedrock"],
        timeout: "30 seconds",
        customDomain: {
          domainName: "jobdescription-2.ssennett.net",
          hostedZone: "ssennett.net",
        },
      });
      stack.addOutputs({
        url: site.url,
      });
    });
  },
} satisfies SSTConfig;
