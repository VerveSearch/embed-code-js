# embed-code-js

Embed-code-js plugin helps generating embed code snippet on the page.


## Dependencies and Libraries 

1. jquery.min.js


## Usage

Instantiate EmbedCode() on a DOM object.
If no URL provided, will grab the current URL and insert in in iframe src.
Width and height set the dimentions of the iframe.
Extra is any extra tags you want to add after iframe.
ClassName a class to add to div container of the textarea.



```javascript

	$('.embed-code').EmbedCode({  
		height : 600,
		width: 500,
		className : 'embed',
		url : 'http://www.vervesearch.com/blog/',
		extra : '<small><a href="http://sampledomain.com/sample-url">Sample Extra Info</a> by <a href="http://www.vervesearch.com/"> VerveSearch </a></small>'
	});


```


