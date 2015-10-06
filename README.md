
## Requirements

You will be building an "Awesome Bands" leaderboard, which is a list of awesome band names paired with the number of times that those bands have been mentioned on Twitter.

For simplicity's sake, we've stubbed out an API interface and polling functionality within a library (see [lib.js](js/lib.js)). The library provides a `Poller()` class that allows you to create a poller, setting some options and providing a callback function that will be called when the poller returns data. It also has a `.start()` method that will start the poller.

Upon each poll, the API will send an array of objects to your callback function. Each object will contain a band name and its associated count, sorted descending by count.

The leaderboard that you build should satisfy these basic requirements:

* Visually adhere to the provided [PSD](AwesomeBands.psd).
* Every 15 seconds, update the leaderboard to show the latest band names and counts, sorted descending by count.
* **Bonus:** Animate the leaderboard update in some way (fade/dissolve, sliding, etc.).

When you're finished, please send your work your Mass Relevance dev contact as a .zip file or (preferably) a link to a public repo on GitHub.
