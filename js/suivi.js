function Suivi (){
	var self= this;

	self.setUp = function (){

		$('#navSuivi').on('click',function(){
			self.loadSuivi(); 	
		});
	};

	self.loadSuivi = function(){
		$('#content').load('../html/superviseur/suiviLivraison.html');
		$('#navBar').find('ul').find("[class*='active']").removeClass('active');
		$('#navSuivi').parent().addClass('active');
	};
}

