var checkCommentsSectionExists = setInterval(
    function() {
        if ( typeof document.getElementById( 'comments' ) !== 'undefined' ) {
            console.log( 'Comments section exists! Kill it!' );
            document.getElementById( 'comments' ).style.display = 'none';
            clearInterval( checkCommentsSectionExists );
        }
    },
    100 // check every 100 ms to see if the comments section exists on the page yet
);
