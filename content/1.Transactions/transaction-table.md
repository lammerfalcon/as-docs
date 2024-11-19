## title: API Documentation for Transaction and Replenishment Handling description: Detailed documentation for managing transactions and replenishments via API.

This document outlines the API endpoints and logic for handling transactions and replenishments between virtual bills. It provides details on requests, responses, error handling, and business considerations.

## API: Retrieve Transactions

### Endpoint

**GET** `/api/client/transactions`

### Response Structure

```js
{
  "transactions": [
    {
      "id": "01914273-4e0a-7a12-9cc7-ae20f608b8b9",
      "type": "Transaction",
      "createdAt": "2024-08-11T17:18:58+00:00",
      "details": {
        "amount": 122,
        "from": {
          "type": "Balance",
          "virtual_bill": {
            "id": "uuid-1",
            "amount": 9000.0,
            "currency": {
              "name": "$"
            },
            "createdAt": "2024-09-09T12:43:48+00:00",
            "updatedAt": "2024-09-09T12:43:48+00:00"
          }
        },
        "to": {
          "type": "Account",
          "project": {
            "id": "project-uuid-1",
            "name": "Project A",
            "platform": {
              "id": "platform-uuid-1",
              "name": "VK реклама",
              "account": {
                "id": "account-uuid-1",
                "name": "Account 1",
                "virtual_bill": {
                  "id": "uuid-2",
                  "amount": 0,
                  "currency": {
                    "name": "$"
                  },
                  "createdAt": "2024-09-09T12:43:48+00:00",
                  "updatedAt": "2024-09-09T12:43:48+00:00"
                }
              }
            }
          }
        },
        "fee": 0.1,
        "total_payable": 9900.0
      }
    },
    {
      "id": "12345678-90ab-cdef-1234-567890abcdef",
      "type": "Replenishment",
      "createdAt": "2024-08-11T17:18:58+00:00",
      "details": {
        "amount": 5000,
        "currency": {
          "name": "$",
          "code": null,
          "id": "018fc9c9-c4f7-717b-a497-43122b499327",
          "createdAt": "2024-05-30T13:56:34+00:00",
          "updatedAt": "2024-05-30T13:56:34+00:00"
        },
        "companyId": "company-uuid",
        "commission": 50,
        "status": "Pending"
      }
    }
  ]
}
```

### Error Handling

Status CodeError Message401Unauthorized (missing or invalid cookie)403Forbidden (account access restricted)404"No transactions found"400"Invalid request parameters"500"Internal server error"

### Description

- **401 Unauthorized**: The request lacks valid authentication credentials, usually due to a missing or invalid cookie.
- **403 Forbidden**: The client does not have access rights to view the transactions, indicating restricted access.
- **404 No transactions found**: The requested transactions could not be found in the system.
- **400 Invalid request parameters**: The provided request parameters are invalid or incomplete.
- **500 Internal server error**: A server-side error occurred while processing the request.
