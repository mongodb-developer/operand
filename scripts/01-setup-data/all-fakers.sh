#!/bin/sh
# this is a script that will generate a lot of random product data for your demo
#node ../../data/data-reset.js
cd ../../; data/fake-users.js; 
node ../../data/fake-games.js
node ../../data/fake-events.js
cd -
