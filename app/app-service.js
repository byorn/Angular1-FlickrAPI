'use strict';
 
angular.module('NewsCorpTestApp')
 
.factory('PhotoService',PhotoService);


PhotoService.$inject = ['$http'];



function PhotoService($http){
  
   return {
        getPhotoDetails: getPhotoDetails
    };
    
    function getPhotoDetails(searchText){
      
        var flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=JSON_CALLBACK&tags=" + searchText + "&format=json"

        return $http.jsonp(flickrAPI)
          .success(function (data, status, headers, config) {
          return data;

        })
        .error(function (data, status, headers, config) {
            console.log("Error accessing flickr api");
        
        });
      
    }
    
    
  
}