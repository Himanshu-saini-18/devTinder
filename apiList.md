# DevTinder API's

# authRouter

- POST /signup
- POST /login
- POST /Logout

# profileRouter

- GET /profile/view
- PATCH /profile/edit
- PATCH /profile/password // Forgot password API

# connectionRequestRouter

<!-- - POST /request/send/intereted/:userId    -->
<!-- - POST /request/send/ignored/:userId -->

//make these api dynamic for both interested and ignored

- POST /request/send/:status/:userId

<!-- - POST /request/review/accepted/:requestId
- POST /request/review/rejected/:requestId -->

- POST /request/review/status/:requestId

# userRouter

- GET /user/requests/received
- GET /user/connections
- GET /user/feed - Gets you the profiles of other users on platforms

Status: ignore, interested, accepted, rejected
