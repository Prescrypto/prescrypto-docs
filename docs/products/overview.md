---
sidebar_position: 1
---

# Products

StandardDrug Endpoint

This endpoint require to get new credentials to authenticate, so you can have a JWT Token, then look for a specific standard drug, we have sort of 25 thousands records of standard drugs.

We recommend you to use the data you get like an autocomplete UI interface so the client can easily look for medications, and the recomend fields to look for are the "package_description" and "molecula" combined so the search could be more acurate for the medic searching.

The SD_ENDPOINT and the instructions of how to get the JWT token will be send to you by email.

Below there are some examples how to call the StandardDrug Enpoint and the response in its version 2.

## Javascript - Payload 
```javascript
$.ajax( {
url: '{{ SD_ENDPOINT }}' + '/api/v2/standarddrug?query_string=<MEDICATION_QUERY_STRING>',
        dataType: "json",
        method: 'GET',
        headers: {
            'Authorization':'JWT {{ jwt_token }}'
        },
        success: function( data ) {
          console.log( data );
        }
      } );

```


## Curl - Payload 
```bash
curl -X GET \
  'https://{{ SD_ENDPOINT }}/api/v2/standarddrug?query_string=medication' \
  -H 'Authorization: JWT {{ jwt_token }}'
```


## Example of the response for medication _"neomicida"_
```javascript
[
    {
        "package_detail_quantity": "0",
        "package_desc": "Neomixen Neomicina 10 Tabletas Caja",
        "description": "Neomicina 250 MG",
        "molecule": "",
        "package_detail": "",
        "brand": "",
        "measure_units": "",
        "image_url": "https://url/drug_name.png",
        "retail_price": "90.50",
        "uid": "1234567890",
        "order_id": 1
    },,
    ...
]
```


:::note Note: Only 5 medications will be displayed on every search

Besides exists the following param `"page"` that it manage to navigate between the results  for example
`/api/v2/standarddrug?query_string=medication&page=2` gets the second page of the results for the searching

:::

[EOF]