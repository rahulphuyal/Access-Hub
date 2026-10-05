# AccessHub - Week 4 Database Design Notes

## Project

AccessHub - Secure Retail User Management System

## Purpose

These design notes explain the database design decisions made for the
AccessHub User Management System.

---

## User Entity

The User entity was created because the system needs to store information
about registered users.

UserID was selected as the primary key so that each user can be uniquely
identified.

---

## Role Entity

The Role entity was created to support role-based access control.

AccessHub requires different levels of access, including Administrator and
normal User roles.

Separating roles into their own entity reduces duplication and provides a
consistent way to manage access levels.

---

## Permission Entity

The Permission entity stores individual system permissions.

Separating permissions from users allows the system to control access to
specific functions without duplicating permission information for every user.

---

## RolePermission Entity

The RolePermission entity connects roles with permissions.

It allows a role to have multiple permissions and allows permissions to be
associated with different roles.

---

## Authentication Entity

Authentication was separated from the User entity because one user can
perform multiple login attempts over time.

This structure allows the system to record login time, logout time,
authentication status and failed login attempts.

---

## Session Entity

The Session entity stores information about authenticated sessions.

Separating sessions from User allows the system to track multiple sessions
over the lifetime of an account.

---

## AuditLog Entity

The AuditLog entity records important activities performed by users and
administrators.

This supports accountability, security monitoring and future reporting.

---

## ContactMessage Entity

The ContactMessage entity was included because AccessHub contains a Contact
page.

The entity allows submitted messages to be stored and managed by authorised
administrators.

---

## Primary Keys

Each entity contains a primary key to uniquely identify individual records.

Examples include:

- UserID
- RoleID
- PermissionID
- AuthenticationID
- SessionID
- AuditLogID
- MessageID

---

## Foreign Keys

Foreign keys connect related entities.

The main foreign keys are:

- User.RoleID → Role.RoleID
- RolePermission.RoleID → Role.RoleID
- RolePermission.PermissionID → Permission.PermissionID
- Authentication.UserID → User.UserID
- Session.UserID → User.UserID
- AuditLog.UserID → User.UserID
- ContactMessage.UserID → User.UserID

---

## Security Considerations

Passwords are represented as PasswordHash rather than plain-text passwords.

Role-based access control is used to restrict system functions.

Authentication and audit information can support future security monitoring.

---

## Design Challenges

One challenge was deciding whether login information should be stored
directly in the User entity.

The design separates authentication and session information because users
can have multiple authentication events and sessions.

Another challenge was separating roles and permissions to avoid unnecessary
duplication.

---

## Future Improvements

Future versions of AccessHub may include:

- Password reset functionality
- Email verification
- Multi-factor authentication
- More detailed security logs
- User profile management
- Advanced permissions
- Login location tracking
- Account lockout functionality
- Security notifications

---

## Developer Perspective

The database design provides a foundation for future backend development.

The structure can support:

- Registration APIs
- Login APIs
- User management APIs
- Authentication services
- Role-based access control
- Permission management
- Session management
- Audit logging
- Contact message management