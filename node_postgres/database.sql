create TABLE category(
    id SERIAL PRIMARY KEY,
    name TEXT,
    alias TEXT,
    type INTEGER,
    children JSONB
);

create TABLE news(
    id SERIAL PRIMARY KEY,
    title TEXT,
    body TEXT,
    category TEXT,
    category_id INTEGER,
    FOREIGN KEY (category_id) REFERENCES category (id)
);

create TABLE blogs(
    id SERIAL PRIMARY KEY,
    title TEXT,
    body TEXT,
    category TEXT,
    category_id INTEGER,
    FOREIGN KEY (category_id) REFERENCES category (id)
);

create TABLE forums(
    id SERIAL PRIMARY KEY,
    title TEXT,
    body TEXT,
    category TEXT,
    category_id INTEGER,
    FOREIGN KEY (category_id) REFERENCES category (id)
);