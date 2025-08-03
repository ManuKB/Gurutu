# React UI App

This project is a React-based user interface application that includes a dashboard, navigation, and authentication features. It is designed to provide a seamless user experience with a focus on modular components and theme-based styling.

## Features

- **Dashboard**: The main view of the application where users can access various functionalities.
- **Left Navigation**: A navigation structure that allows users to navigate through different sections of the application.
- **Left Menu**: Provides options for creating new items, viewing a list of items, and logging out.
- **List Modal**: A modal component that allows users to edit or delete items from the list.
- **Login Page**: A dedicated page for user authentication.
- **Theme-based CSS**: The application supports primary and secondary color themes for a consistent look and feel.

## Project Structure

```
react-ui-app
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── Dashboard.tsx
│   │   ├── LeftNavigation.tsx
│   │   ├── LeftMenu.tsx
│   │   ├── ListModal.tsx
│   │   └── Login.tsx
│   ├── styles
│   │   └── theme.css
│   ├── App.tsx
│   ├── index.tsx
│   ├── routes
│   │   └── PrivateRoute.tsx
│   ├── utils
│   │   └── auth.ts
│   └── types
│       └── index.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd react-ui-app
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:
```
npm start
```
This will launch the application in your default web browser.

## Authentication

The application includes a login page. If a user is unauthenticated, they will be redirected to the login screen. Authentication utilities are provided in the `src/utils/auth.ts` file.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.