NextAuth uses 2 default keys: NEXTAUTH_URL and NEXTAUTH_SECRET.

NextAuth uses 2 firebase keys: GOOGLE_ID and GOOGLE_SECRET.
Create a Firebase project, enable Google Auth Provider, get the keys and put them in .env.local .

--- Be Sure to create Firebase Project before accessing it on google cloud console ---

You will also need to add the redirect_uri in google cloud console
Go to APIs & Services -> Credentials -> OAuth 2.0 Client IDs (click on first row)
Then, add the url to 'Authorized JavaScript origins' (just main url) and 'Authorized redirect URIs' (full url)
Remember to repeat this step using the production url when launching the app.

--- Be Sure to create Firebase Project before accessing it on google cloud console ---
