# Child Theming #

A child theme is a theme that inherits the functionality of PageLines DMS and allows you to modify, or add to it' s functionality without the need to modify core files.

Developers can also publish their child themes to the PageLines Store.

## Child Theme Structure ##

PageLines Framework provides a free base child theme which you can use to create your own child themes which is available from the PageLines Store.

A typical PageLines child theme will have the following structure.

/sections
Your custom and modified sections live inside this directory.

setup.php
Loads the parent theme. Don't tamper with this. Gnomes are watching you.

info.txt
Provides long description for store, and changelog

style.css
Used to identify as child theme to the parent theme

style.less
All custom LESS and CSS live here

functions.php
All custom hooks and actions live here

welcome.php
It's highly recommended (but optional) to have a welcome panel with appropriate info.

16x16 welcome.png
Welcome panel will autoload a 16x16 icon named welcome.png

thumb.png
Artwork sized 300x225 used throughout the theme and store to identify theme

splash.png
Artwork sized 750 x 350 - only needed for selling on the PageLines Store

screenshot.png
Theme screenshots used on the PageLines Store. If multiple screenshots are desired, number appropriately. Ex: screenshot-1.png,screenshot2.png, etc.