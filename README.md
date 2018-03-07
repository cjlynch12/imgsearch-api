# Image Search Abstraction Layer Microservice API Project

---

by Carter Lynch

Created with Mongodb, Express.js, Nodejs and Google Custom Search API.

See a live demo at [glitch](https://cjl12-imgsearch.glitch.me).


# API Search Abstraction Layer

A freecodecamp.org backend microservice project.

see live demo hosted by glitch.me - [cjl12-imgsearch.glitch.me](https://cjl12-imgsearch.glitch.me)

Created by Carter Lynch 
Github

* User Story: I can get the image URLs, alt text and page urls for a set of images relating to a given search string.
* User Story: I can paginate through the responses by adding a ?offset=2 parameter to the URL.
* User Story: I can get a list of the most recently submitted search strings.
          
## Example search usage:
  
    cjl12-imgsearch.glitch.com/search/Telephone
    cjl12-imgsearch.glitch.com/search/Hot Air Baloons
    cjl12-imgsearch.glitch.com/search/sunset?offset=3
          
        
## Search output:
        
    [{
      "url":"https://www.chillfactorperformance.info/wp-content/uploads/2017/03/telephone1.jpg",
      "description":"GRAHAM BELL PATENTS TELEPHONE",
      "pageUrl":"https://www.chillfactorperformance.info/?p=9776"
    },{ 
      "url":"https://i.ytimg.com/vi/NK92DUyyngc/maxresdefault.jpg",
      "description":"Telephone Ringing sound Effect - YouTube",
      "pageUrl":"https://www.youtube.com/watch?v=NK92DUyyngc"
    },{ 
      "url":"https://www.forgettingthepill.com/sc_images/products/AMPLIPOWER60-2.jpg",
      "description":"Amplified Ultra Corded Telephone - Item AMPLIPOWER60 ...",
      "pageUrl":"https://www.forgettingthepill.com/products/amplified-ultra-corded-telephone-item-amplipower60"
    },{ 
      "url":"http://www.crystalscript.com/wp-content/uploads/2017/03/telephone.jpg",
      "description":"Telephone Orders - Crystal Script",
      "pageUrl":"http://www.crystalscript.com/product/telephone-orders/"
    },{
      "url":"https://cdn.pixabay.com/photo/2013/07/13/11/27/telephone-158190_960_720.png",
      "description":"Free vector graphic: Telephone, Phone, Old, Ringing, Red - Free ...",
      "pageUrl":"https://pixabay.com/en/telephone-phone-old-ringing-red-158190/"
    },{
      "url":"http://i1.adis.ws/i/pcec/KX-TSC11B_ALT01?$PDP-Zoom-Image-Desktop$",
      "description":"KX-TSC11B - PanasonicB2C",
      "pageUrl":"http://shop.panasonic.com/cordless-corded-telephones/business-telephones/KX-TSC11B.html"
    },{
      "url":"https://cdn.pixabay.com/photo/2017/09/28/22/23/telephone-2797304_960_720.png",
      "description":"Free vector graphic: Telephone, Old, The Past - Free Image on ...",
      "pageUrl":"https://pixabay.com/en/telephone-old-the-past-retro-style-2797304/"
    },{
      "url":"https://www.coursepride.com/wp-content/uploads/2016/01/Telephone-high-res-1024x682.jpg",
      "description":"Course Pride Telephone Number - Course Pride",
      "pageUrl":"https://www.coursepride.com/course-pride-telephone-number/"
    },{
      "url":"http://i.ebayimg.com/00/s/MzAwWDMwMA==/z/krcAAOSwR0JUNg6S/$_35.JPG?set_id=2",
      "description":"Antique Telephone | eBay",
      "pageUrl":"http://www.ebay.com/bhp/antique-telephone"
    },{
      "url":"http://bethebetterbroker.ca/wp-content/uploads/2015/10/telephone.jpg",
      "description":"UNA's Annual Membership Survey (telephone) | Local 121 Rockyview ...",
      "pageUrl":"http://una121.blogspot.com/2016/04/unas-annual-membership-survey-telephone.html"
    }]





## History Usage:
[cjl12-imgsearch.glitch.me/history](https://cjl12-imgsearch.glitch.me/history)
     
     
## History Output

    [{
      "searchTerm":"CD Collection","time":"2017-12-29T21:57:51.211Z"
    },{
      "searchTerm":"history","time":"2017-12-29T21:58:05.052Z"
    },{
      "searchTerm":"ocean","time":"2017-12-29T22:02:14.756Z"
    },{
      "searchTerm":"Moon Base","time":"2017-12-29T22:02:23.130Z"
    },{
      "searchTerm":"Mustang","time":"2017-12-29T22:02:31.979Z"
    },{
      "searchTerm":"gold medal","time":"2017-12-29T22:03:09.200Z"
    },{
      "searchTerm":"finish line","time":"2017-12-29T22:03:25.134Z"
    },{
      "searchTerm":"white crow","time":"2017-12-29T22:04:41.105Z","page":1
    },{
      "searchTerm":"blizzard","time":"2017-12-29T22:05:40.517Z","page":1
    },{
      "searchTerm":"blizzard","time":"2017-12-29T22:05:48.094Z","page":"3"
    },{
      "searchTerm":"lock and key","time":"2017-12-29T22:09:51.825Z","page":1
    },{
      "searchTerm":"Super Mario","time":"2017-12-29T22:50:08.561Z","page":1
    },{
      "searchTerm":"Telephone","time":"2017-12-29T22:51:37.389Z","page":1
    }]
        
