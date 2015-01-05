function Edition (){
	var self= this;

	self.setUp = function (){
		$('#navEdition').on('click',function(){
			self.loadEdition();
		});
	};

	self.loadEdition= function(){
		$('#content').load('../html/superviseur/editionLivraison.html');
		$('#navBar').find('ul').find("[class*='active']").removeClass('active');
		$('#navEdition').parent().addClass('active');
	};
}
