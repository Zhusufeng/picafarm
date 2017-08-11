INSERT INTO user_table (username, password, grower, customer, email)
VALUES ($1, $2, $3, $4, $5)
RETURNING *;