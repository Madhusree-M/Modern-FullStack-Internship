-- create customers table

create table customers(
    customer_id serial primary key,
    customer_name varchar(20) not null,
    phone varchar(20) not null,
    address varchar(30) not null
);

create table restaurants(
    restaurant_id serial primary key,
    restaurant_name varchar(20) not null,
    location varchar(20) not null,
    opening_hours TIME not null,
    closing_hours TIME not null
);

create table delivery_partners(
    delivery_partner_id serial primary key,
    partner_name varchar(20) not null,
    phone varchar(20) not null,
    vehicle varchar(20) not null
);

create table orders(
    order_id serial primary key,
    customer_id int not null,
    restaurant_id int not null,
    partner_id int not null,
    total_price int not null,
    status varchar(20),

    foreign key (customer_id) references customers(customer_id),
    foreign key (restaurant_id) references restaurants(restaurant_id),
    foreign key (partner_id) references delivery_partners(delivery_partner_id)
);

create table menu_items(
    item_id serial primary key,
    item_name varchar(30),
    price int not null,
    restaurant_id int not null,

    foreign key (restaurant_id) references restaurants(restaurant_id)
);

create table order_items(
    order_id int not null,
    item_id int not null,
    restaurant_id int not null,
    quantity int not null,

    PRIMARY KEY (order_id, item_id),

    foreign key (order_id) references orders(order_id),
    foreign key (item_id) references menu_items(item_id),
    foreign key (restaurant_id) references restaurants(restaurant_id)
);

create table payments(
    payment_id serial primary key,
    customer_id INT not null,
    order_id int not null,
    payment_mode varchar(20) not null,
    amount int not null,
    cur_date timestamp default current_timestamp,

    foreign key (customer_id) references customers(customer_id),
    foreign key (order_id) references orders(order_id)
);


-- Insertion 

INSERT INTO customers (customer_name, phone, address) VALUES
('Madhusree', '9876543210', 'Coimbatore'),
('Harshini', '9876543211', 'Erode'),
('Mathumitha', '9876543212', 'Salem'),
('Santhiya', '9876555555', 'Chennai');

INSERT INTO restaurants (restaurant_name, location, opening_hours, closing_hours) VALUES
('A2B', 'Coimbatore', '08:00:00', '22:00:00'),
('Junior Kuppanna', 'Erode', '10:00:00', '23:00:00'),
('Grill House', 'Coimbatore', '09:00:00', '23:00:00');

INSERT INTO delivery_partners (partner_name, phone, vehicle) VALUES
('Santhiya', '9876543213', 'Scooter'),
('Praveen', '9876543214', 'Bike'),
('Deepak', '9876543215', 'Scooter');



INSERT INTO menu_items
(item_name, price, restaurant_id, category)
VALUES
('Masala Dosa', 100, 1, 'Veg'),
('Poori Masala', 90, 1, 'Veg'),
('Veg Fried Rice', 140, 1, 'Veg'),
('Paneer Butter Masala', 220, 1, 'Veg'),
('Chicken Fried Rice', 190, 2, 'Non-Veg'),
('Mutton Biryani', 280, 2, 'Non-Veg'),
('Chicken 65', 170, 2, 'Non-Veg'),
('Grilled Chicken', 250, 3, 'Non-Veg'),
('Veg Noodles', 130, 3, 'Veg'),
('Fish Fry', 230, 3, 'Non-Veg');