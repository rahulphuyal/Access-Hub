# Week 2 Data Analysis

## AccessHub - Secure Retail User Management System

### Project Data Inventory

The following data inventory identifies the key data used within the AccessHub User Management System.

| Data Item | Purpose | Who Creates It? | Who Uses It? | Required? |
|---|---|---|---|---|
| User ID | Uniquely identifies each user account | System | System and Administrator | Yes |
| Full Name | Identifies the user by their full name | User | System and Administrator | Yes |
| Username | Provides a unique name for the user account | User | System and Administrator | Yes |
| Email Address | Stores the user's email for account identification | User | System and Administrator | Yes |
| Password | Allows the user to securely access their account | User | Authentication System | Yes |
| User Role | Defines the user's access level in the system | Administrator | System and Administrator | Yes |
| Account Status | Shows whether the user account is active or inactive | Administrator | System and Administrator | Yes |
| Registration Date | Records when the user account was created | System | Administrator | Yes |
| Last Login | Records the user's most recent login | System | System and Administrator | No |
| Login Attempts | Records attempts made to access an account | System | System and Administrator | No |
| Login Status | Records whether authentication was successful or unsuccessful | System | System and Administrator | Yes |
| Role Permission | Defines what system functions a user role has access to | Administrator | System | Yes |
| Account Created By | Records who created the user account | System or Administrator | Administrator | Yes |
| Account Updated By | Records who last changed the user account | System or Administrator | Administrator | No |
| Account Updated Date | Records when account information was last changed | System | Administrator | No |
| Session Information | Tracks an authenticated user's current session | System | System | Yes |
| Failed Login Time | Records when an unsuccessful login attempt occurred | System | System and Administrator | No |
| Admin ID | Identifies the administrator managing user accounts | System | System | Yes |
| User Activity | Records important actions performed by a user | System | Administrator | No |
| Audit Log | Maintains a record of important account and administrative activities | System | Administrator | No |
| Contact Message | Stores messages submitted through the contact page | User | Administrator | No |


## Data Flow Investigation

The following data flow shows how user information moves through the AccessHub User Management System.

User
↓
Registration / Login
↓
Input Validation
↓
Authentication
↓
Role and Permission Check
↓
System Processing
↓
User / Admin Dashboard


## Data Quality and Risk Analysis

The following table identifies potential data quality and security risks within the AccessHub User Management System.

| Data Item | Risk | Business Impact | Prevention Strategy |
|---|---|---|---|
| Email Address | Invalid or duplicate email entered | Duplicate or incorrect user accounts | Email format validation and unique email checks |
| Password | Weak password selected by user | Increased risk of unauthorised account access | Enforce password complexity requirements |
| Password | Password stored insecurely | User credentials could be exposed | Store passwords using secure password hashing |
| User Role | Incorrect role assigned | User may receive unauthorised system access | Validate roles and use Role-Based Access Control |
| Account Status | Incorrect account status recorded | Authorised users may lose access or inactive users may retain access | Restrict status changes to administrators |
| Login Attempts | Failed attempts are not recorded correctly | Suspicious login activity may go unnoticed | Record and monitor failed login attempts |
| User ID | Duplicate or incorrect User ID | User records may be linked incorrectly | Generate a unique ID for every user |
| Full Name | Missing or incorrect name | User records may become difficult to identify | Require name input and validate the field |
| Permissions | Incorrect permissions assigned | Users may access restricted functions | Apply permissions based on approved user roles |
| Audit Log | Important activities are not recorded | Administrators may be unable to trace account changes | Record important user and administrator actions |


## Planning for Future Development

### Information Stored Permanently

AccessHub should permanently store important user account information such as User ID, full name, username, email address, password hash, user role, account status and registration date. This information is required to maintain and manage user accounts.

### Information That Changes Frequently

Some information may change during normal system use. This includes account status, user role, permissions, last login information and account details updated by users or administrators.

### Information Restricted to Administrators

Administrative information should only be accessible to authorised administrators. This includes user roles, account status controls, permissions, user management functions and audit information.

### Information for Future Reports

Future reports may include the number of registered users, active and inactive accounts, user roles, login activity, failed login attempts and administrative account changes.

### Capstone B Version 2

Future development may include database integration, improved authentication, enhanced role and permission management, password reset functionality, session management and detailed audit logging.