# Cek Resi dan Ongkir App

**How to run the server:**

Go to server folder and do the following: 
 - Create a db in postgres named `cek_resi`
 - Install packages by running : 
    > npm install
 - Migrate db : 
    > sequelize db:migrate
 - Setup a development server: 
    > npm run dev

**Base URL**<br>
http://localhost:5000

**Environment Variable** <br>
> Save your environment variable in .env file and don't forget to add .env to .gitignore.

---
## Register
Register a user and return user's id and email.
* **URL** <br>
/user/register
* **Method** <br>
`POST`
* **URL Params** <br>
None
* **Data Params** <br>
None
* **Success Response**
	* **Code:** 201 <br>
		**Content:**
        ```
        {
            "data": {
               "id": 3,
               "email": "ari@gmail.com",
               "link_avatar": "https://robohash.org/ari@gmail.com"
            }
         }
        ```
* **Error Response:**
    * **Code:** 500 <br>
      **Content:**
      ```
      { 
        "message" : "Internal server error" 
      }
      ```
      
---

## Login
Login to the app.
* **URL** <br>
/user/login
* **Method** <br>
`POST`
* **URL Params** <br>
None
* **Data Params** <br>
Headers : `access_token`
* **Success Response**
	* **Code:** 200 <br>
		**Content:**
        ```
        {
            "id": 3,
            "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJhcmlAZ21haWwuY29tIiwibGlua19hdmF0YXIiOiJodHRwczovL3JvYm9oYXNoLm9yZy9hcmlAZ21haWwuY29tIiwiaWF0IjoxNjI1ODExOTM2fQ.yL5a-ajXKxC_1Ox-Vn7QkEgxcS3e8SD4mZyF4sKVwCQ",
            "email": "ari@gmail.com",
            "link_avatar": "https://robohash.org/ari@gmail.com"
         }
        ```
* **Error Response:**
    * **Code:** 500 <br>
      **Content:**
      ```
      { 
        "message" : "Internal server error" 
      }
      ```
      
---

## Github Login
Login to the app via github.
* **URL** <br>
/login/github
* **Method** <br>
`GET`
* **URL Params** <br>
None
* **Data Params** <br>
None
* **Success Response**
	* **Code:** 200 <br>
		**Content:**
        ```
        {
            "id": 2,
            "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJqdWFuZGFhcmk3MEBnbWFpbC5jb20iLCJsaW5rX2F2YXRhciI6Imh0dHBzOi8vYXZhdGFycy5naXRodWJ1c2VyY29udGVudC5jb20vdS80NzIzNzY5Mz92PTQiLCJpYXQiOjE2MjU4MTI2NDR9.W24BFjdCneDY4X3wciiKs_UCp2UDwhxAwrWKoiLOG4Y",
            "email": "juandaari70@gmail.com",
            "link_avatar": "https://avatars.githubusercontent.com/u/47237693?v=4"
         }
        ```
* **Error Response:**
    * **Code:** 500 <br>
      **Content:**
      ```
      { 
        "message" : "Internal server error" 
      }
      ```
      
---

## Cek Ongkir
Check shipping cost of JNE, POS Indonesia, and TIKI.
* **URL** <br>
/ongkir
* **Method** <br>
`POST`
* **URL Params** <br>
None
* **Data Params** <br>
JSON body example : 
   ```
   {
      "origin": "501", 
      "destination": "114", 
      "weight": "1000"
   }
   ```
   501 and 114 is the city code, weight is in gram.
* **Success Response**
	* **Code:** 200 <br>
		**Content:**
        ```
        [
            {
               "code": "jne",
               "name": "Jalur Nugraha Ekakurir (JNE)",
               "costs": [
                     {
                        "service": "OKE",
                        "description": "Ongkos Kirim Ekonomis",
                        "cost": [
                           {
                                 "value": 26000,
                                 "etd": "4-5",
                                 "note": ""
                           }
                        ]
                     },
                     {
                        "service": "REG",
                        "description": "Layanan Reguler",
                        "cost": [
                           {
                                 "value": 28000,
                                 "etd": "2-3",
                                 "note": ""
                           }
                        ]
                     }
               ]
            },
            {
               "code": "pos",
               "name": "POS Indonesia (POS)",
               "costs": [
                     {
                        "service": "Paket Kilat Khusus",
                        "description": "Paket Kilat Khusus",
                        "cost": [
                           {
                                 "value": 24000,
                                 "etd": "3 HARI",
                                 "note": ""
                           }
                        ]
                     }
               ]
            },
            {
               "code": "tiki",
               "name": "Citra Van Titipan Kilat (TIKI)",
               "costs": [
                     {
                        "service": "ECO",
                        "description": "Economy Service",
                        "cost": [
                           {
                                 "value": 24000,
                                 "etd": "4",
                                 "note": ""
                           }
                        ]
                     },
                     {
                        "service": "REG",
                        "description": "Regular Service",
                        "cost": [
                           {
                                 "value": 27000,
                                 "etd": "2",
                                 "note": ""
                           }
                        ]
                     },
                     {
                        "service": "ONS",
                        "description": "Over Night Service",
                        "cost": [
                           {
                                 "value": 40000,
                                 "etd": "1",
                                 "note": ""
                           }
                        ]
                     }
               ]
            }
         ]
        ```
* **Error Response:**
    * **Code:** 500 <br>
      **Content:**
      ```
      { 
        "message" : "Internal server error" 
      }
      ```
      
---

## Get Cities
Get cities code.
* **URL** <br>
/ongkir
* **Method** <br>
`GET`
* **URL Params** <br>
None
* **Data Params** <br>
None
* **Success Response**
	* **Code:** 200 <br>
		**Content:**
        ```
        [
            {
               "id": 1,
               "city_name": "Aceh Barat"
            },
            {
               "id": 2,
               "city_name": "Aceh Barat Daya"
            }
        ]
        ```
* **Error Response:**
    * **Code:** 500 <br>
      **Content:**
      ```
      { 
        "message" : "Internal server error" 
      }
      ```
      
---