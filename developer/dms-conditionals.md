# To test if DMS is present and active #

To test if DMS is present and active in the framework (e.g. not version 2) just use the following code: 
```if( pl_has_editor() ){
	// your code
}```

## To test if in draft mode ##

If you want to test whether the editor is present and in 'draft' or editing mode. Just use this conditional: 
	if( pl_draft_mode() ){
		// your code
	}
	
## To get draft mode ##

If you want to test whether the editor is present and in 'draft' or editing mode. Just use this conditional: 
	if( pl_get_mode() == 'draft' ){
		// your code
	}

or 
	if( pl_get_mode() == 'live' ){
		// your code
	}