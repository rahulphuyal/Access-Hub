# AccessHub - Week 4 Data Dictionary

## Project

**AccessHub - Secure Retail User Management System**

## Purpose

This Data Dictionary defines the data fields required for the AccessHub
database. It converts the data identified during Week 2 analysis into a
database-ready structure for future backend development.

---

# 1. USER Entity

The User entity stores the main information associated with registered
AccessHub user accounts.

## UserID

- Description: A unique identifier assigned to each user account.
- Example Value: U001
- Required: Yes
- Key: Primary Key

## FullName

- Description: The full name of the registered user.
- Example Value: Rahul Sharma
- Required: Yes

## Username

- Description: A unique username used to identify the user's account.
- Example Value: rahul123
- Required: Yes
- Constraint: Must be unique

## Email

- Description: The user's email address used for account identification
  and authentication.
- Example Value: rahul@example.com
- Required: Yes
- Constraint: Must be unique and use a valid email format

## PasswordHash

- Description: A securely hashed representation of the user's password.
- Example Value: $2b$12$examplehashedpassword
- Required: Yes
- Security: Plain-text passwords must not be stored.

## RoleID

- Description: Identifies the role assigned to the user.
- Example Value: R001
- Required: Yes
- Key: Foreign Key
- References: Role.RoleID

## AccountStatus

- Description: Shows whether the user account is active or inactive.
- Example Value: Active
- Required: Yes

## RegistrationDate

- Description: Records the date and time when the user account was created.
- Example Value: 2026-10-05 10:30:00
- Required: Yes

## AccountCreatedBy

- Description: Identifies whether the account was created by the user
  through registration or by an authorised administrator.
- Example Value: Self Registration
- Required: Yes

## AccountUpdatedBy

- Description: Identifies the user or administrator who last updated
  the account.
- Example Value: Admin001
- Required: No

## AccountUpdatedDate

- Description: Records the date and time when the account was last updated.
- Example Value: 2026-10-05 12:00:00
- Required: No

---

# 2. ROLE Entity

The Role entity stores the different access roles available within
AccessHub.

## RoleID

- Description: A unique identifier for each system role.
- Example Value: R001
- Required: Yes
- Key: Primary Key

## RoleName

- Description: The name of the access role assigned to users.
- Example Value: Admin
- Required: Yes
- Constraint: Must be a predefined valid role

---

# 3. PERMISSION Entity

The Permission entity stores individual permissions that control access
to system functions.

## PermissionID

- Description: A unique identifier for each permission.
- Example Value: P001
- Required: Yes
- Key: Primary Key

## PermissionName

- Description: The name of a system permission.
- Example Value: Manage Users
- Required: Yes

## Description

- Description: Explains what functionality the permission provides access to.
- Example Value: Allows an administrator to create, update and manage users.
- Required: Yes

---

# 4. ROLE_PERMISSION Entity

The RolePermission entity connects roles with the permissions assigned
to those roles.

## RolePermissionID

- Description: A unique identifier for each role-permission relationship.
- Example Value: RP001
- Required: Yes
- Key: Primary Key

## RoleID

- Description: Identifies the role associated with a permission.
- Example Value: R001
- Required: Yes
- Key: Foreign Key
- References: Role.RoleID

## PermissionID

- Description: Identifies the permission assigned to the role.
- Example Value: P001
- Required: Yes
- Key: Foreign Key
- References: Permission.PermissionID

---

# 5. AUTHENTICATION Entity

The Authentication entity stores user login and authentication activity.

## AuthenticationID

- Description: A unique identifier for an authentication record.
- Example Value: AUTH001
- Required: Yes
- Key: Primary Key

## UserID

- Description: Identifies the user associated with the authentication record.
- Example Value: U001
- Required: Yes
- Key: Foreign Key
- References: User.UserID

## LoginTime

- Description: Records the date and time when a login attempt occurred.
- Example Value: 2026-10-05 09:15:00
- Required: Yes

## LogoutTime

- Description: Records the date and time when a user logs out.
- Example Value: 2026-10-05 10:45:00
- Required: No

## LoginStatus

- Description: Records whether an authentication attempt was successful
  or unsuccessful.
- Example Value: Successful
- Required: Yes

## FailedAttemptCount

- Description: Records the number of failed authentication attempts
  associated with the authentication process.
- Example Value: 2
- Required: No

---

# 6. SESSION Entity

The Session entity stores information about authenticated user sessions.

## SessionID

- Description: A unique identifier for a user session.
- Example Value: S001
- Required: Yes
- Key: Primary Key

## UserID

- Description: Identifies the user associated with the session.
- Example Value: U001
- Required: Yes
- Key: Foreign Key
- References: User.UserID

## LoginTime

- Description: Records when the user session started.
- Example Value: 2026-10-05 09:15:00
- Required: Yes

## LogoutTime

- Description: Records when the user session ended.
- Example Value: 2026-10-05 10:45:00
- Required: No

## SessionStatus

- Description: Indicates the current status of the session.
- Example Value: Active
- Required: Yes

---

# 7. AUDIT_LOG Entity

The AuditLog entity records important activities performed by users
and administrators.

## AuditLogID

- Description: A unique identifier for an audit log record.
- Example Value: AUD001
- Required: Yes
- Key: Primary Key

## UserID

- Description: Identifies the user associated with the recorded activity.
- Example Value: U001
- Required: Yes
- Key: Foreign Key
- References: User.UserID

## Action

- Description: Identifies the type of activity performed.
- Example Value: Updated User Role
- Required: Yes

## ActionDescription

- Description: Provides additional information about the recorded activity.
- Example Value: Administrator changed user U002 from User to Admin.
- Required: No

## ActionDate

- Description: Records the date and time when the activity occurred.
- Example Value: 2026-10-05 11:30:00
- Required: Yes

---

# 8. CONTACT_MESSAGE Entity

The ContactMessage entity stores messages submitted through the
AccessHub Contact page.

## MessageID

- Description: A unique identifier for each contact message.
- Example Value: MSG001
- Required: Yes
- Key: Primary Key

## UserID

- Description: Identifies the registered user who submitted the message,
  when applicable.
- Example Value: U001
- Required: No
- Key: Foreign Key
- References: User.UserID

## Name

- Description: The name provided by the person submitting the contact message.
- Example Value: Rahul Sharma
- Required: Yes

## Email

- Description: The email address provided with the contact message.
- Example Value: rahul@example.com
- Required: Yes

## Message

- Description: The message submitted through the Contact page.
- Example Value: I need help accessing my account.
- Required: Yes

## SubmittedDate

- Description: Records the date and time when the contact message was submitted.
- Example Value: 2026-10-05 14:20:00
- Required: Yes

## Status

- Description: Indicates whether the contact message is new, in progress
  or resolved.
- Example Value: New
- Required: Yes

---

# Data Dictionary Summary

The AccessHub database design contains eight main entities:

1. User
2. Role
3. Permission
4. RolePermission
5. Authentication
6. Session
7. AuditLog
8. ContactMessage

The data structure supports user registration, authentication, role-based
access control, session management, auditing and contact-page functionality.