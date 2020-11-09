#!/bin/sh
cat <<EOF | nms -a
{
   "_id": {
      "$oid": "5f77f8ddd7652a0f18b1587d"
   },
   "location": {
      "coordinates": [
         {
            "$numberDouble": "-44.5399"
         },
         {
            "$numberDouble": "-130.1201"
         }
      ],
      "type": "Point"
   },
   "created": {
      "$date": {
         "$numberLong": "1601698013214"
      }
   },
   "lastlogin": {
      "$date": {
         "$numberLong": "1601698005169"
      }
   },
   "likes": [],
   "tokens": [],
   "first_name": "Nathan",
   "last_name": "Grant",
   "email": "Phyllis.Altenwerth70@yahoo.com",
   "password": "$2a$05$aYUUJAHzusq999ePWLkQ3eJmijb07YUF2QmIVfLjLFJQ0AORmwoz6",
   "addr1": "1854 Funk Throughway",
   "city": "Hesselhaven",
   "state": "VT",
   "zipcode": "33078-4894",
   "country": "Spain",
   "telephone": "(389) 418-4807 x36622",
   "role": "visitor",
   "acceptedTOS": {
      "$date": {
         "$numberLong": "1601698013214"
      }
   },
   "purchased": [
      {
         "purchased": {
            "$date": {
               "$numberLong": "1601698005169"
            }
         },
         "_id": {
            "$oid": "5f77f8ddd7652a0f18b15887"
         }
      },
      {
         "purchased": {
            "$date": {
               "$numberLong": "1601698005169"
            }
         },
         "_id": {
            "$oid": "5f77f8ddd7652a0f18b15886"
         }
      },
      {
         "purchased": {
            "$date": {
               "$numberLong": "1601698005169"
            }
         },
         "_id": {
            "$oid": "5f77f8ddd7652a0f18b15885"
         }
      },
      {
         "purchased": {
            "$date": {
               "$numberLong": "1601698005169"
            }
         },
         "_id": {
            "$oid": "5f77f8ddd7652a0f18b15884"
         }
      },
      {
         "purchased": {
            "$date": {
               "$numberLong": "1601698005169"
            }
         },
         "_id": {
            "$oid": "5f77f8ddd7652a0f18b15883"
         }
      },
      {
         "purchased": {
            "$date": {
               "$numberLong": "1601698005169"
            }
         },
         "_id": {
            "$oid": "5f77f8ddd7652a0f18b15882"
         }
      },
      {
         "purchased": {
            "$date": {
               "$numberLong": "1601698005169"
            }
         },
         "_id": {
            "$oid": "5f77f8ddd7652a0f18b15881"
         }
      },
      {
         "purchased": {
            "$date": {
               "$numberLong": "1601698005169"
            }
         },
         "_id": {
            "$oid": "5f77f8ddd7652a0f18b15880"
         }
      },
      {
         "purchased": {
            "$date": {
               "$numberLong": "1601698005169"
            }
         },
         "_id": {
            "$oid": "5f77f8ddd7652a0f18b1587f"
         }
      },
      {
         "purchased": {
            "$date": {
               "$numberLong": "1601698005169"
            }
         },
         "_id": {
            "$oid": "5f77f8ddd7652a0f18b1587e"
         }
      },
      null
   ],
   "orders": [],
   "__v": {
      "$numberInt": "0"
   }
}
EOF