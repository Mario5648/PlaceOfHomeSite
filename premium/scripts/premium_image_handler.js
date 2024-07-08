var loadFile = function(event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);

	const file = event.target.files[0];
  
    if (file) {
      const reader = new FileReader();
  
      reader.onload = function (e) {
        const base64String = e.target.result;
  
        document.getElementById('output').value = base64String;

      };
  
      reader.readAsDataURL(file);
    }
};
