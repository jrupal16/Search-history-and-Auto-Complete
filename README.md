# Search-history-and-Auto-Complete

### This is the extended part of Television-show-search-application.

## Search History

- Dedicate a section of your page to show a list of all previous search queries made in the current browser. Title this section Search History.
          1.  This list should only display searches made using the current browser.
          2.  Since we do not have a concept of Logging In, the search list should be tied to the browser, not a User.
- When a new search is submitted, it should automatically appear in the Search History list.
- When a Search History item is clicked, the same search should be conducted.
- The search history should be persistent. Use either Firebase, or an API on your Server to read/write the info to a database or a file.
          1.  Again, the search history must be specific to an individual browser. This means using two separate browsers should yield two separate search histories.
- Upon closing and re-opening the browser, the search history should be retained. To accomplish this, you are expected to read the search history from your API, or from Firebase. Since your API will support multiple search histories for various visitors, you should think of a way to uniquely identify browsers, and use this id to identify specific histories.

