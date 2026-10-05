Save it.

---

# PART 10 — Create Business Rules

Open:

```text
business-rules.md

Paste:

# AccessHub - Week 4 Business Rules

## Project

AccessHub - Secure Retail User Management System

## Business Rules

### Rule 1 - Unique User ID

Every registered user must have a unique UserID.

### Rule 2 - Unique Username

Every user must have a unique username.

### Rule 3 - Unique Email

Every registered user must have a unique email address.

### Rule 4 - Secure Password Storage

User passwords must never be stored as plain text. Passwords must be
securely hashed before being stored.

### Rule 5 - User Role

Every registered user must have one valid system role.

### Rule 6 - Role-Based Access

Users can only access system functions permitted by their assigned role.

### Rule 7 - Administrator Access

Only authorised administrators can modify user roles, account status
and permissions.

### Rule 8 - Valid Foreign Keys

Foreign key values must reference valid records in the related entity.

### Rule 9 - Authentication Records

Every authentication record must be associated with a valid user.

### Rule 10 - Audit Logging

Important user and administrator activities should be recorded in the
audit log.

### Rule 11 - Account Status

Only authorised administrators can change the status of a user account.

### Rule 12 - Contact Messages

Every contact message must contain a message and valid contact information.

## Summary

These business rules support data integrity, authentication security,
role-based access control and future backend validation.