'use strict';

var PDFApp = angular.module("PDFReaderApp", []).config( [
    '$compileProvider',
    function( $compileProvider )
    {   
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|blob):/);
        // Angular before v1.2 uses  $compileProvider.urlSanitizationWhitelist(/^\s*(https?|blob):/);
    }
]);