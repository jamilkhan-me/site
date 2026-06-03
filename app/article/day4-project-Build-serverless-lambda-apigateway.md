---
title: "Build a Serverless REST API with Lambda + API Gateway"
series: "30 Days of AWS"
day: 4
slug: "day-4-serverless-rest-api-lambda-api-gateway"
date: "June 04, 2026"
Description: "No servers. No EC2. No VPC. Just three Lambda functions, an API Gateway, and a DynamoDB table — a fully working REST API that scales to zero when idle and to millions of requests on demand."
tags: ["Lambda", "API Gateway",  "Serverless", ]
difficulty: "beginner"
buildTime: "~60 min"
estimatedCost: "~$0.00 (free tier)"
services: ["AWS Lambda", "API Gateway (REST)", "DynamoDB", "IAM Execution Role", "CloudWatch Logs"]
saaC03Domains: ["Design Cost-Optimised Architectures", "Design High-Performing Architectures", "Design Secure Architectures"]
coverImage: "/images/day4-lambda-cover.png"
---

A fully serverless REST API. Three endpoints. Three Lambda functions. One DynamoDB table. Zero servers, zero EC2 instances, zero VPCs. The API scales from zero to millions of requests automatically, and when nobody's calling it, it costs exactly nothing.

This is the project that made serverless click for me.

---

## Architecture overview

```
Client (curl / browser)
    │
    │  HTTPS
    ▼
API Gateway  ──────────────────────────────────────┐
    │                                               │
    ├── GET    /items    ──▶  Lambda (list)          │
    ├── POST   /items    ──▶  Lambda (create)        │  IAM execution role
    └── DELETE /items/{id} ──▶  Lambda (delete)      │  controls permissions
                                    │               │
                                    ▼               │
                                DynamoDB            │
                               (items table)        │
                                    │               │
                                    ▼               │
                               CloudWatch  ◀────────┘
                              (logs + metrics)
```

Each HTTP method maps to exactly one Lambda function. API Gateway handles routing, throttling, and HTTPS termination. Lambda handles the business logic. DynamoDB stores the data. IAM controls what each function is allowed to do. CloudWatch captures every invocation automatically.

No servers. No patching. No capacity planning.

---

## What I built

A working CRUD API for an `items` resource:

- `GET /items` — returns all items from DynamoDB
- `POST /items` — creates a new item with a generated UUID
- `DELETE /items/{id}` — deletes a specific item by ID

Tested end-to-end with `curl` from the terminal. Total infrastructure cost for a day of testing: **$0.00**.

---

## Step-by-step build

### Step 1 — Create the DynamoDB table

Go to **DynamoDB → Create table**:

- Table name: `items`
- Partition key: `id` (String)
- Capacity mode: On-demand

On-demand capacity means DynamoDB scales automatically with no provisioning. You pay per request, and there's no idle cost when the table isn't being used. Perfect match for serverless.

---

### Step 2 — Create the IAM execution role

Go to **IAM → Roles → Create role**:

- Trusted entity: AWS service → Lambda
- Attach permissions: `AWSLambdaBasicExecutionRole` + `AmazonDynamoDBFullAccess`
- Role name: `day4-lambda-role`

> ⚠️ In production, never use `AmazonDynamoDBFullAccess`. Create a scoped policy that allows only `dynamodb:GetItem`, `dynamodb:PutItem`, `dynamodb:DeleteItem`, and `dynamodb:Scan` on the specific table ARN. Least privilege isn't optional in production.

---

### Step 3 — Create the three Lambda functions

Go to **Lambda → Create function** (Author from scratch, Python 3.12, use existing role `day4-lambda-role`) for each.

**`day4-get-items`** — lists all items:

```python
import json, boto3

def lambda_handler(event, context):
    table = boto3.resource('dynamodb').Table('items')
    result = table.scan()
    return {
        'statusCode': 200,
        'headers': {'Content-Type': 'application/json'},
        'body': json.dumps(result['Items'])
    }
```

**`day4-post-item`** — creates a new item:

```python
import json, boto3, uuid

def lambda_handler(event, context):
    body = json.loads(event['body'])
    item = {'id': str(uuid.uuid4()), 'name': body['name']}
    boto3.resource('dynamodb').Table('items').put_item(Item=item)
    return {
        'statusCode': 201,
        'headers': {'Content-Type': 'application/json'},
        'body': json.dumps(item)
    }
```

**`day4-delete-item`** — deletes by ID:

```python
import json, boto3

def lambda_handler(event, context):
    item_id = event['pathParameters']['id']
    boto3.resource('dynamodb').Table('items').delete_item(Key={'id': item_id})
    return {
        'statusCode': 200,
        'body': json.dumps({'deleted': item_id})
    }
```

Click **Deploy** after pasting each function's code.

---

### Step 4 — Create the API Gateway

Go to **API Gateway → Create API → REST API → Build**:

- API name: `day4-items-api`
- Endpoint type: Regional

Create resources and methods:

```
/items
  GET    → day4-get-items    (Lambda Proxy integration)
  POST   → day4-post-item    (Lambda Proxy integration)
  /{id}
    DELETE → day4-delete-item  (Lambda Proxy integration)
```

For each method: select the resource → Actions → Create Method → choose HTTP verb → tick Lambda Function → enter function name → Save → OK (this grants API Gateway permission to invoke the function).

Enable CORS on both `/items` and `/items/{id}`: select resource → Actions → Enable CORS → Enable CORS and replace existing headers.

---

### Step 5 — Deploy the API

**Actions → Deploy API**:

- Stage: [New Stage] → name: `dev`

You'll receive an invoke URL:

```
https://abc123xyz.execute-api.us-east-1.amazonaws.com/dev
```

---

### Step 6 — Test with curl

```bash
BASE="https://abc123xyz.execute-api.us-east-1.amazonaws.com/dev"

# Create an item
curl -X POST $BASE/items \
  -H "Content-Type: application/json" \
  -d '{"name": "Day 4 project"}'
# {"id": "a1b2c3d4-...", "name": "Day 4 project"}

# List all items
curl $BASE/items
# [{"id": "a1b2c3d4-...", "name": "Day 4 project"}]

# Delete the item
curl -X DELETE $BASE/items/a1b2c3d4-...
# {"deleted": "a1b2c3d4-..."}

# Confirm deletion
curl $BASE/items
# []
```

All three endpoints working. Zero servers running.

---

### Step 7 — Clean up

```
1. Delete API Gateway  (API Gateway → select → Actions → Delete)
2. Delete 3 Lambda functions
3. Delete DynamoDB table
4. Delete IAM role
```

---
