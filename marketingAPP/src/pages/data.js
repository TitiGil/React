import { createFactory } from "react";


///simulation of backend

var product=[
  {
    "id": 0,
    "name": "Bryant",
    "price": "132,069.65",
    "measuringType": 0
  },
  {
    "id": 1,
    "name": "Berger",
    "price": "88,834.15",
    "measuringType": 1
  },
  {
    "id": 2,
    "name": "Moses",
    "price": "465,188.27",
    "measuringType": 0
  },
  {
    "id": 3,
    "name": "Pearson",
    "price": "485,942.89",
    "measuringType": 0
  },
  {
    "id": 4,
    "name": "Vega",
    "price": "287,655.92",
    "measuringType": 1
  },
  {
    "id": 5,
    "name": "Huff",
    "price": "250,748.59",
    "measuringType": 1
  },
  {
    "id": 6,
    "name": "Roy",
    "price": "454,290.39",
    "measuringType": 1
  },
  {
    "id": 7,
    "name": "Blackburn",
    "price": "132,033.97",
    "measuringType": 0
  },
  {
    "id": 8,
    "name": "Osborn",
    "price": "336,409.27",
    "measuringType": 1
  },
  {
    "id": 9,
    "name": "Mercado",
    "price": "99,586.32",
    "measuringType": 0
  }
];
var factor=[
  {
    "id": 0,
    "sId": 8,
    "sName": "saeedy",
    "mName": "saeedy",
    "total": "363,961.27",
    "date": "2019-12-31T10:51:05 +08:00",
    "list": [
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      },
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      },
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      },
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      }
    ]
  },
  {
    "id": 1,
    "sId": 10,
    "sName": "naghavi",
    "mName": "hoseini",
    "total": "132,983.81",
    "date": "2016-03-04T06:36:01 +08:00",
    "list": [
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      }
    ]
  },
  {
    "id": 2,
    "sId": 10,
    "sName": "hoseini",
    "mName": "hoseini",
    "total": "202,365.48",
    "date": "2021-08-20T05:00:11 +07:00",
    "list": [
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      },
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      },
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      },
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      },
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      }
    ]
  },
  {
    "id": 3,
    "sId": 1,
    "sName": "ahmadi",
    "mName": "saeedy",
    "total": "269,309.64",
    "date": "2015-05-12T03:51:35 +07:00",
    "list": [
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      },
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      },
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      },
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      },
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      }
    ]
  },
  {
    "id": 4,
    "sId": 1,
    "sName": "ahmadi",
    "mName": "naghavi",
    "total": "170,697.03",
    "date": "2016-04-06T07:42:50 +07:00",
    "list": [
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      }
    ]
  },
  {
    "id": 5,
    "sId": 1,
    "sName": "ahmadi",
    "mName": "ahmadi",
    "total": "16,726.59",
    "date": "2021-12-22T01:23:29 +08:00",
    "list": [
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      },
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      }
    ]
  },
  {
    "id": 6,
    "sId": 8,
    "sName": "ahmadi",
    "mName": "hoseini",
    "total": "39,607.57",
    "date": "2019-07-05T12:41:07 +07:00",
    "list": [
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      },
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      },
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      },
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      }
    ]
  },
  {
    "id": 7,
    "sId": 9,
    "sName": "hoseini",
    "mName": "nazari",
    "total": "351,133.66",
    "date": "2014-11-10T02:43:37 +08:00",
    "list": [
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      },
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      }
    ]
  },
  {
    "id": 8,
    "sId": 7,
    "sName": "naghavi",
    "mName": "nazari",
    "total": "279,797.31",
    "date": "2021-03-10T12:05:28 +08:00",
    "list": [
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      },
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      },
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      },
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      }
    ]
  },
  {
    "id": 9,
    "sId": 9,
    "sName": "hoseini",
    "mName": "hoseini",
    "total": "157,894.38",
    "date": "2016-01-29T06:58:39 +08:00",
    "list": [
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      }
    ]
  },
  {
    "id": 10,
    "sId": 4,
    "sName": "hoseini",
    "mName": "naghavi",
    "total": "389,652.66",
    "date": "2022-08-05T04:27:12 +07:00",
    "list": [
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      },
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      },
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      }
    ]
  },
  {
    "id": 11,
    "sId": 9,
    "sName": "saeedy",
    "mName": "saeedy",
    "total": "21,780.47",
    "date": "2019-01-24T01:43:50 +08:00",
    "list": [
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      },
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      }
    ]
  },
  {
    "id": 12,
    "sId": 7,
    "sName": "saeedy",
    "mName": "nazari",
    "total": "336,492.13",
    "date": "2018-04-21T05:17:23 +07:00",
    "list": [
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      },
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      }
    ]
  },
  {
    "id": 13,
    "sId": 5,
    "sName": "ahmadi",
    "mName": "nazari",
    "total": "158,239.34",
    "date": "2021-12-07T01:20:48 +08:00",
    "list": [
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      }
    ]
  },
  {
    "id": 14,
    "sId": 10,
    "sName": "naghavi",
    "mName": "ahmadi",
    "total": "107,463.18",
    "date": "2017-09-16T03:13:02 +07:00",
    "list": [
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      }
    ]
  },
  {
    "id": 15,
    "sId": 2,
    "sName": "naghavi",
    "mName": "hoseini",
    "total": "217,476.10",
    "date": "2019-09-09T07:51:52 +07:00",
    "list": [
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      },
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      },
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      },
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      }
    ]
  },
  {
    "id": 16,
    "sId": 7,
    "sName": "saeedy",
    "mName": "naghavi",
    "total": "220,608.07",
    "date": "2015-01-13T10:53:59 +08:00",
    "list": [
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      },
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      },
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      },
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      }
    ]
  },
  {
    "id": 17,
    "sId": 3,
    "sName": "naghavi",
    "mName": "hoseini",
    "total": "289,022.28",
    "date": "2022-05-26T09:12:33 +07:00",
    "list": [
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      },
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      },
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      },
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      }
    ]
  },
  {
    "id": 18,
    "sId": 6,
    "sName": "saeedy",
    "mName": "nazari",
    "total": "230,145.71",
    "date": "2016-03-07T04:15:56 +08:00",
    "list": [
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      },
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      },
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      },
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      }
    ]
  },
  {
    "id": 19,
    "sId": 2,
    "sName": "naghavi",
    "mName": "hoseini",
    "total": "79,354.13",
    "date": "2020-07-08T07:56:56 +07:00",
    "list": [
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      },
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      },
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      },
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      },
      {
        "pid": 7,
        "pcost": 148492,
        "count": 8
      }
    ]
  }
];
export const dL=(type) =>{
 switch(type){
  case 'product':
    return product.length;
  case 'factors':
    return factor.length;
 }
}

export const  retData=(n,type)=>{
console.log("requested by :"+ n + ' type :' +type );
console.log(product.slice(n*10,(n*10)+10)+ " " + product[0].id);
  switch(type){
    case '0': 
      return product.slice(n*10,(n*10)+10);
    case '1':
      return factor.slice(n*10,(n*10)+10);
  }
  return 
}