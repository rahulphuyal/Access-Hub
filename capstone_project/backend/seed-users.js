
const bcrypt = require('bcryptjs');
const { DatabaseSync } = require('node:sqlite');
const path = require('node:path');

const db = new DatabaseSync(
  path.join(__dirname, '../database/accesshub.db')
);

db.exec('PRAGMA foreign_keys = ON');

const users = [
  ['Alex Morgan', 'alex@example.com', 1],
  ['Sam Taylor', 'sam@example.com', 2],
  ['Jordan Lee', 'jordan@example.com', 3]
];

const insert = db.prepare(`
  INSERT OR IGNORE INTO Users
  (FullName, Email, PasswordHash, RoleID, AccountStatus)
  VALUES (?, ?, ?, ?, 'Active')
`);

for (const [name, email, roleId] of users) {
  const passwordHash = bcrypt.hashSync('DemoPassword123!', 12);
  insert.run(name, email, passwordHash, roleId);
}

console.log('Sample users created successfully.');
db.close();
