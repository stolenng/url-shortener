FreeCodeCamp API Basejump: URL Shortener Microservice
User stories:

I can pass a URL as a parameter and I will receive a shortened URL in the JSON response. <br />
When I visit that shortened URL, it will redirect me to my original link. <br />
Example creation usage: <br />
https://url-shortener-stolenng-stolenng.c9users.io/new/https://www.google.com <br />
https://url-shortener-stolenng-stolenng.c9users.io/new/http://foo.com:80 <br />
Example creation output <br />
{ "original_url":"http://foo.com:80", "short_url":http://goo.gl/fbsS" } <br />

Will redirect to: <br /> 
https://www.google.com/ <br />