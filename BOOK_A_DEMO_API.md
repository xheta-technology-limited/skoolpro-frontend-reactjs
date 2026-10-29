## API Reference

### Submit a Demo Booking

```
POST /api/demo-bookings
Content-Type: application/json
```

**Request Body**

| Field     | Type   | Required | Rules                                                             |
| --------- | ------ | -------- | ----------------------------------------------------------------- |
| `name`    | string | Yes      | Max 255 characters                                                |
| `email`   | string | Yes      | Valid email address                                               |
| `phone`   | string | Yes      | Numeric, optional `+` prefix, 7–15 digits (e.g. `+2347062360123`) |
| `message` | string | Yes      | No length restriction                                             |

**Success Response** `201 Created`

```json
{
    "message": "Your demo booking has been received. We will be in touch soon."
}
```

**Validation Error Response** `422 Unprocessable Entity`

```json
{
    "message": "The name field is required.",
    "errors": {
        "name": ["The name field is required."]
    }
}
```
