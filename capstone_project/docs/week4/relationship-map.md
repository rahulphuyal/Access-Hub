# AccessHub - Week 4 Relationship Map

## Project

AccessHub - Secure Retail User Management System

## 1. Role to User

**Relationship:** One Role has many Users.

**Cardinality:** 1:M

Each user must have one valid role. A role such as Admin or User can be
assigned to multiple users.

**Foreign Key:**

User.RoleID → Role.RoleID

---

## 2. Role to RolePermission

**Relationship:** One Role can have many RolePermission records.

**Cardinality:** 1:M

A role can be associated with multiple permissions.

**Foreign Key:**

RolePermission.RoleID → Role.RoleID

---

## 3. Permission to RolePermission

**Relationship:** One Permission can appear in many RolePermission records.

**Cardinality:** 1:M

This allows permissions to be associated with different roles.

**Foreign Key:**

RolePermission.PermissionID → Permission.PermissionID

---

## 4. User to Authentication

**Relationship:** One User can have many Authentication records.

**Cardinality:** 1:M

A user can make multiple login attempts over time.

**Foreign Key:**

Authentication.UserID → User.UserID

---

## 5. User to Session

**Relationship:** One User can have many Session records.

**Cardinality:** 1:M

A user may have multiple sessions over the lifetime of their account.

**Foreign Key:**

Session.UserID → User.UserID

---

## 6. User to AuditLog

**Relationship:** One User can have many AuditLog records.

**Cardinality:** 1:M

Important activities associated with a user can be recorded in the audit log.

**Foreign Key:**

AuditLog.UserID → User.UserID

---

## 7. User to ContactMessage

**Relationship:** One User can submit many Contact Messages.

**Cardinality:** 1:M

A registered user may submit multiple contact messages. The UserID may be
optional when a message is submitted by a visitor who is not logged in.

**Foreign Key:**

ContactMessage.UserID → User.UserID

---

# Relationship Overview

```text
ROLE 1 ───────── M USER

ROLE 1 ───────── M ROLE_PERMISSION

PERMISSION 1 ─── M ROLE_PERMISSION

USER 1 ───────── M AUTHENTICATION

USER 1 ───────── M SESSION

USER 1 ───────── M AUDIT_LOG

USER 1 ───────── M CONTACT_MESSAGE