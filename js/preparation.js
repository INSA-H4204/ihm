function Preparation (){
	var self= this;

	self.setUp = function (){

		$('#navPreparation').on('click',function(){
			self.loadPreparation();
		});
	};

	self.loadPreparation= function(){
		$('#content').load('../html/superviseur/preparationLivraison.html');
		$('#navBar').find('ul').find("[class*='active']").removeClass('active');
		$('#navPreparation').parent().addClass('active');
	};
}
