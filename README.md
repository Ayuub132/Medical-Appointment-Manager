# GP Surgery Appointment System

Project Overview

The GP Surgery Appointment System is a full-stack application designed to streamline the booking, management, and updating of medical appointments within a GP surgery setting. This system allows patients to book and cancel appointments, doctors to view and update medical records, and receptionists to manage appointment schedules. Built using React for the front-end and Node.js for the back-end, this project emphasizes security, accessibility, and user-friendly design.


# Project Setup
To run this project locally:

Clone the repository

Navigate to the project directory

Install dependencies

Start the backend server

Start the front-end





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)




### Features

# Patient Functionality:

Book appointments by selecting dates and times.

View upcoming appointments and cancel if necessary.

# Doctor Functionality:

Access a list of appointments.

View and update patient medical records, including vaccination history.

# Receptionist Functionality:

Manage all appointments.

Delete appointments from the schedule when necessary.



# Technologies Used

Front-End: React, govuk-react for UI components following UK Government Digital Service guidelines.

Back-End: Node.js, Express for API handling.

Database: SQLite (local) and central vaccine database synchronization.

Security: Password hashing with bcrypt, basic error handling, and data validation.

Other: RESTful API design, JavaScript, HTML, and CSS.




# File Structure

Here is an overview of key files and components in this repository:


Front-End Components

Booking.js: Handles patient appointment booking, including date and time selection.

BookingInput.js: Renders the date picker and time selector for booking appointments.

PatientAppointments.js: Allows patients to view and cancel appointments.

DoctorMedical1.js: Displays a list of patients for doctors, enabling navigation to individual medical records.

DoctorUpdateMedicalF.js: Allows doctors to update a selected patient's vaccination record.

Back-End Endpoints (in server.js)

/bookings (POST): Processes patient booking requests, verifies availability, and updates the database.

/appointments (DELETE): Deletes appointments based on patient or receptionist actions.

/patients (GET): Retrieves patient information for doctors to view and update medical records.




# Usage

Booking Appointments: Patients can book appointments by selecting a date and time.

Viewing and Cancelling: Patients can view their upcoming appointments and cancel if necessary.

Doctor View: Doctors can access and update medical records and vaccine history.

Receptionist Dashboard: Receptionists can view all appointments and manage them as needed.


### Security Considerations

Passwords are hashed using bcrypt for secure storage.

Basic error handling for form inputs, ensuring data integrity.

Vulnerabilities like SQL injection, XSS, and CSRF are acknowledged; future improvements include implementing prepared statements and enhancing client-side validation.

