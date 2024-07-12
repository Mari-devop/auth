# Authorization

Single Page Application (SPA) with registration and login. All UI/UX decisions on the frontend developer. 

1. Sign Up from
2. Sign In form
3. Account page
4. Refresh access token, if it is expired, with refresh token. Token expires every 60 seconds. 
5. Entering the site, if the user is not authenticated, redirect to `/sign-in`; if authenticated, redirect to `/me`

### ⚙️ Tech stack:

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://react.dev/)
- [HTTP client Axios](https://axios-http.com/)