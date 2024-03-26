---
title: AWS sqs snippets
description: cli commands for sqs
---

## Create a FIFO queue

```shell
aws --endpoint http://localhost:9324 sqs create-queue --queue-name queue-name.fifo --attributes FifoQueue=true,MessageRetentionPeriod=1209600,ContentBasedDeduplication=false
```

* MessageRetentionPeriod is set to 1209600 seconds which equals to 14 days

# Send a message (file) to queue

```shell
aws --endpoint-url http://localhost:19324 sqs send-message --queue-url http://localhost:19324/queue/queue-name --message-body file://./message.json
```

# Send a message to FIFO queue

```shell
aws --endpoint http://localhost:9324 sqs send-message --queue-url http://localhost:9324/queue/queue-name.fifo --message-body "body" --message-group-id "messageGroupId" --message-deduplication-id "messageDeduplicationId"
```

# Send batch of messages to FIFO queue

```shell
aws --endpoint http://localhost:9324 sqs send-message-batch --queue-url http://localhost:9324/queue/queue-name.fifo --entries Id="I",MessageBody="I",MessageGroupId="messageGroupId",MessageDeduplicationId="I" Id="II",MessageBody="II",MessageGroupId="messageGroupId",MessageDeduplicationId="II" Id="III",MessageBody="III",MessageGroupId="messageGroupId",MessageDeduplicationId="III"
```

# Receive messages

```shell
aws --endpoint http://localhost:9324 sqs receive-message --queue-url http://localhost:9324/queue/queue-name.fifo --max-number-of-messages 10
```

## Related reading

https://dynobase.dev/dynamodb-golang-query-examples/
https://ocakhasan.github.io/aws-sqs-golang-function-examples/
https://tutorialsdojo.com/amazon-sqs/
https://tutorialsdojo.com/amazon-sns/
