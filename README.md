# Online Project Submission System with Multi-User Authentication

## Overview

The **Online Project Submission System** is a web application designed to streamline the process of submitting, reviewing, and approving college projects. The system supports multiple user roles, including students, project guides, and the Head of Department (HoD), each with specific functionalities and dashboards. The platform ensures secure and efficient project management with OTP-based authentication and password recovery.

## Features

- **Multi-User Authentication:** Separate login and registration for Students, Project Guides, and HoDs.
- **Registration via Mobile Number or Gmail:** Users can register using their mobile number or Gmail, with OTP verification.
- **Project Submission:** Students can submit project details, including project name, team members, registration numbers, and upload SRS files.
- **Review and Approval Workflow:** Project Guides and HoDs can review and approve or reject submitted projects.
- **Automatic Notifications:** Students receive email or SMS notifications upon project approval or rejection.
- **Forgot Password Feature:** Users can reset their password via OTP for added security.
- **Secure and User-Friendly Interface:** The system is designed with a focus on security and ease of use.

## Technology Stack

### Backend:
- **Node.js**: JavaScript runtime for building the backend.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing user and project data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **JWT (jsonwebtoken)**: For handling authentication via JSON Web Tokens.
- **Bcrypt.js**: For hashing passwords.
- **Multer**: For handling file uploads.
- **Nodemailer**: For sending emails.
- **Cors**: For handling Cross-Origin Resource Sharing.
- **Dotenv**: For managing environment variables.
- **OTPLib**: For generating and verifying OTPs.

### Frontend:
- **React.js**: JavaScript library for building user interfaces.
- **React Router**: For client-side routing.
- **Axios**: For making HTTP requests.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Toastify**: For notifications.
- **PostCSS**: For processing Tailwind CSS.

## Installation

### Prerequisites
- **Node.js**: Ensure Node.js is installed on your system.
- **MongoDB**: Set up MongoDB locally or use a cloud service like MongoDB Atlas.


