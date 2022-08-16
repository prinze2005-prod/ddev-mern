<h1>Capstone Project: Home Pro </h1>
<h3>Authors: Eze Adiele | Gao Liu | Madhu Madhavan | Scott Normore | Saksham Ohri | Madhu Madhavan | Liam MacDiarmid </h3>
<hr>
<h2>Introduction</h2>
This web app allows clients book appointments with service technicians, and that an admin can manage these technicians. Broadly, the scope of the project is to develop a web-based platform that connects individuals with service providers (“technicians”) who can fulfill their needs. This application is being made for “AK Computer solutions Inc”. They requested that this system should be able to operate on mobile devices and should be able to meet their business needs. These needs include being able to pay technicians, track transactions, and provide financial and performance data. <br>
<h2>Set up the application</h2>
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
<br>--Step 5: Add the following docuement in a collection named "Accounts"
<br>
<br>email
:
"DesiredAdminAccount@someemail.com"<br>
password:"$2b$10$CCGSKPlFbVyN4jRw.cK9puDmcoIRjKSLy2Hz/kRjF1ib.7W3TKfgu"
authorization:"Admin"
<br>
<br> This will create an admin account with the pasword: "Password@1234"
<br>
<br>--Step 6: Run the application<br>
<br>
npm start <br> 
<br>
<br> Feel free to contact us if you need assistance in running the project

 
