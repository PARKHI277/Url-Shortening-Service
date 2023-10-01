# URL Shortening Service

## Project Overview

The URL Shortening Service is a web application built using Node.js, Express, and MongoDB that allows users to shorten long URLs. This project demonstrates proficiency in full-stack development, including user registration, authentication, database management, and data visualization.

## Features

- **User Registration and Authentication:**
  - Users can register with a valid email address and password.
  - Proper validation checks ensure secure passwords and unique email addresses.
  - Passwords are securely hashed and stored.

- **User Dashboard:**
  - After logging in, users have access to their personal dashboard.
  - The dashboard displays user's previously shortened URLs with analytics.

- **URL Shortening:**
  - Users can input long URLs to generate unique short URLs.
  - Shortened URLs are associated with the user who created them.

- **Redirection:**
  - When users access a shortened URL, they are redirected to the original long URL.

- **Analytics:**
  - The application tracks the number of clicks on each shortened URL.
  - Users can view analytics for their URLs on the dashboard.

- **Database Storage:**
  - MongoDB stores user data, URLs, and analytics.
  - Proper indexing and data modeling ensure efficient storage and retrieval.

## Technologies Used

- **Node.js:** Server-side runtime environment.
- **Express.js:** Web application framework.
- **MongoDB:** Database for storing user data, URLs, and analytics.
- **Mongoose:** ODM for MongoDB, defining schemas and interactions.
- **Passport.js:** User authentication and session management.
- **EJS (Embedded JavaScript):** Dynamic HTML templates.
- **ShortID:** Generates unique short URL codes.
- **Chart.js:** Visualizes URL analytics.


## How to Run

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Configure MongoDB connection in `config/database.js`.
4. Start the application using `npm start`.

## Future Improvements

- Implement URL expiration.
- Allow custom aliases for short URLs.
- Enhance analytics features.

## Conclusion

This project showcases full-stack development skills, creating a practical and user-friendly service that solves a real-world problem.
