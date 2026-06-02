-- purchase db 

create table customers(
customer_id serail primary key,
first_name varchar(20) not null,
last_name varchar(20) not null,
address_id int not_null
foreign key (address_id) references address(address_id)
);


create table address(
    address_id serial primary keyof,
    address varchar(30) not null,
    city_id int not null,
    postal_code int not null,
    phone varchar(20)

    foreign key(city_id) references city(city_id)
);


create table city(
    city_id serial primary key,
    city_name varchar(20) not null,
);


create table payment(
    payment_id serial primary key,
    customer_id int not null,
    amount int not null,
    payment_mode varchar(20),
    payment_data timestamp default current_timestamp


);


\dt;

insert into city values(default, 'New Delhi');

insert into address(address,city_id, postal_code, phone) 
values ('SECE',1,641202, '9876543210');

select * from city;

select * from address;

insert into city values(default, 'Chennai'), (default, 'Coimbatore');

select * from city;

insert into address(address,city_id, postal_code, phone) 
values ('SRM',2,643202, '9876543888'),
('KPR',2,643222, '9876543777');


select * from address;

insert into payment(customer_id, amount, payment_mode)
values(
1,10000,'UPI'),
(2,15000,'Debit Card'),
(3,25000,'Cash');

alter table payment rename payment_data to payment_date;

select * from customers c 
inner join payment p 
on c.customer_id = p.customer_id;


insert into customers values(default, 'Ragavi', 'Ponnusamy', 2);


select * from customers c left join payment p
on c.customer_id = p.customer_id;


select * from customers c right join payment p
on c.customer_id = p.customer_id;

select * from customers c full outer join payment p
on c.customer_id = p.customer_id;

-- design an er diagram for students course enrollment 
