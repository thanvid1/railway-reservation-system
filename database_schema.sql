-- Railway Reservation System Database Schema

CREATE TABLE trains (
    train_id INT PRIMARY KEY,
    train_name VARCHAR(50),
    source VARCHAR(50),
    destination VARCHAR(50),
    departure_time VARCHAR(20)
);

CREATE TABLE bookings (
    booking_id INT PRIMARY KEY,
    train_id INT,
    passenger_name VARCHAR(50),
    FOREIGN KEY (train_id) REFERENCES trains(train_id)
);
