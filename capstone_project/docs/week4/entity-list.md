# AccessHub - Week 4 Entity List

## Project

AccessHub - Secure Retail User Management System

## 1. User

Stores registered user account information.

### Fields

- UserID (PK)
- FullName
- Username
- Email
- PasswordHash
- RoleID (FK)
- AccountStatus
- RegistrationDate
- AccountCreatedBy
- AccountUpdatedBy
- AccountUpdatedDate

---

## 2. Role

Stores the different access roles available in AccessHub.

### Fields

- RoleID (PK)
- RoleName

---

## 3. Permission

Stores individual permissions available within the system.

### Fields

- PermissionID (PK)
- PermissionName
- Description

---

## 4. RolePermission

Connects roles with their assigned permissions.

### Fields

- RolePermissionID (PK)
- RoleID (FK)
- PermissionID (FK)

---

## 5. Authentication

Stores login and authentication activity.

### Fields

- AuthenticationID (PK)
- UserID (FK)
- LoginTime
- LogoutTime
- LoginStatus
- FailedAttemptCount

---

## 6. Session

Stores authenticated user session information.

### Fields

- SessionID (PK)
- UserID (FK)
- LoginTime
- LogoutTime
- SessionStatus

---

## 7. AuditLog

Stores important activities performed by users and administrators.

### Fields

- AuditLogID (PK)
- UserID (FK)
- Action
- ActionDescription
- ActionDate

---

## 8. ContactMessage

Stores messages submitted through the AccessHub Contact page.

### Fields

- MessageID (PK)
- UserID (FK)
- Name
- Email
- Message
- SubmittedDate
- Status