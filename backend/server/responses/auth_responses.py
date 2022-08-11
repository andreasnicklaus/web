class AuthenticationResponses:
    USER_CREATED = lambda user: f'User {user.username} successfully created!'
    LOGIN_SUCCESS = lambda username: f'Successfully logged in as {username}.'

    LOGOUT_SUCCESS = 'You have been logged out.'
    LOGGED_IN = 'You are logged in.'

    LOGIN_REQUIRED = 'You need to log in to gain access to this site'
    PASSWORD_OR_USERNAME_MISSING = 'Please give both a password and a username!'
    USER_NOT_EXIST = 'You tried to log in with a username that is unknown. Please sign up before logging in.'
    PASSWORD_INCORRECT = 'There is no such username-password-combniation'
    SIGNATURE_EXPIRED = 'Your login has expired. Please log in again'
    INVALID_TOKEN = 'There seems to be a problem with your authentication. Please try to log in again.'

    UNKNOWN_IP = 'You seem to try to log in from a new IP address. Please check your email account for verification.'
