# fyre.gg

https://www.fyre.gg/

Fyre.gg is a site provides on demand and indepth player statistics for the game League of Legends.  It allows users to search for both profiles and specific matches with dynamic photos, tooltips of items, spells and calculations of relevant statistics just as Kill/Death ratio and Creep score. The game boasts a player base of hundreds of millions of players world wide and is considered to be one of the most popular games in the world.

 *Future features*
 - Add more regions (may need to use subdomains for this)
 - Swap to ?=QUERY instead of current format
 - **Needs improvements to optimization.**  Need to consider moving certain operations to backend as so many functions, data parsing etc. is front-end loaded.  Many operations will have to be hidden behind loaders which is messer than trying to improve speed.
  - Figure out API server hosting and moving away from a monolithic app. (Possibly not necessary?)
 - More in depth pages for Champions, Items and Spells beyond just dyanimically rendered photos and tooltips.
 - Current tool for rendering more matches is fairly weak and want to rebuild.
 - Flesh out match page more in depth and take more advantage of the match statistics returned by Riot API.

*Current features*
 - Search Riot DB for match statistics on specific players.  Defaults to five most recent matches pulling kills/assists/deaths, items and match duration and creation times.  Build profile page with dynamic photos and tooltips of items, spells and calculations of relevant statistics just as Kill/Death Ratio and Creep Score.  Currently only allows for NA region but API routing built out to dyanmically allow for searching in 16 regions in the future.
 - Pull statistics on specific matches and pull data on all ten players included in the game similar to the profile pages.
 - Built out DB caching in order to allow for rate limiting.  API checks DB for cached profiles and matches prior hit Riot API for profile/match statistics.  Profile page has built out update profile button which allows user to manually refresh statistics to most recent matches.

 This repo was migrated from https://github.com/tdar31/fyre.gg-old-  The backend needed to be completely rebuilt hence the new repository.
