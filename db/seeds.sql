INSERT INTO burger (burger_name, devoured) VALUES ("Good Old Hamburger", false);
INSERT INTO burger (burger_name, devoured) VALUES ("Cheeseburger", false);
INSERT INTO burger (burger_name, devoured) VALUES ("Doug Burger", false);
INSERT INTO burger (burger_name) VALUES ("Liz Burger");

SELECT * FROM burger;
UPDATE burger SET devoured = 1 WHERE id = 1;