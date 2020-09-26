#!/bin/sh
echo "db.getSiblingDB('operandProd').runCommand(
  {
    'collMod' : 'users',
    'validator' : {
      '$jsonSchema' : {
        'bsonType' : 'object',
        'properties' : {
          'taxid' : {
            'encrypt' : {
              'keyId' : [UUID('e114f7ad-ad7a-4a68-81a7-ebcb9ea0953a')],
              'algorithm' : 'AEAD_AES_256_CBC_HMAC_SHA_512-Random',
            }
          },
          'creditCardNumber' : {
            'encrypt' : {
              'keyId' : [UUID('33408ee9-e499-43f9-89fe-5f8533870617')],
              'algorithm' : 'AEAD_AES_256_CBC_HMAC_SHA_512-Deterministic',
              'bsonType' : 'string'
            }
          }
        }
      }
    }
  }
)
"
echo "Field level encryption enabled!"

