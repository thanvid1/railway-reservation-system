# Railway Reservation System – Requirements

## 1. Objective
Build a simple web-based railway reservation system that allows users to:
- View available trains
- Book a seat
- Cancel a booking
- View booking details

## 2. Functional Requirements

### FR1 — Train Listing
The system must display a list of available trains, including:
- Train ID
- Train name
- Source
- Destination
- Time

### FR2 — Seat Booking
The system must allow a user to:
- Enter Train ID
- Enter passenger name
- Book a seat
- Store booking locally (localStorage)

### FR3 — Cancellation
The system must:
- Allow the user to cancel an existing booking
- Remove stored booking from localStorage

### FR4 — View Booking
The system must:
- Show saved booking details when user checks bookings

## 3. Non-Functional Requirements
- Simple user interface
- Works offline (no backend)
- Should load instantly
- Easy to maintain

## 4. Out of Scope
- Online payment
- Real-time train data
- User login system
