## Unit Assignment: Flixster

Submitted by: Ben Snyder

Estimated time spent: 18 hours spent in total

Deployed Application (*required*): https://flixster-starter-cdt6.onrender.com/

### Application Features

#### REQUIRED FEATURES

- [x] *Display Movies*
  - [x] Users can view a list of current movies from The Movie Database API in a grid view.
    - [x] Movie tiles should be reasonably sized (at least 6 playlists on your laptop when full screen; large enough that the playlist components detailed in the next feature are legible).
  - [x] For each movie displayed, users can see the movie's:
    - [x] Title
    - [x] Poster image
    - [x] Vote average
  - [x] Users can load more current movies by clicking a button which adds more movies to the grid without reloading the entire page.
- [x] *Search Functionality*
  - [x] Users can use a search bar to search for movies by title.
  - [x] The search bar should include:
    - [x] Text input field
    - [x] Submit/Search button
    - [x] Clear button
  - [x] Movies with a title containing the search query in the text input field are displayed in a grid view when the user either:
    - [x] Presses the Enter key
    - [x] Clicks the Submit/Search button
  - [x] Users can click the Clear button. When clicked:
    - [x] Most recent search results are cleared from the text input field and the grid view and all current movies are displayed in a grid view
- [x] *Design Features*
  - [x] Website implements all of the following accessibility features:
    - [x] Semantic HTML
    - [x] [Color contrast](https://webaim.org/resources/contrastchecker/)
    - [x] Alt text for images
  - [x] Website implements responsive web design.
    - [x] Uses CSS Flexbox or CSS Grid
    - [x] Movie tiles and images shrink/grow in response to window size
  - [x] Users can click on a movie tile to view more details about a movie in a pop-up modal.
    - [x] The pop-up window is centered in the screen and does not occupy the entire screen.
    - [x] The pop-up window has a shadow to show that it is a pop-up and appears floating on the screen.
    - [x] The backdrop of the pop-up appears darker or in a different shade than before. including:
    - [x] The pop-up displays additional details about the moving including:
      - [x] Runtime in minutes
      - [x] Backdrop poster
      - [x] Release date
      - [x] Genres
      - [x] An overview
  - [x] Users can use a drop-down menu to sort movies.
    - [x] Drop-down allows movies to be sorted by:
      - [x] Title (alphabetic, A-Z)
      - [x] Release date (chronologically, most recent to oldest)
      - [x] Vote average (descending, highest to lowest)
    - [x] When a sort option is clicked, movies display in a grid according to selected criterion.
  - [x] Website displays:
    - [x] Header section
    - [x] Banner section
    - [x] Search bar
    - [x] Movie grid
    - [x] Footer section
    - [x] *VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS*: To ease the grading process, please use the [color contrast checker](https://webaim.org/resources/contrastchecker/) to demonstrate to the grading team that text and background colors on your website have appropriate contrast. The Contrast Ratio should be above 4.5:1 and should have a green box surrounding it.
  - [x] *Deployment*
  - [x] Website is deployed via Render.
  - [x] *VIDEO WALKTHROUGH SPECIAL INSTRUCTIONS*: For ease of grading, please use the deployed version of your website when creating your walkthrough.

#### STRETCH FEATURES


- [x] *Embedded Movie Trailers*
  - [x] Within the pop-up modal displaying a movie's details, the movie trailer is viewable.
    -[x] When the trailer is clicked, users can play the movie trailer.
- [x] *Favorite Button*
  - [x] For each movie displayed, users can favorite the movie.
  - [x] There should be visual element (such as a heart icon) on each movie's tile to show whether or not the movie has been favorited.
  - [x] If the movie is not favorited:
    - [x] Clicking on the visual element should mark the movie as favorited
    - [x] There should be visual feedback (such as the heart turning a different color) to show that the movie has been favorited by the user.
  - [x] If the movie is already favorited:
    - [x] Clicking on the visual element should mark the movie as not favorited.
    - [x] There should be visual feedback (such as the heart turning a different color) to show that the movie has been unfavorited.
- [x] *Watched Checkbox*
  - [x] For each movie displayed, users can mark the movie as watched.
  - [x] There should be visual element (such as an eye icon) on each movie's tile to show whether or not the movie has been watched.
  - [x] If the movie has not been watched:
    - [x] Clicking on the visual element should mark the movie as watched
    - [x] There should be visual feedback (such as the eye turning a different color) to show that the movie has been watched by the user.
  - [x] If the movie is already watched:
    - [x] Clicking on the visual element should mark the movie as not watched.
    - [x] There should be visual feedback (such as the eye turning a different color) to show that the movie has not been watched.
- [x] *Sidebar*
  - [x] The website includes a side navigation bar.
  - [x] The sidebar has three pages:
    - [x] Home
    - [x] Favorites
    - [x] Watched
  - [x] The Home page displays all current movies in a grid view, the search bar, and the sort movies drop-down.
  - [x] The Favorites page displays all favorited movies in a grid view.
  - [x] The Watched page displays all watched movies in a grid view.

### Walkthrough Video


https://www.loom.com/share/41b5b487804e4bfc80460a8d5a6ec4ae?sid=b929caf2-8331-4441-9724-08f8336b1299

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

Yes, the states and useEffect that we learned in lab were essential to completing this assignment. I was able to use the useState hook to keep track of the movies that were favorited and watched, and the useEffect hook to fetch the data from the API and update the state when the user searches for a movie.

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.

I got all of the required features and stretch goals, but I think I could have made the side bar a little bit more polished. I would have liked to add some more animations, transitions, and not have it just be static on the screen.

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

I added the mobile responsiveness last second, so the boxes were large in the favorites/seen tab, but they were still in a grid. Also, for some reason, when I pressed the filter option, the drop down menu didnt show up on the recording, but was on my screen.

### Open-source libraries used

- Add any links to open-source libraries used in your project.

### Shout out

Give a shout out to somebody from your cohort that especially helped you during your project. This can be a fellow peer, instructor, TA, mentor, etc.

Jackson
Kevin
