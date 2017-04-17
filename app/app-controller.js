'use strict';
 
angular.module('NewsCorpTestApp')
 
.controller('PhotoController',PhotoController);

PhotoController.$inject = ['PhotoService'];

function PhotoController(PhotoService){
  
  var photoController = this;
  
  photoController.searchText = '';
  photoController.showSearching=false;   
  photoController.noResultsFound=false;
  photoController.selectedImage='';
  photoController.selectedTitle=''
  photoController.selectedLink='';    
  
  photoController.images = {};
  
  photoController.search = function(searchText){
      
      photoController.showSearching=true;   
     
      PhotoService.getPhotoDetails(searchText).then(function(data){
       
         photoController.images = data.data;
         photoController.showSearching=false;
    
         if(photoController.images.items && photoController.images.items.length == 0){
              photoController.noResultsFound=true;
         }else{
              photoController.noResultsFound=false;
         }
          
        
      });
    
  } 
  
  photoController.openImage = function(i){
      
      photoController.selectedImage = i.media.m ;
      photoController.selectedTitle=i.title;
      photoController.selectedLink=i.link;    
      
      document.getElementById('light').style.display='block';
      document.getElementById('fade').style.display='block';
      
  }
    
}
 
        
        
