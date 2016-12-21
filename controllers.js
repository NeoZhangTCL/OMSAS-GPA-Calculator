'use strict';

function IndexController() {

}

function TranscriptReaderCtrl($http, $scope, $window, $sce) {
	$scope.uploadedPDF = "";
	$scope.fileUrl = "";

	$scope.getPDF = function(files) {
		var fileUrl = $window.URL.createObjectURL(files[0]);
		console.log(fileUrl);
		$scope.fileUrl = $sce.trustAsResourceUrl(fileUrl);
		console.log($scope.fileUrl);
	}

}