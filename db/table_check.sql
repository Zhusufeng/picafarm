CREATE TABLE IF NOT EXISTS farm_table
(
  id SERIAL PRIMARY KEY,
  title TEXT,
  description TEXT,
  produce TEXT[],
  price MONEY,
  max_subscribers INTEGER,
  curr_subscribers  INTEGER,
  user_id INTEGER,
  FOREIGN KEY (user_id) REFERENCES user_table (id)
);

CREATE TABLE IF NOT EXISTS user_table
(
  id SERIAL PRIMARY KEY,
  username TEXT,
  password TEXT,
  grower BOOLEAN,
  customer BOOLEAN,
  email TEXT
);