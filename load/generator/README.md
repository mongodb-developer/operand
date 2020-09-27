# AtlasChallenge
Atlas Challenge for AWS Re:Invent 2019

The Challenge Stitch Application will automatically make calls on a per minute Stitch scheduled trigger to several collections in the dump restore data set: https://drive.google.com/file/d/1BqFIk2skep94IMvhRQHgkJ6rK3mh_CvW/view?usp=sharing

- sports.players
- social.linkedInUsers
- sample_training.companies
- sample_airbnb.listingsAndReviews

These calls will result in a load to monitor and profile in Atlas, as well as suggested indexes in Atlas' Performance Advisor.
![Screenshot](https://user-images.githubusercontent.com/15270412/69666842-88667480-1052-11ea-8c8d-023961c70a52.png)

Also, this application integrates with Twilio simple web application (index.html) to write to the Atlas application.

![Screenshot](https://user-images.githubusercontent.com/15270412/69691220-0b5bef00-1094-11ea-80e2-ed0df68c089f.png)


### Prerequisites
mongorestore the data in the dump file to your M10 Atlas Cluster: https://drive.google.com/file/d/1BqFIk2skep94IMvhRQHgkJ6rK3mh_CvW/view?usp=sharing
MongoDB Atlas programmatic API Key: http://docs.atlas.mongodb.com/configure-api-access/#programmatic-api-keys
A properly installed copy of stitch-cli that has been added to your system PATH.

### Configure Cluster Network and Database Access 
- Make sure to IP whitelist your M10 cluster.  
- Add a read-only database user: username: atlas , password: challenge

### Stitch Application Install Instructions
1. Download Challenge Application folder.
2. Empty stitch.json to be {}
3. Alter services -> mongodb-atlas -> config.json to use your "clusterName".

```javascript
{ 
    "name": "mongodb-atlas",  
    "type": "mongodb-atlas",  
    "config": { 
        "clusterName": "<<ENTER_YOUR_CLUSTERNAME>>",  
        "readPreference": "primary",  
        "wireProtocolEnabled": false  
    },  
    "version": 1 
}  
```


4. From your terminal, cd into your application folder.

```stitch-cli import  --strategy=merge```

accept the defaults and name the application "Challenge" 

You will receive and error that states:  

```failed to import app: error: error validating Service: TwilioReInventChallenge: could not find secret "challenge_sh"``` 
  
DON'T PANIC! All is not lost. Simply paste the following in the terminal to add the secret:  

```stitch-cli secrets add --name=challenge_sh --value=c2fc601a087cedd075751792c6df####```   

After the secret is created, since there is already a Stitch app from the previous import, re-import as a replace from the command line with this command:

```stitch-cli import  --strategy=replace```

The last thing you need to do is confirm the changes from the terminal.

![Screenshot](https://user-images.githubusercontent.com/15270412/69675917-527ebb80-1065-11ea-8665-6cab22f02371.png) . 


From Atlas Stitch UI, enable Hosting.
Download the index.html and replace app Stitch app name in line 85 of index.html
Save and import into Stitch hosting. This will overwrite the index.html file.  

## FINE TUNING APPLICATION

### Disable Drafts from Deploy Configuration - IMPORTANT!

![Screenshot](https://user-images.githubusercontent.com/15270412/69676438-5a8b2b00-1066-11ea-85da-775fa5e4604a.png)


In Values, change Competitor value to "Competitor << ClusterNumber >>" - ex. "Competitor 9".


Later to test if working... 
Configure trigger0 to fire NotifyChallenge function upon insertion into AtlasChallenge.superheroes collection.   
To test on Atlas.superheroes insertion, open
``` <<StitchAppID>>.mongodbstitch.com```
to write into database.

_________________________

### To Set-Up for Initial Quiz on Atlas and iPad, see Quiz_Set-Up_ReadMe.md
### To reset: See ResetReadMe.md
