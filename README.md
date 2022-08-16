Capstone Project: Home Pro <br>
Authors: Eze Adiele | Gao Liu | Madhu Madhavan | Scott Normore | Saksham Ohri | Madhu Madhavan | Liam MacDiarmid <br>

To run Home pro app successfully, do the following steps:<br>
<br>
--Step 1: Change into the application's main directory<br>
<br>
cd Home-pro<br>
<br>
--Step 2: insstall packages<br>
<br>
npm install --force<br>
<br>
--Step 3: add .env file in the home pro!
<br>
<br>
--Step 4: Edit .env file to the following format. Enter the required studd in the diamond <> brackets<br>
<br>
<br>ACCESS_TOKEN_SECRET=<'64 bit key string'>
<br>REFRESH_TOKEN_SECRET=<'64 bit key string'>
<br>REACT_APP_API_ENDPOINT=<'back end server domain>
<br>DATABASE_API_KEY=<'database api key'>
<br>
<br>An example .env file to run the application on the local machine, use the following:
<br>
<br>ACCESS_TOKEN_SECRET=b70d12e477881311eb7b2da0b39b37fab99cb61197422495214269e50b0abe34ac83ced9fb044bd644616ab6d612f0f743536a89f7f8da7a5381b4d8dfa7edcf
<br>REFRESH_TOKEN_SECRET=ce723652cdaa26ce7000e9c0ca1577bbfe1908d952f5e1dce0f633fd07978dfa5be672d1ca435aa013cb9e4597ff912e55682b2d915b1ce1f7889e3e93ceb1d6
<br>REACT_APP_API_ENDPOINT=http://localhost:5000
<br>DATABASE_API_KEY=<'local mongo db url'>
<br>
<br>--Step 5: Run the application<br>
<br>
npm start <br> 

 
