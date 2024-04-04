---
title: Monitoring Guide
description: A guide to the most important metrics to monitor for resiliance.
---

## Guidelines for usage

The USE method tells you how happy your machines are, the RED method tells you how happy your users are.
USE reports on causes of issues.
RED reports on user experience and is more likely to report symptoms of problems.
The best practice of alerting is to alert on symptoms rather than causes, so alerting should be done on RED dashboards.

## USE method

USE stands for:

Utilization - Percent time the resource is busy, such as node CPU usage
Saturation - Amount of work a resource has to do, often queue length or node load
Errors - Count of error events
This method is best for hardware resources in infrastructure, such as CPU, memory, and network devices. For more information, refer to The USE Method.

## RED method

RED stands for:

Rate - Requests per second
Errors - Number of requests that are failing
Duration - Amount of time these requests take, distribution of latency measurements
This method is most applicable to services, especially a microservices environment. For each of your services, instrument the code to expose these metrics for each component. RED dashboards are good for alerting and SLAs. A well-designed RED dashboard is a proxy for user experience.

For more information, refer to Tom Wilkie’s blog post The RED method: How to instrument your services.

## The Four Golden Signals

According to the Google SRE handbook, if you can only measure four metrics of your user-facing system, focus on these four.

This method is similar to the RED method, but it includes saturation.

Latency - Time taken to serve a request
Traffic - How much demand is placed on your system
Errors - Rate of requests that are failing
Saturation - How “full” your system is
Here’s an example from Grafana Play.

node_modules size comparison between different versions
If you install a client in a fresh workspace and check the size of the package inside node_modules, you will see the disk-usage reduction in v3.36.1.

For example, installing @aws-sdk/client-sts@3.33.0 creates a node_modules with size of 8.9 MB. The client-sts is of size 1.4 MB and contains 115 files with 10054 lines of code.

$ npm install @aws-sdk/client-sts@3.33.0 --save-exact
...

$ du -sh --apparent-size node_modules
8.9M    node_modules

$ du -sh --apparent-size node_modules/@aws-sdk/client-sts
1.4M    node_modules/@aws-sdk/client-sts

$ npx cloc node_modules/@aws-sdk/client-sts
     163 text files.
     160 unique files.
      48 files ignored
-------------------------------------------------------------------------------

Language                     files          blank        comment           code
-------------------------------------------------------------------------------

JavaScript                      45              0           1948           4674
TypeScript                      64            321           7506           4295
Markdown                         2           1679              0            825
JSON                             4              0              0            260
-------------------------------------------------------------------------------

SUM:                           115           2000           9454          10054
-------------------------------------------------------------------------------

The version @aws-sdk/client-sts@3.36.1 creates a node_modules with size of 5.7 MB. The client-sts is of size 603 KB and contains 85 files with 6585 lines of code.

$ npm install @aws-sdk/client-sts@3.36.1 --save-exact
...

$ du -sh --apparent-size node_modules
5.7M    node_modules

$ du -sh --apparent-size node_modules/@aws-sdk/client-sts
603K    node_modules/@aws-sdk/client-sts

$ npx cloc node_modules/@aws-sdk/client-sts
      88 text files.
      86 unique files.
       3 files ignored
-------------------------------------------------------------------------------

Language                     files          blank        comment           code
-------------------------------------------------------------------------------

JavaScript                      40              0              0           4383
TypeScript                      42            185           2481           1236
Markdown                         2           1711              0            840
JSON                             1              0              0            126
-------------------------------------------------------------------------------

SUM:                            85           1896           2481           6585
-------------------------------------------------------------------------------

How did we do it?
We created a copy of the client-s3 source code in trivikr/temp-client-s3. This allowed us to move fast, quickly implement and test ideas, and quantify the publish/install size reductions. We went through each file being published to npm in the client-s3 package and asked ourselves what role it plays. We brainstormed ideas and documented them in GitHub issues. Then, we implemented those ideas in descending order of return on investment.

We released each version of @trivikr-test/client-s3 with a specific change and documented the metrics from npm publish. We tested the debugging experience in trivikr/debug-temp-client-s3, and verified functionality in Node.js, browser and react-native environments in aws-samples/aws-sdk-js-tests#103.

We shared details about these improvements across multiple JavaScript interest channels including Github, Twitter, and even internal Slack rooms to get early feedback from the community.

We received overall positive feedback from developers:

Announcement of the AWS SDK for JavaScript team working on reducing install size of v3 on internal javascript interest slack channelComment from GitHub user Tim Kye affirming that removing source code reduces publish size.Comment from GitHub user Charlie Fish on experiments to reduce install/publish size look great.Screenshot of Twitter direct messages with AWS Serverless Hero Michael Hart discussing reduced install size

The key learnings are:

Provide developers with experimental artifacts to play with.
Ask specific questions to get responses.
Iterate on their feedback!
What did we change?
Once we quantified npm publish numbers for changes, we shortlisted the four best improvements to implement in v3:

We removed comments from transpiled *.js files.
We removed comments from downleveled*.d.ts files.
We removed TypeScript source code.
We removed source map files.
The v3 SDK is written in TypeScript programming language. TypeScript extends JavaScript by adding types, and saves you time catching errors and providing fixes before you run your code. We’ve covered in detail why we chose TypeScript in the blog post on first-class TypeScript support.

We removed comments from transpiled *.js files
We transpile TypeScript code to JavaScript in commonjs target for Node.js and es5 target for browser. We also ship types as a distribution in a different folder.

To assist customers, the services ship with extensive documentation for service and operations. We add this documentation in JSDoc comments. In our TSConfig setup, we shipped redundant comments in every distribution.

The JSDoc comments appear when you hover over Symbols in your code. In the below example, you see JSDoc for DynamoDB when hovering over the import.

Screenshot showing JSDoc comments for DynamoDB import on hover in a tooltip in VSCode editor.

This JSDoc is from *.d.ts files. We removed the redundant comments from transpiled*.js files and it led to ~6% reduction in unpacked publish size.

$ pwd
/home/trivikr/workspace/aws-sdk-js-v3/clients/client-sts

# Before the change

$ du -sh --apparent-size dist/cjs | cut -f1
301K

$ npx cloc dist/cjs
...
Language                     files          blank        comment           code
-------------------------------------------------------------------------------

JavaScript                      22              0            974           2328
...

# After the change

$ du -sh --apparent-size dist/cjs | cut -f1
239K

$ npx cloc dist/cjs
...
Language                     files          blank        comment           code
-------------------------------------------------------------------------------

JavaScript                      22              0              0           1354
...
We removed comments from downleveled *.d.ts files
To support customers who use older versions of TypeScript, we downlevel types using downlevel-dts which converts code with new TypeScript features into code that uses equivalent old features. This feature adds duplicate comments in downleveled types which increases publish size.

We removed comments from downleveled *.d.ts files which led to ~10% reduction in unpacked publish size.

$ pwd
/home/trivikr/workspace/aws-sdk-js-v3/clients/client-sts

# Before the change

$ du -sh --apparent-size dist-types | cut -f1
742K

$ npx cloc dist-types
...
Language                     files          blank        comment           code
-------------------------------------------------------------------------------

TypeScript                      59              0           4962           1813
...

# After the change

$ du -sh --apparent-size dist-types | cut -f1
396K

$ npx cloc dist-types
...
Language                     files          blank        comment           code
-------------------------------------------------------------------------------

TypeScript                      59            185           2481           1813
...
As a consequence, customers using versions of TypeScript older than 4.0 will not see JSDoc comments in their IDE although the downleveled types will work. We went ahead with this change to encourage customers to switch to TypeScript 4.0+ which was released in August 2020.

If you are using TypeScript <4.0, the JSDoc comments will appear for SDK versions < 3.36.0.

We removed TypeScript source code
The authors of JavaScript libraries decide the language to write a library in based on variety of reasons. For example, we use TypeScript for v3 for reasons explained in the blog post on first-class TypeScript support. Other maintainers may choose a different language for writing their library: JavaScript, ReScript, PureScript, ClosureScript, CoffeeScript, Reason, Elm, Flow, etc. The consumer of their library does not have to know the language a library is written in. At the end, the engine processes JavaScript code.

To provide first-class TypeScript support, a library needs to ship types. If a library is not written in TypeScript, they either manually write types, or use TypeScript to generate type declarations.

We asked the question on Twitter if maintainers ship the source code in npm packages. Here is a quote from one of the replies: “Shipping source code is going against the spirit of module definition”.

Response from Twitter user Harshal Patil on how shipping source code is going against the spirit of module definition.

We removed the source code from our published packages along with other dev/test configurations, which led to ~28% reduction in unpacked publish size.

$ pwd
/home/trivikr/workspace/aws-sdk-js-v3/clients/client-sts

# Before the change

$ npm pack --dry-run
...
package size:  141.7 kB
unpacked size: 1.2 MB
total files:   177
...

# After the change

$ npm pack --dry-run
...
package size:  99.9 kB
unpacked size: 783.8 kB
total files:   88
...
We removed source map files
Source map files allow debuggers and other tools to display the original TypeScript source code when actually working with the emitted JavaScript files. In TypeScript, the source map files are emitted as .js.map (or .jsx.map) files next to the corresponding .js output file. TypeScript also allows embedding the source map content in the .js files. TypeScript also allows for inclusion of the original content of the .ts file as an embedded string in the source map.

The source map files are helpful with debugging the application code. They are not useful for libraries and dependencies who have to meet strict publish/install size restrictions. A better solution is to release debug versions of the SDK. If you have feedback about source maps, or would like to explain your debugging or other use cases, please comment on GitHub issue aws/aws-sdk-js-v3/#2895.

In the TypeScript publishing guide, there is no recommendation on publishing source maps. In TSConfig, the settings for sourceMap, inlineSourceMap and inlineSources are turned off by default.

We removed sourceMaps from v3, which led to ~20% reduction in unpacked publish size.

$ pwd
/home/trivikr/workspace/aws-sdk-js-v3/clients/client-sts

# Before the change

$ du -sh --apparent-size dist-cjs | cut -f1
246K

$ npx cloc dist-cjs
...
      42 text files.
      42 unique files.
      21 files ignored.
...

# After the change

$ du -sh --apparent-size dist-cjs | cut -f1
174K

$ npx cloc dist-cjs
...
      21 text files.
      21 unique files.
       0 files ignored.
...

## Further reading

- Read [about how-to guides](https://grafana.com/docs/grafana/latest/dashboards/build-dashboards/best-practices/#common-observability-strategies) in the Diátaxis framework
