# Translate #

All of the PageLines products are localization-ready, which means they can easily be translated into other languages. There are a number of methods to create a translation, most of which are outlined in the [WordPress codex](http://codex.wordpress.org/Translating_WordPress).

We offer a community-driven [Translation center](http://www.pagelines.com/translate/projects) for PageLines and welcome you to sign-up and help translate. If your language is not listed, please [let us know](mailto:hello@pagelines.com) and we can add it for you.

Alternatively, if you wish to add translations manually, you can do so by using [PoEdit](http://www.poedit.net/).

## Translate using Poedit ##

* Look up [Localization on WordPress](http://codex.wordpress.org/Translating_WordPress#Localization_Technology)
* Use [PoEdit](http://www.poedit.net/) to create your translation files.
* After translating the file by Poedit save the translation. Poedit creates two files for you. One with the extension “.po” and the other one with the extension “.mo”.

Via FTP, upload both files to the “language” folder located in the PageLines theme folder. Alternatively, you could use another plugin (e.g. Codestyling plugin) to apply the translations.

You will also need to follow the instructions from the [WordPress in your language](http://codex.wordpress.org/WordPress_in_Your_Language) codex article.

## RTL (Right-to-Left) ##

If you add Arabic, Hebrew, Persian, or any other RTL language it should automatically enable Right-to-left (RTL support in PageLines DMS.

PageLines Framework is built to recognize RTL and changes the styles accordingly.

* Open **"wp-config.php"** in your WordPress root directory.
* Find this line: `define ('WPLANG', '');`
* Add your language as described on the [Installing WordPress in Your Language](http://codex.wordpress.org/Installing_WordPress_in_Your_Language) codex article