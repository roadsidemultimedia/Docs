# Building Drag + Drop Sections #

PageLines Section system allows developers to use their imagination to create their own unique sections for extra functionality as well as offering these sections to other PageLines users via the [PageLines Store](http://www.pagelines.com/store).

Using this 'API', you can define what kind of content the sections load on the page, and use the option engine to add options directed at that particular sections.

## Setting Up & File Structure ##

The first part of section development, is setting up your section folder. 

Sections are supported in a variety of areas; specifically, they are supported in your plugins folder (with a special wrapper) and in your child theme 'sections' folder (child_root/sections/sectionFolder/). 

The folder name you choose for your section will become your global 'section ID'.  Inside this folder you'll have your master 'section.php' file where you'll most or all of the code for the section.

So to set up your basic section, you would have something like this (child_theme_root)/sections/sectionID/section.php

## Section Headers ##

Once you open up a section.php file, the first thing you'll see is the section headers. These are the basic information that you use to set up your section and how it works in DMS. 

Here is how the headers work and look in a section.php file:

```php
/*
	Section: Your Section Name
	Author: Your Name
	Author URI: http://www.yourwebsite.com
	Description: A short section description.
	Class Name: YourSectionClassName
	Filter: component
	Loading: active
*/
```
### Class Name Header ### 
This header must have the same value of your master section class (PHP class). We'll discuss this below. 

### Filter Header ### 
This header determines where your section will appear in the sections panel and can steer the behavior of the section as well. 
A 'Filter: full-width' statement will make your section full width and it won't be usable inside section areas. An example of this is the RevSlider section. 

### Loading Header ### 
This header determines if the section is actively loaded when a user drags it on to the page. This means it appears instantly without page refresh. Any other value here will require a page refresh on load of your section. 

Currently sections with a lot of javascript will require reloads but simpler sections may not. 

## Your Section Class ##











