# googlePlaceFromId

## How to do this 

1. Make sure you are logged into your google cloude CLI https://cloud.google.com/sdk/gcloud/reference/auth/login
2. Clone this repository to your local
3. Make sure you have Node insatlled 
4. Open terminal from your project directory 

Run:

```
npm install
```


```
gcloud functions deploy getPlaceFromId --runtime=nodejs16 --trigger-http --set-env-vars APIKEY=YOUR_API_KEY
```
Add your api key here so that it will be saved in environment variable(Safe)