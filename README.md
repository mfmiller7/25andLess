# 25 and Less
Developing a web application to display Boston venues with music events priced under $25, using interactive maps.

## How to Run the Backend
#### Prerequisites:
Have Node.js installed on your machine, click [here](https://nodejs.org/) to download
#### Setup:
Open your terminal and clone the repository:
```
git clone git@github.com:mfmiller7/25andLess.git
```
Navigate to the project directory:
```
git checkout backend
cd 25andLess/backend
```
Create a .env file:
```
PORT=3000
API_URL='https://app.ticketmaster.com/discovery/v2/events'
API_KEY=your-api-key
```
Install necessary packages:
```
npm install
```
Start the server:
```
node server.js
```
Access the server:

Open your browser and navigate to http://localhost:3000. Use the following venue IDs to check out upcoming shows priced under $25:

- Paradise Rock Club: KovZpZA11JtA
- Brighton Music Hall: KovZpapwne
- Roadrunner: Z7r9jZa7rs
- House of Blues: KovZpZAEA7eA
- Orpheum Theatre: KovZpZA1J7JA
- MGM: KovZ917AEJz
- Middle East - Zuzu: KovZpa6vJe
- Middle East - Corner Bakery: KovZpa8pwe
- Middle East - Downstairs: KovZpZAId1kA
- Middle East - Upstairs: rZ7HnEZa7LQ
